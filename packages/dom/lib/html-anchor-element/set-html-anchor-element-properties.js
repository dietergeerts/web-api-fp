import { setHTMLElementProperties } from '../html-element/set-html-element-properties';
import { setHTMLHyperlinkElementProperties } from '../html-hyperlink-element/set-html-hyperlink-element-properties';
import { setProperties } from '../util/set-properties';

/**
 * @type {SetProperties<HTMLAnchorElement,HTMLAnchorElementProperties>}
 * @throws {SyntaxError} by innerHTML, outerHTML
 * @throws {NoModificationAllowedError} by innerHTML, outerHTML
 */
export const setHTMLAnchorElementProperties = setProperties({
  mixins: [
    setHTMLElementProperties,
    setHTMLHyperlinkElementProperties,
  ],
  properties: [
    'accessKey',
    'hreflang',
    'media',
    'rel',
    'tabindex',
    'target',
    'text',
    'type',
  ],
});

/**
 * @typedef {HTMLElementProperties,HTMLHyperlinkElementProperties,IHTMLAnchorElementProperties} HTMLAnchorElementProperties
 */

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement#Properties}
 *
 * @typedef {Object} IHTMLAnchorElementProperties
 * @property {string} [accessKey]
 * @property {LanguageTag} [hreflang]
 * @property {string} [media]
 * @property {strings} [rel]
 * @property {long} [tabindex]
 * @property {BROWSING_CONTEXT} [target]
 * @property {string} [text]
 * @property {MediaType} [type]
 */
