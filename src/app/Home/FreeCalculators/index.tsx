import { FC } from 'react';
import { FateCalculator } from './Fate';
import { Compatibility } from './Compatibility';
import { Children } from './Children';

interface FreeCalulatorsProps {}

export const FreeCalulators: FC<FreeCalulatorsProps> = ({}) => {
  return (
    <section className="container flex flex-col gap-16 py-12 lg:py-[70px]">
      <FateCalculator />
      <Compatibility />
      <Children />
    </section>
  );
};
