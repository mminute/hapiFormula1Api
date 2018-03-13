// const Driver = require('./models/Driver');

// primaryKey: '', country: '', dob: 'dob', number: '', name: '', pob: '', seasonsActive: [], notes: '',

// TODO's:
// Object so that we can find all drivers from a country?
// Date object in JS?
const drivers = [
  {
    primaryKey: 'lewis-hamilton', country: 'United Kingdom', dob: 'dob', number: '44', name: 'Lewis Hamilton', pob: 'Stevenage, England', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'valtteri-bottas', country: 'Finland', dob: 'dob', number: '77', name: 'Valtteri Bottas', pob: 'Nastola, Finland', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'sebastian-vettel', country: 'Germany', dob: 'dob', number: '5', name: 'Sebastian Vettel', pob: 'Heppenheim, Germany', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'kimi-raikkonen', country: 'Finland', dob: 'dob', number: '7', name: 'Kimi Räikköne', pob: 'Espoo, Finland', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'daniel-ricciardo', country: 'Australia', dob: 'dob', number: '3', name: 'Daniel Ricciardo', pob: 'Perth, Australi', seasonsActive: [], notes: '',
  },
  {
    // Driver number changed?
    primaryKey: 'max-verstappen', country: 'Netherlands', dob: 'dob', number: '33', name: 'Max Verstappen', pob: 'Hasselt, Belgium', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'sergio-perez', country: 'Mexico', dob: 'dob', number: '11', name: 'Sergio Perez', pob: 'Guadalajara, Mexico', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'esteban-ocon', country: 'France', dob: 'dob', number: '31', name: 'Esteban Ocon', pob: 'Évreux, Normandy', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'felipe-massa', country: 'Brazil', dob: 'dob', number: '19', name: 'Felipe Massa', pob: 'São Paulo, Brazil', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'lance-stroll', country: 'Canada', dob: 'dob', number: '18', name: 'Lance Stroll', pob: 'Montreal, Canada', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'daniil-kvyat', country: 'Russian Federation', dob: 'dob', number: '26', name: 'Daniil Kvyat', pob: 'Ufa, Russia', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'carlos-sainz', country: 'Spain', dob: 'dob', number: '55', name: 'Carlos Sainz', pob: 'Madrid, Spain', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'romain-grosjean', country: 'France', dob: 'dob', number: '8', name: 'Romain Grosjean', pob: 'Geneva, Switzerland', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'kevin-magnussen', country: 'Denmark', dob: 'dob', number: '20', name: 'Kevin Magnussen', pob: 'Roskilde, Denmark', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'nico-hulkenberg', country: 'Germany', dob: 'dob', number: '27', name: 'Nico Hulkenberg', pob: 'Emmerich am Rhein, Germany', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'jolyon-palmer', country: 'United Kingdom', dob: 'dob', number: '30', name: 'Jolyon Palmer', pob: 'Horsham, England', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'fernando-alonso', country: 'Spain', dob: 'dob', number: '14', name: 'Fernando Alonso', pob: 'Oviedo, Spain', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'stoffel-vandoorne', country: 'Belgium', dob: 'dob', number: '2', name: 'Stoffel Vandoorne', pob: 'Kortrijk, Belgium', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'marcus-ericsson', country: 'Sweden', dob: 'dob', number: '9', name: 'Marcus Ericsson', pob: 'Kumla, Sweden', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'pascal-wehrlein', country: 'Germany', dob: 'dob', number: '94', name: 'Pascal Wehrlein', pob: 'Sigmaringen, Germany', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'antonio-giovinazzi', country: 'Italy', dob: 'dob', number: '50', name: 'Antonio Giovinazzi', pob: 'Martina Franca, Italy', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'jenson-button', country: 'United Kingdom', dob: 'dob', number: '22', name: 'Jenson Button', pob: 'Frome, England', seasonsActive: [], notes: '',
  },
  {
    primaryKey: 'paul-diresta', country: 'United Kingdom', dob: 'dob', number: '40', name: 'Paul di Resta', pob: 'Uphall, West Lothian, Scotland', seasonsActive: [], notes: '',
  },
];

module.exports = drivers;

// hamilton = Driver.create!(
//   dob: Date.new(1985, 1, 7),
// bottas = Driver.create!(
//   dob: Date.new(1987, 8, 28),
// vettel = Driver.create!(
//   dob: Date.new(1987, 7, 3),
// raikkonen = Driver.create!(
//   dob: Date.new(1979, 10, 17),
// ricciardo = Driver.create!(
//   dob: Date.new(1989, 7, 1),
// verstapen = Driver.create!(
//   dob: Date.new(1997, 9, 30),
// perez = Driver.create!(
//   dob: Date.new(1990, 1, 26),
// ocon = Driver.create!(
//   dob: Date.new(1996, 9, 17),
// massa = Driver.create!(
//   dob: Date.new(1981, 4, 25),
// stroll = Driver.create!(
//   dob: Date.new(1998, 10, 29),
// kvyat = Driver.create!(
//   dob: Date.new(1994, 4, 26),
// sainz = Driver.create!(
//   dob: Date.new(1994, 9, 1),
// grosjean = Driver.create!(
//   dob: Date.new(1986, 4, 17),
// magnussen = Driver.create!(
//   dob: Date.new(1992, 10, 5),
// hulkenberg = Driver.create!(
//   dob: Date.new(1987, 8, 19),
// palmer = Driver.create!(
//   dob: Date.new(1991, 1, 20),
// alonso = Driver.create!(
//   dob: Date.new(1981, 7, 29),
// vandoorne = Driver.create!(
//   dob: Date.new(1992, 3, 26),
// ericsson = Driver.create!(
//   dob: Date.new(1990, 9, 02),
// wehrlein = Driver.create!(
//   dob: Date.new(1994, 10, 18),
// giovinazzi = Driver.create!(
//   dob: Date.new(1993, 12, 14),
// button = Driver.create!(
//   dob: Date.new(1980, 1, 19),
// diResta = Driver.create!(
//   dob: Date.new(1986, 4, 16),

