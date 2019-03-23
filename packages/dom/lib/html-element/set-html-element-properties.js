import { setElementProperties } from '../element/set-element-properties';
import { subProperties } from '@web-api-fp/core/lib/util/sub-properties';

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement#Properties}
 *
 * @function
 * @param {HTMLElementProperties} properties
 * @returns {function(HTMLElement): void}
 * @throws {SyntaxError} by innerHTML, outerHTML
 * @throws {NoModificationAllowedError} by innerHTML, outerHTML
 */
export const setHTMLElementProperties = properties => element => {
  setElementProperties(subProperties(['dataset', 'style'], properties))(element);
};


