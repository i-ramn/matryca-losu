import { FC, ButtonHTMLAttributes } from 'react';
import { FormattedMessage } from 'react-intl';

import { MessageIds } from '../../types/i18n';
import styles from './styles.module.scss';

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  messageId: MessageIds | undefined;
  variant?: 'default' | 'nav' | 'reversed';
  size: 'lg' | 'md' | 'sm';
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
  size,
  ...rest
}) => {
  return (
    <button
      className={`${className} ${variants[variant]} ${styles[size]} text-red-600`}
      onClick={onClick}
      {...rest}
    >
      <FormattedMessage id={messageId} />
    </button>
  );
};
