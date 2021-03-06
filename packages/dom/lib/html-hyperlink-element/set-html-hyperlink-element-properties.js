import { setProperties } from '../util/set-properties';

/**
 * @type {SetProperties<HTMLHyperlinkElementUtils,HTMLHyperlinkElementProperties>}
 */
export const setHTMLHyperlinkElementProperties = setProperties({
  properties: [
    'hash',
    'host',
    'hostname',
    'href',
    'password',
    'pathname',
    'port',
    'protocol',
    'search',
    'username',
  ],
});

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils#Properties}
 *
 * @typedef {Object} HTMLHyperlinkElementProperties
 * @property {string} [hash]
 * @property {string} [host]
 * @property {string} [hostname]
 * @property {string} [href]
 * @property {string} [password]
 * @property {string} [pathname]
 * @property {string} [port]
 * @property {string} [protocol]
 * @property {string} [search]
 * @property {string} [username]
 */
