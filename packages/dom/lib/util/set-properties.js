import _curryN from 'lodash/fp/curryN';
import _flow from 'lodash/fp/flow';
import _head from 'lodash/fp/head';
import _identity from 'lodash/fp/identity';
import _over from 'lodash/fp/over';
import _overArgs from 'lodash/fp/overArgs';
import _pick from 'lodash/fp/pick';

/**
 * Set multiple properties at once.
 *
 * Properties added to `_subs`, will not be set directly,
 * their own properties will be set instead.
 *
 * @internal
 * @curried
 * @callback SetProperties
 * @param {P} properties
 * @param {T} object
 * @returns {T}
 * @template T, P
 */

/**
 * @internal
 * @function
 * @param {Object} config
 * @param {string[]} [config.properties]
 * @param {SetProperties<T, P>[]} [config.mixins]
 * @returns {SetProperties<T, P>}
 * @template T, P
 */
export const setProperties = ({ properties, mixins = [] }) =>
  _curryN(2,
    _flow([
      _over([
        _overArgs(
          (properties, object) => {
            Object
              .entries(properties)
              .forEach(([property, value]) => {
                object[property] = value;
              });
            return object;
          },
          [properties ? _pick(properties) : _identity],
        ),
        ...mixins,
      ]),
      _head,
    ]));
