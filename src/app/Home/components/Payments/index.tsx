'use client';
import { PaymentButtons, PaymnetBlock } from '@/components/PyamnetBlock';
import { MessageIds } from '@/types/i18n';
import { FormattedMessage } from 'react-intl';

const renderList = (string: string, length: number) => {
  const elements = [];

  for (let index = 1; index < length; index++) {
    elements.push(
      <li className="list-inside list-disc text-sm xl:text-2xl">
        <FormattedMessage key={index} id={`${string}${index}` as MessageIds} />
      </li>,
    );
  }

  return elements;
};

export const Payments = () => {
  return (
    <section className="lg:grid-rows-fr-auto container grid grid-cols-1 gap-5 md:grid-cols-3 xl:gap-20">
      <PaymnetBlock
        borderColor="bg-orange-gradient"
        background="bg-white"
        titleId="payment-block.title1"
        price="50 PLN"
        priceStyle="font-bold text-4xl text-lightOrange"
        buttonType={PaymentButtons.Gradient}
      >
        <div className="flex flex-col gap-5 lg:gap-10">
          <p className="text-sm xl:text-xl">
            <FormattedMessage id="payment-block.p1" />
          </p>
          <h3 className="text-center text-xl font-normal lg:font-bold">
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
        <div className="flex flex-col gap-5 xl:gap-10">
          <p className="text-sm xl:text-2xl">
            <FormattedMessage id="payment-plock2.p1" />
          </p>
          <p className="text-sm xl:text-2xl">
            <FormattedMessage id="payment-plock2.p2" />
          </p>
        </div>
      </PaymnetBlock>
      <PaymnetBlock
        className="md:col-start-3 md:row-start-1 md:row-end-3 md:max-h-[85%]"
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
          <p className="text-xl font-bold xl:text-2xl">
            <FormattedMessage id="payment-block5.stock" />
          </p>
        </div>
      </PaymnetBlock>
    </section>
  );
};
