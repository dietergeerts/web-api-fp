/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute}
 *
 * @function
 * @param {Object<string, string>} attributes
 * @returns {function(Element): void}
 * @throws {InvalidCharacterError}
 */
export const setElementAttributes = attributes => element => {
  Object.entries(attributes).forEach(([attribute, value]) => {
    element.setAttribute(attribute, value);
  });
};
