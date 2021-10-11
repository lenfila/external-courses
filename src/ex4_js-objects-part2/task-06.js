function upperFirstSymbolWord(line) {
  const word = line.split(' ');
  const newWord = [];
  for (let i = 0; i < word.length; i += 1) {
    newWord[i] = word[i][0].toUpperCase() + word[i].substring(1);
  }
  return newWord.join(' ');
}

module.exports = upperFirstSymbolWord;
