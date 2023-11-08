import { useIntl } from 'react-intl';
import { MessageIds } from '../../i18n';
import { useCallback } from 'react';

export const useTranslate = () => {
  const intl = useIntl();

  const handleTranslate = useCallback((id: MessageIds) => intl.formatMessage({ id: id }), []);

  return { handleTranslate };
};
