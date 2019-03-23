import { setElementAttributes } from '../element/set-element-attributes';

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#List_of_global_attributes}
 *
 * @function
 * @param {HTMLElementAttributes} attributes
 * @returns {function(HTMLElement): void}
 * @throws {InvalidCharacterError}
 */
export const setHTMLElementAttributes = attributes => element => {
  setElementAttributes(attributes)(element);
};
