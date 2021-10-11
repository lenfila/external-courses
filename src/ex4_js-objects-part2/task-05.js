function findSubstring(string, substring) {
  if (string.indexOf(substring) === -1) {
    return false;
  }
  return true;
}

module.exports = findSubstring;
