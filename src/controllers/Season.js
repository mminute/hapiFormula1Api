import Seasons from '../data/Seasons';

const SeasonController = (request, h) => {
  const requestedSeason = Seasons[request.params.year];

  if (requestedSeason && request.params.event) {
    let requestedRace;
    if (request.params.event.match(/\d{8}/)) {
      requestedRace = requestedSeason.find(race => race.date === request.params.event);
    } else if (request.params.event.match(/^\d{2}$/)) {
      const requestedIdx = parseInt(request.params.event, 10) - 1;
      requestedRace = requestedSeason[requestedIdx] || {};
    } else {
      // Handle name
      requestedRace = {};
    }

    return requestedRace || {};
  }

  return requestedSeason || [];
};

export default SeasonController;
