function analogueSlice(array, begin = 0, end = 0) {
  const newar = [];
  const beg = Math.abs(begin);
  let en = Math.abs(end);

  if (begin === 0 && end === 0) {
    for (let i = 0; i < array.length; i += 1) {
      newar[i] = array[i];
    }

    return newar;
  }
  if (end === 0) {
    if (begin < 0) {
      if (beg > array.length) {
        for (let i = 0; i < array.length; i += 1) {
          newar[i] = array[i];
        }

        return newar;
      }
      // eslint-disable-next-line no-sequences
      for (let i = 0, j = array.length - beg; i < beg, j < array.length; i += 1, j += 1) {
        newar[i] = array[j];
      }
    } else {
      // eslint-disable-next-line no-sequences
      for (let i = 0, j = begin; i < (array.length - begin), j < array.length; i += 1, j += 1) {
        newar[i] = array[j];
      }
    }

    return newar;
  }
  if (begin < 0 && end < 0) {
    if (beg > array.length) {
      for (let i = 0; i < array.length - en; i += 1) {
        newar[i] = array[i];
      }

      return newar;
    }
    // eslint-disable-next-line no-sequences
    for (let i = 0, j = array.length - beg; i < (beg - en), j < array.length - en; i += 1, j += 1) {
      newar[i] = array[j];
    }

    return newar;
  }
  if (begin < 0 && end > 0) {
    if (beg > array.length) {
      for (let i = 0; i < end; i += 1) {
        newar[i] = array[i];
      }

      return newar;
    }
    // eslint-disable-next-line no-sequences
    for (let i = 0, j = array.length - beg; i < end - (array.length - beg), j < end;
      i += 1, j += 1) {
      newar[i] = array[j];
    }

    return newar;
  }
  if (begin > 0 && end < 0) {
    // eslint-disable-next-line no-sequences
    for (let i = 0, j = begin; i < array.length - en - begin, j < array.length - en;
      i += 1, j += 1) {
      newar[i] = array[j];
    }

    return newar;
  }
  if (en > array.length) {
    en = array.length;
  }
  // eslint-disable-next-line no-sequences
  for (let i = 0, j = begin; i < (en - beg), j < en; i += 1, j += 1) {
    newar[i] = array[j];
  }

  return newar;
}

module.exports = analogueSlice;
