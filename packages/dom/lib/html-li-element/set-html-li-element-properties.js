import { setHTMLElementProperties } from '../html-element/set-html-element-properties';

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement#Properties}
 *
 * @function
 * @param {HTMLLIElementProperties} properties
 * @returns {function(HTMLLIElement): void}
 * @throws {SyntaxError} by innerHTML, outerHTML
 * @throws {NoModificationAllowedError} by innerHTML, outerHTML
 */
export const setHTMLLIElementProperties = properties => element => {
  setHTMLElementProperties(properties)(element);
};
