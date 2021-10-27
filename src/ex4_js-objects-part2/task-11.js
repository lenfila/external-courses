function countSymbol(str) {
  const symbol = str.split('');
  let count;
  const res = [];
  for (let i = 0; i < symbol.length; i += 1) {
    count = 0;
    for (let j = 0; j < str.length; j += 1) {
      if (symbol[i] === str[j]) {
        count += 1;
      }
    }
    res[i] = `${symbol[i]}-${count}`;
  }
  const resultstr = res.filter((item, index) => res.indexOf(item) === index);
  for (let k = 0; k < resultstr.length; k += 1) {
    console.log(resultstr[k]);
  }
}

module.exports = countSymbol;
