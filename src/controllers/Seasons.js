import SeasonsSummaries from '../models/SeasonsSummaries';

const SeasonsController = (request, h) => {
  // TODO: return a summary of the Seasons instead of full season data
  // Year, number of events, driver ranking, constructor ranking
  return SeasonsSummaries;
};

export default SeasonsController;
