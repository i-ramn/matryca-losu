import { FC } from 'react';
import { FateCalculator } from './Fate';

interface FreeCalulatorsProps {}

export const FreeCalulators: FC<FreeCalulatorsProps> = ({}) => {
  return (
    <section className="container lg:pt-[70px]">
      <FateCalculator />
    </section>
  );
};
