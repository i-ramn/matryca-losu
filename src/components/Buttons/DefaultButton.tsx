import { FC, ButtonHTMLAttributes } from 'react';
import { FormattedMessage } from 'react-intl';

import { MessageIds } from '../../../i18n';
import styles from './styles.module.scss';

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  messageId: MessageIds | undefined;
  variant?: 'default' | 'nav' | 'reversed';
}

const variants = {
  default: styles.defaultButton,
  nav: styles.navButton,
  reversed: 'reversed',
};

export const DefaultButton: FC<DefaultButtonProps> = ({
  onClick,
  messageId,
  variant = 'default',
  className,
  ...rest
}) => {
  return (
    <button className={`${className} ${variants[variant]}`} onClick={onClick} {...rest}>
      <FormattedMessage id={messageId} />
    </button>
  );
};
