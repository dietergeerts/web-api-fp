import { setHTMLElementAttributes } from '../html-element/set-html-element-attributes';
import { setAttributes } from '../util/set-attributes';

/**
 * @type {SetAttributes<HTMLLIElement,HTMLLIElementAttributes>}
 */
export const setHTMLLIElementAttributes = setAttributes({
  mixins: [
    setHTMLElementAttributes,
  ],
  attributes: [
    'value',
  ],
});

/**
 * @typedef {HTMLElementAttributes,IHTMLLIElementAttributes} HTMLLIElementAttributes
 */

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#Attributes}
 *
 * @typedef {Object} IHTMLLIElementAttributes
 * @property {integer} [value]
 */
