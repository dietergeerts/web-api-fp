import { setAttributes } from '../util/set-attributes';

/**
 * @type {SetAttributes<HTMLElement,HTMLElementAttributes>}
 */
export const setHTMLElementAttributes = setAttributes({
  attributes: [
    'accesskey',
    'autocapitalize',
    'class',
    'contenteditable',
    'dir',
    'draggable',
    'hidden',
    'id',
    'inputmode',
    'is',
    'lang',
    'style',
    'tabindex',
    'title',
  ],
});

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#List_of_global_attributes}
 * TODO: Add and link up global aria- attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
 * TODO: Add and link up global event handler attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
 *
 * @typedef {Object} HTMLElementAttributes
 * @property {char} [accesskey]
 * @property {CAPITALIZE} [autocapitalize]
 * @property {strings} [class]
 * @property {CONTENT_EDITABLE} [contenteditable]
 * @property {TEXT_DIRECTION} [dir]
 * @property {DRAGGABLE} [draggable]
 * @property {boolean} [hidden]
 * @property {string} [id]
 * @property {INPUT_MODE} [inputmode]
 * @property {string} [is]
 * TODO: Add the item* attributes, after checking what they do/how they work etc...
 * @property {LanguageTag} [lang]
 * @property {string} [style]
 * @property {integer} [tabindex]
 * @property {string} [title]
 */
