import { setProperties } from '../util/set-properties';

/**
 * @type {SetProperties<Node,NodeProperties>}
 */
export const setNodeProperties = setProperties({
  properties: [
    'textContent',
  ],
});

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties}
 *
 * @typedef {Object} NodeProperties
 * @property {?string} [textContent]
 */
