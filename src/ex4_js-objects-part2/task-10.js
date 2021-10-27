function flipOver(line) {
  let newLine = '';
  for (let i = line.length - 1; i >= 0; i -= 1) {
    newLine += line[i];
  }
  return newLine;
}

module.exports = flipOver;
