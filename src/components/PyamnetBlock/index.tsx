'use client';
import { FC, ReactNode, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { MessageIds } from '@/types/i18n';
import styles from './styles.module.scss';

export enum PaymentButtons {
  Gradient,
  Empty,
  EmptyGradient,
}

interface PaymnetBlockProps {
  children: ReactNode;
  borderColor: string;
  background?: string;
  titleId: MessageIds;
  className?: string;
  price: string;
  priceStyle?: string;
  buttonType?: PaymentButtons;
  onSubmit?: () => void;
  titleStyle?: string;
}

const submitButton = (type?: PaymentButtons, onSubmit?: () => void): JSX.Element => {
  switch (type) {
    case PaymentButtons.Gradient:
      return (
        <button className={`${styles.defaultButton} ${styles.gradientButton}`}>
          <FormattedMessage id="purchase" />
        </button>
      );
    case PaymentButtons.Empty:
      return (
        <div className={`${styles.defaultButton} ${styles.emptyButtonContainer}`}>
          <button className={styles.emptyButton}>
            <FormattedMessage id="purchase" />
          </button>
        </div>
      );
    case PaymentButtons.EmptyGradient:
      return (
        <div className={`${styles.defaultButton} ${styles.emptyGradientButtonContainer}`}>
          <button className={styles.emptyButton}>
            <FormattedMessage id="purchase" />
          </button>
        </div>
      );
    default:
      return (
        <button className={`${styles.defaultButton} ${styles.commonButton}`} onClick={onSubmit}>
          <FormattedMessage id="purchase" />
        </button>
      );
  }
};

export const PaymnetBlock: FC<PaymnetBlockProps> = ({
  children,
  borderColor,
  background,
  titleId,
  className,
  price,
  priceStyle,
  buttonType,
  onSubmit,
  titleStyle,
}) => {
  return (
    <div className={`relative overflow-hidden rounded-[60px] p-[6px] ${borderColor} ${className}`}>
      <div
        className={`flex h-full w-full flex-col items-center rounded-[55px] ${
          background || 'bg-white'
        } gap-10 px-10 py-24 text-center text-purple`}
      >
        <h3 className={`font-bold ${titleStyle}`}>
          <FormattedMessage id={titleId} />
        </h3>
        {children}
        <h3 className={`text-4xl font-bold ${priceStyle}`}>{price}</h3>
        {submitButton(buttonType, onSubmit)}
      </div>
    </div>
  );
};
