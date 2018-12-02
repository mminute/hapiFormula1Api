import SeasonsData from '../data/Seasons';
import SeasonToPointsSystem from './DriverPoints';

const sortByPoints = (a, b) => {
  if (b.points > a.points) {
    return 1;
  }

  if (b.points < a.points) {
    return -1;
  }

  return 0;
};

const raceToDriverPoints = (season) => {
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
  // constructor ranking
  const seasons = {};
  const seasonKeys = Object.keys(SeasonsData);
  seasonKeys.forEach((k) => {
    const numberOfRacesComplete = SeasonsData[k].length;
    const calculateRacePoints = raceToDriverPoints(k);
    const driverPoints =
      SeasonsData[k]
        .map(race => calculateRacePoints(race))
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

    seasons[k] = {
      racesComplete: numberOfRacesComplete,
      driverRanking: driverPoints,
      constructorRanking: [],
    };
  });
  return seasons;
};

export default makeSeasonSummaries();
