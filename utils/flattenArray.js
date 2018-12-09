const flattenArray = (arr) => {
  const reduceFunction = (acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flattenArray(val));
    }

    return acc.concat(val);
  };

  return arr.reduce(reduceFunction, []);
};

export default flattenArray;
