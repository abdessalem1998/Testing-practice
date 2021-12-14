const stringLength = (str) => {
  return str.length;
  if (str.length < 1 || str.length > 10) {
    throw Error('The word length must be at least 1 character long and not longer than 10 characters');
  } else {
    return str.length;
  }
}
module.exports = stringLength;
