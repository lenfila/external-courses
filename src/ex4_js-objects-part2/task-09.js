function insertLine(line, substring, position) {
  const words = line.split(' ');
  words.splice(position + 1, 0, substring);
  return words.join(' ');
}

module.exports = insertLine;
