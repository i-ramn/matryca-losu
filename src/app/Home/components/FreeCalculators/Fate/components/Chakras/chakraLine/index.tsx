import { ColorEnum } from '@/components/Dropdown';
import { FC, useMemo } from 'react';

export interface ChakraLineProps {
  color: string;
  name: string;
  options: string[] | number[];
  background?: ColorEnum;
}

export const ChakraLine: FC<ChakraLineProps> = ({ color, name, options, background }) => {
  const renderTextColor = useMemo(() => {
    const isPrimaryColor = background === ColorEnum.primary;

    const textColor = isPrimaryColor ? 'text-white' : 'text-black';
    const backgroundColor = `bg-${background}`;

    return { textColor, backgroundColor };
  }, [background]);

  return (
    <div className="flex h-16 w-full max-w-[412px]">
      <div className={`h-full w-8 rounded-3xl ${color}`} />
      <div
        className={`flex h-full w-full items-center justify-between rounded-xl ${renderTextColor.backgroundColor} pl-5`}
      >
        <span className={`text-sm ${renderTextColor.textColor}`}>{name}</span>
        <div className="flex h-full">
          {options.map((el, id) => (
            <div key={id} className={`relative h-full`}>
              <div className="h-full w-16 rounded-xl bg-white opacity-40" />
              <span
                className={`absolute left-[50%] top-[50%] z-20 -translate-x-1/2 -translate-y-1/2 transform ${
                  typeof el === 'string' && 'text-sm'
                } ${renderTextColor.textColor}`}
              >
                {el}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
