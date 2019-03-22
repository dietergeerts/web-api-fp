/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties}
 *
 * @function
 * @param {ElementProperties} properties
 * @returns {function(Element): void}
 * @throws {SyntaxError} by innerHTML, outerHTML
 * @throws {NoModificationAllowedError} by innerHTML, outerHTML
 */
export const setElementProperties = (properties) => (element) => {
  Object.entries(properties).forEach(([property, value]) => {
    element[property] = value;
  });
};
