function lowerCamelCase(str) {
  let newStr = str.toLowerCase();
  const words = newStr.split(' ');
  const newWord = [];
  newWord[0] = words[0][0].toLowerCase() + words[0].substring(1);
  for (let i = 1; i < words.length; i += 1) {
    for (let j = 0; j < words[i].length; j += 1) {
      newWord[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
  }
  newStr = newWord.join('');
  return newStr;
}

module.exports = lowerCamelCase;
