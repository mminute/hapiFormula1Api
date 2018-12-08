// TODO: Note about Force India DQ'ed and points removed when renamed Racing Point force india
const constructorChampionshipCorrections = (season, uncorrected) => {
  if (season === '2018') {
    return uncorrected.map((constructorResult) => {
      if (constructorResult.team === 'sahara-force-india') {
        return {
          ...constructorResult,
          points: '59 - Forfeited',
          notes: 'Sahara Force India accumulated 59 points during the first 12 races of 2018.' +
            'The team went into administration during the Hungarian Grand Prix.  A consortium led by Lawrence Stroll ' +
            'acquired the team’s assets.  As the consortium had aquired the assets of Sahara Force India rather ' +
            'than purchasing the full team it was considered a new team and required to participate under a new ' +
            'name, Racing Point Force India. The FIA accepted the mid-season entry of Racing Point Force India to ' +
            'the Formula One World Championship on August 23, 2018 in accordance with Articles 8.1 and 8.2 of the ' +
            '2018 Formula One Sporting Regulations (Sporting Regulations). The FIA excluded Sahara Force India’s ' +
            'entry into the 2018 F1 championship due to it’s inability to comply with article 8.2f of the ' +
            'Sporting Regulations ("An undertaking by the applicant to ' +
            'participate in every Event with the number of cars and drivers entered."). Sahara Force India ' +
            'accepted its exclusion with immediate effect and forfeited all of its constructor championship points ' +
            'under article 6.2 ("The title of Formula One World Champion Constructor will be awarded to the ' +
            'competitor which has scored the highest number of points, results from both cars (see Article 8.6) ' +
            'being taken into account.")',
          citations: [
            {
              title: '2018 Sporting Regulations',
              url: 'https://www.fia.com/file/70710/download/23276?token=BP9SE1Yf',
            },
            {
              title: 'FIA Approves mid-season entry from Racing Point India',
              url: 'https://www.fia.com/news/fia-approves-mid-season-entry-racing-point-force-india',
            },
            {
              title: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Force_India#2018_season',
            },
            {
              title: 'Jalopnik',
              url: 'https://jalopnik.com/force-india-f1-forfeits-its-title-points-and-changes-it-1828558256',
            },
          ],
        };
      }
      return constructorResult;
    });
  }

  return uncorrected;
};

export default constructorChampionshipCorrections;
