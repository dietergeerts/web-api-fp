import { setHTMLElementProperties } from '../html-element/set-html-element-properties';
import { setProperties } from '../util/set-properties';

/**
 * @type {SetProperties<HTMLLIElement,HTMLLIElementProperties>}
 * @throws {SyntaxError} by innerHTML, outerHTML
 * @throws {NoModificationAllowedError} by innerHTML, outerHTML
 */
export const setHTMLLIElementProperties = setProperties({
  mixins: [
    setHTMLElementProperties,
  ],
  properties: [
    'value',
  ],
});

/**
 * @typedef {HTMLElementProperties,IHTMLLIElementProperties} HTMLLIElementProperties
 */

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement#Properties}
 *
 * @typedef {Object} IHTMLLIElementProperties
 * @property {long} [value]
 */
