import Seasons from '../data/JSON/Seasons/index';

const SeasonController = (request, h) => {
  console.log('request.params.event?', request.params.event);
  return Seasons[request.params.year] || [];
};

export default SeasonController;
