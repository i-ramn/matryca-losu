import { FlattenKeys } from '../types/i18n';
import { isPlainObject } from '@/helpers/isPlainObject.util';

export function flatten<T extends Record<string, unknown>>(
  object: T,
  parentKey?: string,
): Record<FlattenKeys<T>, string> {
  return Object.entries(object).reduce(
    (acc, [key, value]) => {
      const currentKey = [parentKey, key].filter(Boolean).join('.');

      return {
        ...acc,
        ...(isPlainObject(value) ? flatten(value, currentKey) : { [currentKey]: value }),
      };
    },
    {} as Record<FlattenKeys<T>, string>,
  );
}
