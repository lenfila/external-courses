function analogueReduce(array, callback, initialValue = 0) {
  let previousValue;
  let j;

  if (initialValue === 0) {
    previousValue = array[0];
    j = 1;
  } else {
    previousValue = initialValue;
    j = 0;
  }
  for (let i = j; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = analogueReduce;
