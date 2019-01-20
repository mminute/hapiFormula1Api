import CalculatedStats from '../data/Stats/CalculatedStats';

// Stat ideas:
//  Season:
//    Points per race by driver/constructor
//    Races completed by driver/constructor
//      Laps completed?
//    DNF by crash/mechanical/etc
//    Pit stops
//    Fastest laps by driver/constructor
//    Fastest laps by constructor
//    Pole positions by driver/constructor
//    Laps led by driver/constructor
//    Driver career stats

const StatsController = (request, h) => {
  // 'stats/{stat}/{year}/{event?}'
  const { event, stat, year } = request.params;

  if (stat === 'fastest-lap') {
    return CalculatedStats.fastestLaps[parseInt(year, 10)];
  }

  if (stat === 'podiums') {
    return CalculatedStats.podiums[parseInt(year, 10)];
  }

  if (stat === 'points-per-race') {
    return CalculatedStats.pointsPerRace[parseInt(year, 10)];
  }

  return 'StatsController';
};

export default StatsController;
