import { flatten } from '@/helpers/fleatten';

import pl from './pl.json';

export const locales = {
  PL: { value: 'pl', label: 'Polish' },
};

export const messages = {
  [locales.PL.value]: flatten(pl),
};

export enum LocalStorageKey {
  SELECTED_LOCALE = 'SELECTED_LOCALE',
}
