import _curryN from 'lodash/fp/curryN';
import _flow from 'lodash/fp/flow';
import _head from 'lodash/fp/head';
import _identity from 'lodash/fp/identity';
import _over from 'lodash/fp/over';
import _overArgs from 'lodash/fp/overArgs';
import _pick from 'lodash/fp/pick';

/**
 * @curried
 * @callback SetAttributes
 * @param {A} attributes
 * @param {T} element
 * @returns {T}
 * @template T, A
 * @throws {InvalidCharacterError}
 */

/**
 * @internal
 * @function
 * @param {Object} config
 * @param {string[]} [config.attributes]
 * @param {SetAttributes<T, A>[]} [config.mixins]
 * @returns {SetAttributes<T, A>}
 * @template T, A
 */
export const setAttributes = ({ attributes, mixins = [] }) =>
  _curryN(2,
    _flow([
      _over([
        _overArgs(
          (attributes, element) => {
            Object
              .entries(attributes)
              .forEach(([attribute, value]) => {
                element.setAttribute(attribute, value);
              });
            return element;
          },
          [attributes ? _pick(attributes) : _identity],
        ),
        ...mixins,
      ]),
      _head,
    ]));
