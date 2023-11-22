'use client';
import { PaymentButtons, PaymnetBlock } from '@/components/PyamnetBlock';
import { MessageIds } from '@/types/i18n';
import { FormattedMessage } from 'react-intl';

const renderList = (string: string, length: number) => {
  const elements = [];

  for (let index = 1; index < length; index++) {
    elements.push(
      <li className="list-inside list-disc text-2xl">
        <FormattedMessage key={index} id={`${string}${index}` as MessageIds} />
      </li>,
    );
  }

  return elements;
};

export const Payments = () => {
  return (
    <section className="grid-rows-fr-auto container grid grid-cols-3 gap-20">
      <PaymnetBlock
        borderColor="bg-orange-gradient"
        background="bg-white"
        titleId="payment-block.title1"
        price="50 PLN"
        priceStyle="font-bold text-4xl text-lightOrange"
        buttonType={PaymentButtons.Gradient}
      >
        <div className="flex flex-col gap-10">
          <p className="text-xl">
            <FormattedMessage id="payment-block.p1" />
          </p>
          <h3 className="text-center font-bold">
            <FormattedMessage id="payment-block.subtitle" />
          </h3>
        </div>
      </PaymnetBlock>

      <PaymnetBlock
        borderColor="bg-lightGray2"
        background="bg-lightGray2"
        titleId="payment-block.title2"
        price="50 PLN"
        priceStyle="text-purple"
      >
        <div className="flex flex-col gap-10 text-2xl">
          <p>
            <FormattedMessage id="payment-plock2.p1" />
          </p>
          <p>
            <FormattedMessage id="payment-plock2.p2" />
          </p>
        </div>
      </PaymnetBlock>

      <PaymnetBlock
        className="col-start-3 row-start-1 row-end-3 max-h-[1246px]"
        borderColor="bg-orange-gradient"
        background="bg-white"
        titleId="payment-block.title3"
        price="500 PLN"
        buttonType={PaymentButtons.EmptyGradient}
      >
        <ul className="flex flex-col gap-4 text-start">{renderList('payment-block3.list-', 11)}</ul>
      </PaymnetBlock>
      <PaymnetBlock
        borderColor="bg-lightGray"
        background="bg-lightGray"
        titleId="payment-block.title4"
        buttonType={PaymentButtons.Gradient}
        price="200 PLN"
        className="max-h-[655px]"
        titleStyle="text-black"
      >
        <ul className="flex flex-col gap-2 text-start text-black">
          {renderList('payment-block4.list-', 4)}
        </ul>
      </PaymnetBlock>
      <PaymnetBlock
        borderColor="bg-purple"
        background="bg-white"
        titleId="payment-block.title5"
        price="200 PLN"
        buttonType={PaymentButtons.Empty}
      >
        <div className="flex flex-col gap-10">
          <ul className="flex flex-col gap-2 text-start font-normal text-black">
            {renderList('payment-block5.list-', 5)}
          </ul>
          <p className="text-2xl font-bold">
            <FormattedMessage id="payment-block5.stock" />
          </p>
        </div>
      </PaymnetBlock>
    </section>
  );
};
