function removeEmptyFields(obj) {
  if (Array.isArray(obj)) {
    return obj.map(removeEmptyFields).filter((item) => item != null);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, v]) => v !== null && v !== '' && v !== undefined)
        .map(([k, v]) => [k, removeEmptyFields(v)])
    );
  }
  return obj;
}

module.exports = { removeEmptyFields };
