import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { MessageIds } from '../../../../i18n';

interface DefaultButtonProps {
  onClick?: () => void;
  messageId: MessageIds | undefined;
}

export const DefaultButton: FC<DefaultButtonProps> = ({ onClick, messageId }) => {
  return (
    <button
      className="rounded-full bg-white hover:bg-slate-400 transition-all active:bg-slate-500 active:animate-pulse active:translate-y-0.3 px-2 text-gray-800"
      onClick={onClick}
    >
      <FormattedMessage id={messageId} />
    </button>
  );
};
