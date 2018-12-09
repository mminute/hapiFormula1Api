import Hapi from 'hapi';
import SeasonController from '../../controllers/Season';
import SeasonsController from '../../controllers/Seasons';
import StatsController from '../../controllers/Stats';

const makeVersionPath = version => path => version + path;

const v1 = makeVersionPath('/v1/');

const server = new Hapi.Server({ port: 3000, host: 'localhost' });

const registerRoutes = () => {
  server.route({
    method: 'GET',
    path: v1('index'),
    handler: () => 'index',
    // Route to tell you all the possible routes/data?
  });
  server.route({
    method: 'GET',
    path: v1('seasons'),
    handler: SeasonsController,
  });
  server.route({
    method: 'GET',
    path: v1('season/{year}/{event?}'),
    handler: SeasonController,
  });
  server.route({
    method: 'GET',
    path: v1('stats/{stat}/{year}/{event?}'),
    handler: StatsController,
  });
};

const init = async () => {
  registerRoutes();
  await server.start();
  return server;
};

init().then((serv) => {
  console.log(`Server Started! ${serv.info.uri}`);
}).catch((err) => {
  console.log(err);
});
