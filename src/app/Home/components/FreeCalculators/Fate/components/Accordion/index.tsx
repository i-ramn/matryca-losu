'use client';

import { ColorEnum, Dropdown } from '@/components/Dropdown';
import { DropdownContent } from '@/components/Dropdown/Content';
import { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';

const blocksData = [
  {
    title: 'someTest',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tenetur suscipit nulla, aliquid similique tempora numquam fuga veniam nemo ad eum, dolores totam consequatur nostrum quos unde cupiditate, iusto explicabo.',
  },
  {
    title: 'second Test',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tenetur suscipit nulla, aliquid similique tempora numquam fuga veniam nemo ad eum, dolores totam consequatur nostrum quos unde cupiditate, iusto explicabo.',
  },
];

const mockedData = [
  {
    imageNAme: 'personal',
    blocks: [blocksData[0]],
  },
  {
    imageNAme: 'pastLife',
    // blocks: [...blocksData],
  },
];

export const Accordion = () => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const handleDropdown = useCallback((id: number) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  }, []);

  return (
    <div>
      <h2 className="mb-5 text-center">
        <FormattedMessage id="matrix.title" />
      </h2>
      <p className="mb-14 text-center">user info</p>
      {mockedData.map((element, id) => {
        return (
          <Dropdown
            key={id}
            bgColor={id === 1 ? ColorEnum.secondary : ColorEnum.primary}
            onClick={() => handleDropdown(id)}
            isOpened={openDropdownId === id}
            content={<DropdownContent content={element.blocks} />}
            disabled={!element.blocks}
          />
        );
      })}
    </div>
  );
};
