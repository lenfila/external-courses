function firstSymbol(line) {
  const newLine = line[0].toUpperCase() + line.substring(1);
  return newLine;
}

module.exports = firstSymbol;
