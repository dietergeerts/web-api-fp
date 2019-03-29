import { setElementProperties } from '../element/set-element-properties';
import { setProperties } from '../util/set-properties';
import { setSubProperties } from '../util/set-sub-properties';

/**
 * @type {SetProperties<HTMLElement,HTMLElementProperties>}
 * @throws {SyntaxError} by innerHTML, outerHTML
 * @throws {NoModificationAllowedError} by innerHTML, outerHTML
 */
export const setHTMLElementProperties = setProperties({
  mixins: [
    setElementProperties,
    setSubProperties('dataset', setProperties({})),
    setSubProperties('style', setProperties({})),
  ],
  properties: [
    'accessKey',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'inert',
    'innerText',
    'lang',
    'noModule',
    'nonce',
    'spellcheck',
    'tabIndex',
    'title',
  ],
});

/**
 * @typedef {ElementProperties,IHTMLElementProperties} HTMLElementProperties
 */

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement#Properties}
 *
 * @typedef {Object} IHTMLElementProperties
 * @property {char} [accessKey]
 * @property {CONTENT_EDITABLE} [contentEditable]
 * @property {Object<string, string>} [dataset]
 * @property {TEXT_DIRECTION} [dir]
 * @property {boolean} [draggable]
 * @property {boolean} [hidden]
 * @property {boolean} [inert]
 * @property {string} [innerText]
 * @property {LanguageTag} [lang]
 * @property {boolean} [noModule]
 * @property {string} [nonce]
 * @property {boolean} [spellcheck]
 * @property {Object<string, string>} [style] - TODO: Document available style properties
 * @property {integer} [tabIndex]
 * @property {string} [title]
 */
