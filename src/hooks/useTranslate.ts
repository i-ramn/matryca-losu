import { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { MessageIds } from '../types/i18n';

export type HandleTranslateFn = (id: MessageIds) => string;

export const useTranslate = () => {
  const intl = useIntl();

  const handleTranslate: HandleTranslateFn = useCallback(
    (id: MessageIds) => intl.formatMessage({ id: id }),
    [],
  );

  return { handleTranslate };
};
