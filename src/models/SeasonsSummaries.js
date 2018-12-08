import SeasonsData from '../data/Seasons';
import SeasonToPointsSystem from './DriverPoints';
import constructorChampionshipCorrections from './constructorChampionshipCorrections';

const sortByPoints = (a, b) => {
  if (typeof b.points === 'string') {
    return -1;
  }

  if (b.points > a.points) {
    return 1;
  }

  if (b.points < a.points) {
    return -1;
  }

  return 0;
};

const seasonToDriverPoints = (season) => {
  const pointsSystem = SeasonToPointsSystem[season];
  return (race) => {
    const { classifications } = race;
    return classifications.map(classification => ({
      points: pointsSystem[classification.position] || 0,
      driver: classification.driver,
    }));
  };
};

const makeSeasonSummaries = () => {
  const seasons = {};
  const seasonKeys = Object.keys(SeasonsData);
  seasonKeys.forEach((k) => {
    const races = SeasonsData[k];
    const numberOfRacesComplete = races.length;
    const calculateDriverPoints = seasonToDriverPoints(k);
    const driverPoints =
      races
        .map(race => calculateDriverPoints(race))
        .reduce((accumulator, current) => {
          const newTotals = [];
          current.forEach((currentEntry) => {
            const previousTotal =
              accumulator.find(prevEntry => prevEntry.driver === currentEntry.driver);

            if (previousTotal) {
              const total = previousTotal.points + currentEntry.points;
              newTotals.push({ driver: currentEntry.driver, points: total });
            } else {
              newTotals.push(currentEntry);
            }
          });
          return newTotals;
        })
        .sort(sortByPoints);

    const allConstructorResults = [];

    races
      .forEach((race) => {
        const { classifications } = race;
        const pointsSystem = SeasonToPointsSystem[k];

        classifications.forEach((classification) => {
          allConstructorResults.push({
            points: pointsSystem[classification.position] || 0,
            team: classification.team,
          });
        });
      });

    const constructorPoints =
      constructorChampionshipCorrections(k, allConstructorResults
        .reduce((accumulator, currentClassification) => {
          const newTotals = [...accumulator];
          const constructorEntry =
            newTotals.find(entry => entry.team === currentClassification.team);

          let constructorIdx;
          if (constructorEntry) {
            constructorIdx = newTotals.indexOf(constructorEntry);
          }

          if (constructorIdx > -1) {
            const previousConstructorEntry = accumulator[constructorIdx];
            const newConstructorEntry =
              {
                ...previousConstructorEntry,
                points: previousConstructorEntry.points + currentClassification.points,
              };

            newTotals[constructorIdx] = newConstructorEntry;
          } else {
            newTotals.push(currentClassification);
          }

          return newTotals;
        }, []))
        .sort(sortByPoints);

    seasons[k] = {
      racesComplete: numberOfRacesComplete,
      driverRanking: driverPoints,
      constructorRanking: constructorPoints,
    };
  });
  return seasons;
};

export default makeSeasonSummaries();
