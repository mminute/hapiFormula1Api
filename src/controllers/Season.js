const SeasonController = (request, h) => {
  console.log('request.params.year', request.params.year);
  return { hello: 'world' };
};

export default SeasonController;
