import { setHTMLElementProperties } from '../html-element/set-html-element-properties';

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement#Properties}
 *
 * @function
 * @param {HTMLAnchorElementProperties} properties
 * @returns {function(HTMLAnchorElement): void}
 * @throws {SyntaxError} by innerHTML, outerHTML
 * @throws {NoModificationAllowedError} by innerHTML, outerHTML
 */
export const setHTMLAnchorElementProperties = properties => element => {
  setHTMLElementProperties(properties)(element);
};
