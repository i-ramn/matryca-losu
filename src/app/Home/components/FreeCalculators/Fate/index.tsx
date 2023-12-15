'use client';

import { Matrix } from '@/components/Matrix';
import { DefaultState } from '@/store/rootReducer';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { Accordion } from './components/Accordion';
import { Chakras } from './components/Chakras';
import { DestinyBlock } from './components/Destiny';
import { FateForm } from './components/FateForm';

export const FateCalculator = () => {
  const { isLoading, combinations } = useSelector((state: DefaultState) => state.calculation);

  console.log(combinations?.pa);

  return (
    <div className="lg:min-h-[300px]">
      <h2 className="mb-5 text-purple">
        <FormattedMessage id="home.free-calculator.fate.title" />
      </h2>
      <p>
        <FormattedMessage id="home.free-calculator.fate.description" />
      </p>
      {combinations ? (
        <section>
          <Accordion />
          <div className="mb-9 mt-52 flex items-center justify-between">
            <Chakras />
            <Matrix />
          </div>
          <DestinyBlock />
        </section>
      ) : (
        <>
          <FateForm />
        </>
      )}
    </div>
  );
};
