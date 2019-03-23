import { setNodeProperties } from '../node/set-node-properties';

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties}
 *
 * @function
 * @param {ElementProperties} properties
 * @returns {function(Element): void}
 * @throws {SyntaxError} by innerHTML, outerHTML
 * @throws {NoModificationAllowedError} by innerHTML, outerHTML
 */
export const setElementProperties = properties => element => {
  setNodeProperties(properties)(element);
};
