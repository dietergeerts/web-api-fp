import { setHTMLElementAttributes } from '../html-element/set-html-element-attributes';
import { setAttributes } from '../util/set-attributes';

/**
 * @type {SetAttributes<HTMLUListElement,HTMLUListElementAttributes>}
 */
export const setHTMLUListElementAttributes = setAttributes({
  mixins: [
    setHTMLElementAttributes,
  ],
  attributes: [],
});

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul#Attributes}
 *
 * @typedef {HTMLElementAttributes} HTMLUListElementAttributes
 */
