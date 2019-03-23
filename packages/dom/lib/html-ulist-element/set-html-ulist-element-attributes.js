import { setHTMLElementAttributes } from '../html-element/set-html-element-attributes';

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul#Attributes}
 *
 * @function
 * @param {HTMLUListElementAttributes} attributes
 * @returns {function(HTMLUListElement): void}
 * @throws {InvalidCharacterError}
 */
export const setHTMLUListElementAttributes = attributes => element => {
  setHTMLElementAttributes(attributes)(element);
};
