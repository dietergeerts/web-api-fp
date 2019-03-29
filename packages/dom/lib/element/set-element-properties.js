import { setNodeProperties } from '../node/set-node-properties';
import { setProperties } from '../util/set-properties';

/**
 * @type {SetProperties<Element,ElementProperties>}
 * @throws {SyntaxError} by innerHTML, outerHTML
 * @throws {NoModificationAllowedError} by innerHTML, outerHTML
 */
export const setElementProperties = setProperties({
  mixins: [
    setNodeProperties,
  ],
  properties: [
    'className',
    'id',
    'innerHTML',
    'outerHTML',
    'scrollLeft',
  ],
});

/**
 * @typedef {NodeProperties,IElementProperties} ElementProperties
 */

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties}
 *
 * @typedef {Object} IElementProperties
 * @property {strings} [className]
 * @property {string} [id]
 * @property {string} [innerHTML]
 * @property {string} [outerHTML]
 * @property {integer} [scrollLeft]
 */
