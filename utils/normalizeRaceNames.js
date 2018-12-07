const normalizeRaceNames = (eventNameParam) => {
  switch (eventNameParam) {
    case 'australia':
      return 'australian';
    case 'china':
      return 'chinese';
    case 'spain':
      return 'spanish';
    case 'canada':
      return 'canadian';
    case 'france':
      return 'french';
    case 'britain':
      return 'british';
    case 'hungary':
      return 'hungarian';
    case 'belgium':
      return 'belgian';
    case 'italy':
      return 'italian';
    case 'japan':
      return 'japanese';
    case 'us':
      return 'united states';
    case 'mexico':
      return 'mexican';
    case 'brazil':
      return 'brazilian';
    case 'abudhabi':
      return 'abu dhabi';
    default:
      return eventNameParam;
  }
};

export default normalizeRaceNames;
