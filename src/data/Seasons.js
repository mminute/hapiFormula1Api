import SeasonsData from '../data/JSON/Seasons/index';

const updateItaly2018 = (grandPrix) => {
  const { classifications } = grandPrix;
  const correctedClassifications = classifications.map((classification) => {
    if (classification.position === '6') {
      return {
        ...classification,
        position: 'Disqualified',
      };
    } else if (parseInt(classification.position, 10) > 6) {
      const correctedPosition = parseInt(classification.position, 10) + 1;
      return {
        ...classification,
        position: toString(correctedPosition),
      };
    }

    return classification;
  });

  return {
    ...grandPrix,
    classifications: correctedClassifications,
    notes: 'Romain Grosjean was disqualified from the 2018 Italian GP due to technical noncompiance.'
      + 'He finished in 6th place, thereby promoting Ocon, Perez, Sainz, Stroll, and Sirotkin'
      + ' within the points paying positions.'
      + '  https://www.formula1.com/en/latest/headlines/2018/9/grosjean-disqualified-from-italian-gp.html',
  };
};

const generateSeasonsData = () => {
  const corrected2018 = SeasonsData[2018].map((grandPrix) => {
    if (grandPrix.date === '20180902') {
      return updateItaly2018(grandPrix);
    }

    return grandPrix;
  });

  return {
    ...SeasonsData,
    2018: corrected2018,
  };
};

export default generateSeasonsData();
