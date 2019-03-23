import { setHTMLElementAttributes } from '../html-element/set-html-element-attributes';

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes}
 *
 * @function
 * @param {HTMLAnchorElementAttributes} attributes
 * @returns {function(HTMLAnchorElement): void}
 * @throws {InvalidCharacterError}
 */
export const setHTMLAnchorElementAttributes = attributes => element => {
  setHTMLElementAttributes(attributes)(element);
};
