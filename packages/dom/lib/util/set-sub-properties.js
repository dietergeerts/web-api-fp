import _curryN from 'lodash/fp/curryN';
import _get from 'lodash/fp/get';
import _getOr from 'lodash/fp/getOr';
import _overArgs from 'lodash/fp/overArgs';

/**
 * @internal
 * @function
 * @param {string} property
 * @param {SetProperties<TS, PS>} setProperties
 * @returns {SetProperties<T, P>}
 * @template T, P, TS, PS
 */
export const setSubProperties = (property, setProperties) =>
  _curryN(2,
    _overArgs(
      setProperties,
      [
        _getOr({}, property),
        _get(property),
      ],
    ));
