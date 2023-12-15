import { DefaultState } from '@/store/rootReducer';
import { useSelector } from 'react-redux';
import { ChakraLineProps } from './chakraLine';

export const useChakraData = () => {
  const option = useSelector((state: DefaultState) => state.calculation.combinations!!);

  const chakraData: ChakraLineProps[] = [
    {
      color: 'bg-lightGray',
      name: 'Nazwa czakry',
      options: ['Fizyka', 'Energia', 'Emocja'],
    },
    {
      color: 'bg-[#8846A2]',
      name: 'SAHASRARA',
      options: [option?.ca, option?.ca1, option?.ca2],
    },
    {
      color: 'bg-[#526DF9]',
      name: 'AJNA',
      options: [option?.cb, option?.cb1, option?.cb2],
    },
    {
      color: 'bg-[#46CEE0]',
      name: 'WISZUDHA',
      options: [option?.cc, option?.cc1, option?.cc2],
    },
    {
      color: 'bg-[#AFDD61]',
      name: 'ANAHATA',
      options: [option?.cd, option?.cd1, option?.cd2],
    },
    {
      color: 'bg-[#FDEC47]',
      name: 'MANIPURA',
      options: [option?.ce, option?.ce1, option?.ce2],
    },
    {
      color: 'bg-[#FDAD33]',
      name: 'SWADHISTHANA',
      options: [option?.cf, option?.cf1, option?.cf2],
    },
    {
      color: 'bg-orange-gradient',
      name: 'MULADHARA',
      options: [option?.cg, option?.cg1, option?.cg2],
    },
    {
      color: 'bg-lightGray',
      name: 'Ogólny układ systemów',
      options: [option?.ch, option?.ch1, option?.ch2],
    },
  ];

  return { chakraData };
};
