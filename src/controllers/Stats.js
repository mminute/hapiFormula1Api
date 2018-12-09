import CalculatedStats from '../data/Stats/CalculatedStats';

// Stat ideas:
//  Season:
//    Podiums by driver/constructor
//       Wins by driver/constructor <- Subset of Podiums
//    Points per race by driver/constructor
//    Races completed by driver/constructor
//    DNF by crash/mechanical/etc
//    Pit stops
//    Fastest laps by driver/constructor
//    Fastest laps by constructor
//    Pole positions by driver/constructor
//    Laps led by driver/constructor

const StatsController = (request, h) => {
  // 'stats/{stat}/{year}/{event?}'
  const { event, stat, year } = request.params;

  if (stat === 'fastest-lap') {
    return CalculatedStats.fastestLaps[parseInt(year, 10)];
  }

  if (stat === 'podiums') {
    return CalculatedStats.podiums[parseInt(year, 10)];
  }

  return 'StatsController';
};

export default StatsController;
