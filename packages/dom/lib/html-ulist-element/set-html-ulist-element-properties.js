import { setHTMLElementProperties } from '../html-element/set-html-element-properties';

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement#Properties}
 *
 * @function
 * @param {HTMLUListElementProperties} properties
 * @returns {function(HTMLUListElement): void}
 * @throws {SyntaxError} by innerHTML, outerHTML
 * @throws {NoModificationAllowedError} by innerHTML, outerHTML
 */
export const setHTMLUListElementProperties = properties => element => {
  setHTMLElementProperties(properties)(element);
};
