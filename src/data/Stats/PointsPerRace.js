import flattenArray from '../../../utils/flattenArray';
import getConstructors from './Utils/getConstructors';
import getDrivers from './Utils/getDrivers';
import makePositionToPoints from './Utils/makePositionToPoints';
import SeasonsData from '../Seasons';

const collectPoints = entityType => ((entityResults) => {
  const collector = {};

  entityResults.forEach((entry) => {
    if (Object.keys(collector).includes(entry.year)) {
      collector[entry.year].push(entry);
    } else {
      collector[entry.year] = [entry];
    }
  });

  const yrs = Object.keys(collector);
  let totalPts = 0;
  let totalRaces = 0;

  const byYear = yrs.map((yr) => {
    const rcs = collector[yr];
    const points =
      rcs.map(r => r.points)
        .reduce((acc, current) => acc + current, 0);

    // TODO: dividing length by 2 could be incorrect since it is possible that a team
    // ran a different number of drivers than 2
    const raceCount = entityType === 'team' ? rcs.length / 2 : rcs.length;

    totalPts += points;
    totalRaces += raceCount;

    return {
      year: yr,
      points,
      numberOfRaces: raceCount,
    };
  });

  const calculatedPPR = {
    [entityType]: entityResults[0][entityType],
    seasonPointsPerRace: byYear,
    totalPoint: totalPts,
    totalRaces,
  };

  return calculatedPPR;
});

const calculatePointsPerRaceStats = () => {
  const pointsPerRace = {};
  const seasonKeys = Object.keys(SeasonsData);

  seasonKeys.forEach((year) => {
    const data = SeasonsData[year];
    const positionToPoints = makePositionToPoints(year);

    const raceResults = data.map(race => (
      race.classifications.map(driverResult => (
        {
          ...driverResult,
          points: positionToPoints(driverResult.position) || 0,
          event: race.name,
          date: race.date,
          year,
        }
      ))
    ));

    const allClassifications = flattenArray(raceResults);

    const driverResults =
      getDrivers(allClassifications)
        .map(name => allClassifications.filter(k => k.driver === name))
        .map(collectPoints('driver'));

    const constructorResults =
      getConstructors(allClassifications)
        .map(team => allClassifications.filter(k => k.team === team))
        .map(collectPoints('team'));

    pointsPerRace[year] = {
      drivers: driverResults,
      constructors: constructorResults,
    };
  });

  return pointsPerRace;
};

export default calculatePointsPerRaceStats();
