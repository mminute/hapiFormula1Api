import Seasons from '../data/JSON/Seasons/index';

const SeasonsController = (request, h) => {
  // TODO: return a summary of the Seasons instead of full season data
  // Year, number of events, driver ranking, constructor ranking
  return Seasons;
};

export default SeasonsController;
