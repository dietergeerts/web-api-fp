import { setProperties } from '@web-api-fp/core/lib/util/set-properties';

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils#Properties}
 *
 * @function
 * @param {HTMLHyperlinkElementProperties} properties
 * @returns {function(HTMLHyperlinkElementUtils): void}
 */
export const setHTMLHyperlinkElementProperties = properties => element => {
  setProperties(properties, element);
};
