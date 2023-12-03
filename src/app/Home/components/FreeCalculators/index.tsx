import { FC } from 'react';
import { Children } from './Children';
import { Compatibility } from './Compatibility';
import { FateCalculator } from './Fate';

interface FreeCalulatorsProps {}

export const FreeCalulators: FC<FreeCalulatorsProps> = ({}) => {
  return (
    <section className="container grid grid-cols-1 gap-16 py-16 lg:py-[70px]">
      <FateCalculator />
      <Compatibility />
      <Children />
    </section>
  );
};
