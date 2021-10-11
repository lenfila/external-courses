function deleteFirstLastWhitespace(line) {
  const first = line.indexOf(' ');
  const last = line.lastIndexOf(' ');
  const newLine = line.substring(first + 1, last);
  return newLine;
}

module.exports = deleteFirstLastWhitespace;
