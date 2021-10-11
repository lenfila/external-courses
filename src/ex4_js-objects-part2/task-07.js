function trimString(str, length) {
  let newStr;
  if (str.length > length) {
    newStr = str.slice(0, length - 1);
    newStr += String.fromCharCode(8230);
  }
  return newStr;
}

module.exports = trimString;
