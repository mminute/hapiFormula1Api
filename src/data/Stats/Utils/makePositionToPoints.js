import SeasonToPointsSystem from '../../../models/DriverPoints';

const makePositionToPoints = year => position =>
  SeasonToPointsSystem[year][position];

export default makePositionToPoints;
