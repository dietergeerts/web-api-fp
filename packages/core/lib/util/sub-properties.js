/**
 * @typedef {Object} SubProperties
 * @property {string[]} [_subs]
 */

/**
 * @function
 * @param {string[]} subs
 * @param {Object<string, *>} properties
 * @returns {SubProperties}
 */
export const subProperties = (subs, properties) => {
  properties._subs = (properties._subs || []).concat(subs);
  return properties;
};
