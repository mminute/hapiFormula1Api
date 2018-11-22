import Seasons from '../data/Seasons';

const SeasonController = (request, h) => {
  console.log('request.params.event?', request.params.event);
  return Seasons[request.params.year] || [];
};

export default SeasonController;
