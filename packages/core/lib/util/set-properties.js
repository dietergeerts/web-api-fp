/**
 * Set multiple properties at once.
 *
 * Properties added to `_subs`, will not be set directly,
 * their own properties will be set instead.
 *
 * @function
 * @param {Object<string, *>|SubProperties} properties
 * @param {Object} object
 * @returns {void}
 */
export const setProperties = (properties, object) => {
  Object.entries(properties).forEach(([property, value]) => {
    if (property !== '_subs') {
      if (properties._subs && properties._subs.includes(property)) {
        setProperties(value, object[property]);
      } else {
        object[property] = value;
      }
    }
  });
};
