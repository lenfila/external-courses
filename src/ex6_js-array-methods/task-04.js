function analogueFilter(array, callback) {
  const newarray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      newarray.push(array[i]);
    }
  }

  return newarray;
}

module.exports = analogueFilter;
