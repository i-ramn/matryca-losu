'use client';

import { ColorEnum, Dropdown } from '@/components/Dropdown';
import { DropdownContent } from '@/components/Dropdown/Content';
import { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { DefaultState } from '@/store/rootReducer';

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
    title: 'PERSONAL',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'CECHY OSOBOWE',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'TALENTY',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'PRZEZNACZENIA',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'LINIA SEKSUALNOŚCI',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'MIŁOŚĆ',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'BALANCE MIĘDZY MIŁOŚCIĄ A FINANSAMI',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'FINANSE',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'OGON KARMICZNY',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'RODOWE PROGRAMY',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'MARZENIA',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'CZAKRY',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'LATA',
  },
  {
    imageNAme: 'personal',
    // blocks: [blocksData[0]],
    title: 'REKOMENDACJE',
  },
];

export const Accordion = () => {
  const { userName } = useSelector((state: DefaultState) => state.user);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const handleDropdown = useCallback((id: number) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  }, []);

  return (
    <div>
      <h2 className="mb-5 text-center">
        <FormattedMessage id="matrix.title" />
      </h2>
      <p className="mb-14 text-center">{userName}</p>
      {mockedData.map((element, id) => {
        return (
          <Dropdown
            title={element.title}
            key={id}
            bgColor={id % 2 ? ColorEnum.secondary : ColorEnum.primary}
            onClick={() => handleDropdown(id)}
            isOpened={openDropdownId === id}
            content={<DropdownContent content={element?.blocks} />}
            disabled
          />
        );
      })}
    </div>
  );
};
