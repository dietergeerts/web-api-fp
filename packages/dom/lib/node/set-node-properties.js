/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties}
 *
 * @function
 * @param {NodeProperties} properties
 * @returns {function(Node): void}
 */
export const setNodeProperties = (properties) => (element) => {
  Object.entries(properties).forEach(([property, value]) => {
    element[property] = value;
  });
};
