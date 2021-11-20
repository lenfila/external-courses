function analogueMap(array, callback) {
  const newarray = [];

  for (let i = 0; i < array.length; i += 1) {
    newarray.push(callback(array[i], i, array));
  }

  return newarray;
}

module.exports = analogueMap;
