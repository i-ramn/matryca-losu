'use client';
import { MessageIds } from '@/types/i18n';
import { FC, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
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
        } gap-5 px-5 py-4 text-center text-purple lg:px-8 lg:py-10 xl:gap-10 xl:px-10 xl:py-24`}
      >
        <h3 className={`font-bold ${titleStyle} text-xl xl:text-2xl`}>
          <FormattedMessage id={titleId} />
        </h3>
        {children}
        <h3 className={`text-xl font-bold xl:text-4xl ${priceStyle}`}>{price}</h3>
        {submitButton(buttonType, onSubmit)}
      </div>
    </div>
  );
};
