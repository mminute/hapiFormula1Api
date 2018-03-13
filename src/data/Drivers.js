// const Driver = require('./models/Driver');

// primaryKey: '', country: '', dob: 'dob', number: '', name: '', pob: '', seasonsActive: [], notes: '',

// TODO's:
// Object so that we can find all drivers from a country?
// Date object in JS?

// Note JS Date object is 0 indexed for the month
const drivers = [
  {
    primaryKey: 'lewis-hamilton', country: 'United Kingdom', dob: new Date(Date.UTC(1985, 0, 7)), number: '44', name: 'Lewis Hamilton', pob: 'Stevenage, England', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'valtteri-bottas', country: 'Finland', dob: new Date(Date.UTC(1987, 7, 28)), number: '77', name: 'Valtteri Bottas', pob: 'Nastola, Finland', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'sebastian-vettel', country: 'Germany', dob: new Date(Date.UTC(1987, 6, 3)), number: '5', name: 'Sebastian Vettel', pob: 'Heppenheim, Germany', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'kimi-raikkonen', country: 'Finland', dob: new Date(Date.UTC(1979, 9, 17)), number: '7', name: 'Kimi Räikköne', pob: 'Espoo, Finland', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'daniel-ricciardo', country: 'Australia', dob: new Date(Date.UTC(1989, 6, 1)), number: '3', name: 'Daniel Ricciardo', pob: 'Perth, Australi', seasonsActive: [], notes: '',
  },
  {
    // Driver number changed?
    primaryKey: 'max-verstappen', country: 'Netherlands', dob: new Date(Date.UTC(1997, 8, 30)), number: '33', name: 'Max Verstappen', pob: 'Hasselt, Belgium', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'sergio-perez', country: 'Mexico', dob: new Date(Date.UTC(1990, 0, 26)), number: '11', name: 'Sergio Perez', pob: 'Guadalajara, Mexico', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'esteban-ocon', country: 'France', dob: new Date(Date.UTC(1996, 8, 17)), number: '31', name: 'Esteban Ocon', pob: 'Évreux, Normandy', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'felipe-massa', country: 'Brazil', dob: new Date(Date.UTC(1981, 3, 25)), number: '19', name: 'Felipe Massa', pob: 'São Paulo, Brazil', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'lance-stroll', country: 'Canada', dob: new Date(Date.UTC(1998, 9, 29)), number: '18', name: 'Lance Stroll', pob: 'Montreal, Canada', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'daniil-kvyat', country: 'Russian Federation', dob: new Date(Date.UTC(1994, 3, 26)), number: '26', name: 'Daniil Kvyat', pob: 'Ufa, Russia', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'carlos-sainz', country: 'Spain', dob: new Date(Date.UTC(1994, 8, 1)), number: '55', name: 'Carlos Sainz', pob: 'Madrid, Spain', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'romain-grosjean', country: 'France', dob: new Date(Date.UTC(1986, 3, 17)), number: '8', name: 'Romain Grosjean', pob: 'Geneva, Switzerland', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'kevin-magnussen', country: 'Denmark', dob: new Date(Date.UTC(1992, 9, 5)), number: '20', name: 'Kevin Magnussen', pob: 'Roskilde, Denmark', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'nico-hulkenberg', country: 'Germany', dob: new Date(Date.UTC(1987, 7, 19)), number: '27', name: 'Nico Hulkenberg', pob: 'Emmerich am Rhein, Germany', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'jolyon-palmer', country: 'United Kingdom', dob: new Date(Date.UTC(1991, 0, 20)), number: '30', name: 'Jolyon Palmer', pob: 'Horsham, England', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'fernando-alonso', country: 'Spain', dob: new Date(Date.UTC(1981, 6, 29)), number: '14', name: 'Fernando Alonso', pob: 'Oviedo, Spain', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'stoffel-vandoorne', country: 'Belgium', dob: new Date(Date.UTC(1992, 2, 26)), number: '2', name: 'Stoffel Vandoorne', pob: 'Kortrijk, Belgium', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'marcus-ericsson', country: 'Sweden', dob: new Date(Date.UTC(1990, 8, 2)), number: '9', name: 'Marcus Ericsson', pob: 'Kumla, Sweden', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'pascal-wehrlein', country: 'Germany', dob: new Date(Date.UTC(1994, 9, 18)), number: '94', name: 'Pascal Wehrlein', pob: 'Sigmaringen, Germany', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'antonio-giovinazzi', country: 'Italy', dob: new Date(Date.UTC(1993, 11, 14)), number: '50', name: 'Antonio Giovinazzi', pob: 'Martina Franca, Italy', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'jenson-button', country: 'United Kingdom', dob: new Date(Date.UTC(1980, 0, 19)), number: '22', name: 'Jenson Button', pob: 'Frome, England', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'paul-diresta', country: 'United Kingdom', dob: new Date(Date.UTC(1986, 3, 16)), number: '40', name: 'Paul di Resta', pob: 'Uphall, West Lothian, Scotland', seasonsActive: [], notes: '',
  },
];

module.exports = drivers;
