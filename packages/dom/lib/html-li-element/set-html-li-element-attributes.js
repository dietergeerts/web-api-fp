import { setHTMLElementAttributes } from '../html-element/set-html-element-attributes';

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#Attributes}
 *
 * @function
 * @param {HTMLLIElementAttributes} attributes
 * @returns {function(HTMLLIElement): void}
 * @throws {InvalidCharacterError}
 */
export const setHTMLLIElementAttributes = attributes => element => {
  setHTMLElementAttributes(attributes)(element);
};
