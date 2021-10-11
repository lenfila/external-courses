function propertiesPrototypeOnly(property, objectExample) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in objectExample) {
    if (key === property) {
      if (!objectExample.hasOwnProperty(property)) {
        return objectExample[property];
      }
    }
  }
  return undefined;
}

module.exports = propertiesPrototypeOnly;
