import CONNECTOR from '@/public/icons/connector.svg';
import { MessageIds } from '@/types/i18n';
import Image from 'next/image';
import { FC, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';

interface DestinyProps {
  type?: 'inline' | 'default';
  titleId: MessageIds;
  coordinates: number[];
}

export const Destiny: FC<DestinyProps> = ({ type = 'default', titleId, coordinates }) => {
  const renderDestinyCoordinates = useCallback(() => {
    if (type === 'inline') {
      return (
        <>
          {coordinates.map((coordinate, id, array) => (
            <div
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-black text-lg"
              key={id}
            >
              <span>{coordinate}</span>
            </div>
          ))}
        </>
      );
    }

    return (
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-5">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-black text-lg">
            <span>{coordinates[0]}</span>
          </div>
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-black text-lg">
            <span>{coordinates[1]}</span>
          </div>
        </div>
        <Image src={CONNECTOR} alt="" />
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-black text-lg">
          <span>{coordinates[2]}</span>
        </div>
      </div>
    );
  }, []);

  return (
    <div className="flex h-min items-center gap-5">
      <div className="rounded-full border border-black px-7 py-5 text-lg">
        <span>
          <FormattedMessage id={titleId} />
        </span>
      </div>
      {renderDestinyCoordinates()}
    </div>
  );
};
