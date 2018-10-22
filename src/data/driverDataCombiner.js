import EmbellishedDrivers from './Drivers/EmbellishedDrivers';
import HistoricalDrivers from './Drivers/HistoricalDrivers';
import Drivers2018 from './Drivers/2018/index';
import HallOfFameDrivers from './Drivers/HallOfFame/index';

// Select and combine all the objects with the same primary key

// Select all from Drivers/2018
// Select all from Drivers/HallOfFame
// Select all from EmbellishedDrivers
//      If there is an embellished drivers filter the wiki driver data to include only wikilink

const selectMatching = driverCollection => (
  primaryKey => (
    driverCollection.filter(drv => drv.primaryKey === primaryKey)[0] || {}
  )
);

const allDrivers = HistoricalDrivers.map((histDrv) => {
  const { primaryKey } = histDrv;

  const embellishedDriver = selectMatching(EmbellishedDrivers)(primaryKey);
  const driverProfile = selectMatching(Drivers2018)(primaryKey);
  const hallOfFame = selectMatching(HallOfFameDrivers)(primaryKey);

  let wikiData;
  if (embellishedDriver) {
    // TODO: filter the wiki data in the case of current drivers
    wikiData = { wikilink: histDrv.wikiLink };
  } else {
    wikiData = histDrv;
  }

  return Object.assign(wikiData, embellishedDriver, driverProfile, hallOfFame);
});

console.log(allDrivers[0])

// EmbellishedDrivers
//   primaryKey: 'pierre-gasly',
//   abbrev: 'GAS',
//   country: Countries.France,
//   dob: new Date(Date.UTC(1996, 1, 7)),
//   number: '10',
//   name: 'Pierre Gasly',
//   pob: 'Rouen, France',
//   seasonsActive: ['2017', '2018'],
//   notes: '',
//   socialMedia: {
//     web: 'https://www.pierregasly.com/',
//     twitter: 'pierregasly',
//     instagram: 'pierregasly',
//     facebook: 'PierreGasly',

// driver_info = {
//     name: remove_notes(data[0].css('a').text),
//     wikiLink: data[0].css('a')[0].attributes['href'].value,
//     country: data[1].text.gsub(/\u00A0/, ''),
//     seasons: match_seasons(data[2].text),
//     championships: remove_notes(data[3].text.gsub(/\n/, ',')),
//     entries: remove_notes(data[4].text),
//     starts: remove_notes(data[5].text),
//     poles: remove_notes(data[6].text),
//     wins: remove_notes(data[7].text),
//     podiums: remove_notes(data[8].text),
//     fastest_laps: remove_notes(data[9].text),
//     points: remove_notes(data[10].text),
// }

// Drivers/2018
// primaryKey, profileBio, profileBioUrl, yearByYear, yearByYearUrl

// Drivers/HallOfFame
// primaryKey, hallOfFameUrl, hallOfFameBio
