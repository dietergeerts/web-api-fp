import { setHTMLElementProperties } from '../html-element/set-html-element-properties';
import { setProperties } from '../util/set-properties';

/**
 * @type {SetProperties<HTMLUListElement,HTMLUListElementProperties>}
 * @throws {SyntaxError} by innerHTML, outerHTML
 * @throws {NoModificationAllowedError} by innerHTML, outerHTML
 */
export const setHTMLUListElementProperties = setProperties({
  mixins: [
    setHTMLElementProperties,
  ],
  properties: [],
});

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement#Properties}
 *
 * @typedef {HTMLElementProperties} HTMLUListElementProperties
 */
