import { setProperties } from '@web-api-fp/core/lib/util/set-properties';

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties}
 *
 * @function
 * @param {NodeProperties} properties
 * @returns {function(Node): void}
 */
export const setNodeProperties = properties => node => {
  setProperties(properties, node);
};
