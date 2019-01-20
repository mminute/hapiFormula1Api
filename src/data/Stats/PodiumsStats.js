import SeasonsData from '../Seasons';
import flattenArray from '../../../utils/flattenArray';
import getConstructors from './Utils/getConstructors';
import getDrivers from './Utils/getDrivers';

const collectPodiums = (podiumResults, type) => {
  const podiums = {
    1: [],
    2: [],
    3: [],
  };

  podiumResults.forEach((podium) => {
    podiums[parseInt(podium.position, 10)]
      .push({ event: podium.event, date: podium.date, ...(type === 'team' ? { driver: podium.driver } : {}) });
  });

  return {
    [type]: podiumResults[0][type],
    podiums,
  };
};

const calculatePodiumStats = () => {
  const classifications = {};
  const seasonKeys = Object.keys(SeasonsData);

  seasonKeys.forEach((year) => {
    const data = SeasonsData[year];
    const raceResults = data.map(race => (
      race.classifications.slice(0, 3).map(driverResult => ({
        ...driverResult,
        event: race.name,
        date: race.date,
      }))
    ));

    const allPodiumClassifications = flattenArray(raceResults);

    const driverResults =
      getDrivers(allPodiumClassifications)
        .map(name => allPodiumClassifications.filter(k => k.driver === name))
        .map(driverPodiums => collectPodiums(driverPodiums, 'driver'));

    const constructorResults =
      getConstructors(allPodiumClassifications)
        .map(team => allPodiumClassifications.filter(k => k.team === team))
        .map(driverPodiums => collectPodiums(driverPodiums, 'team'));

    classifications[year] = {
      drivers: driverResults,
      constructors: constructorResults,
    };
  });

  return classifications;
};

export default calculatePodiumStats();
