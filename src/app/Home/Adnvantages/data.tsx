import { MessageIds } from '@/types/i18n';
import Case from '@/public/icons/case.svg';
import Moon from '@/public/icons/moon.svg';
import Compass from '@/public/icons/compass.svg';
import Magnifier from '@/public/icons/magnifier.svg';
import Man from '@/public/icons/questioning.svg';
import Sun from '@/public/icons/sun.svg';
import Statistycs from '@/public/icons/statistycs.svg';
import Umbrella from '@/public/icons/umbrella.svg';

interface Advnatages {
  imageSrc: string;
  description: MessageIds;
}

export const advantages: Advnatages[] = [
  {
    imageSrc: Case,
    description: 'advantages.why-us.p1',
  },
  {
    imageSrc: Moon,
    description: 'advantages.why-us.p2',
  },
  {
    imageSrc: Compass,
    description: 'advantages.why-us.p3',
  },
  {
    imageSrc: Magnifier,
    description: 'advantages.why-us.p4',
  },
  {
    imageSrc: Man,
    description: 'advantages.why-us.p5',
  },
  {
    imageSrc: Sun,
    description: 'advantages.why-us.p6',
  },
  {
    imageSrc: Statistycs,
    description: 'advantages.why-us.p7',
  },
  {
    imageSrc: Umbrella,
    description: 'advantages.why-us.p8',
  },
];
