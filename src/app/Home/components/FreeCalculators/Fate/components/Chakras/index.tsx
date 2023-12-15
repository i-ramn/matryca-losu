'use client';

import { ColorEnum } from '@/components/Dropdown';
import { ChakraLine } from './chakraLine';
import { useChakraData } from './data';

export const Chakras = () => {
  const { chakraData } = useChakraData();

  return (
    <div className="w-full">
      {chakraData.map(({ color, name, options }, id) => {
        return (
          <ChakraLine
            key={id}
            color={color}
            name={name}
            options={options}
            background={id % 2 === 0 ? ColorEnum.primary : ColorEnum.secondary}
          />
        );
      })}
    </div>
  );
};
