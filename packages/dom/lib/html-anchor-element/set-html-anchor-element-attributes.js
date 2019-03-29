import { setHTMLElementAttributes } from '../html-element/set-html-element-attributes';
import { setAttributes } from '../util/set-attributes';

/**
 * @type {SetAttributes<HTMLAnchorElement,HTMLAnchorElementAttributes>}
 */
export const setHTMLAnchorElementAttributes = setAttributes({
  mixins: [
    setHTMLElementAttributes,
  ],
  attributes: [
    'download',
    'href',
    'hreflang',
    'ping',
    'rel',
    'target',
    'type',
  ],
});

/**
 * TODO: Add and link up global aria- attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
 * TODO: Add and link up global event handler attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
 *
 * @typedef {HTMLElementAttributes,IHTMLAnchorElementAttributes} HTMLAnchorElementAttributes
 */

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes}
 *
 * @typedef {Object} IHTMLAnchorElementAttributes
 * @property {string} [download]
 * @property {string} [href]
 * @property {LanguageTag} [hreflang]
 * @property {strings} [ping]
 * @property {strings} [rel]
 * @property {BROWSING_CONTEXT} [target]
 * @property {MediaType} [type]
 */
