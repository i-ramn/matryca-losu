import { MessageIds } from '@/types/i18n';

interface MoreAboutData {
  imgstyle?: string;
  containerStyle?: string;
  subtitle: MessageIds;
  text: MessageIds;
}

export const moreAboutData: MoreAboutData[] = [
  {
    subtitle: 'more.about.p1.subtitle',
    text: 'more.about.p1',
  },
  {
    imgstyle: 'rotate-90',
    containerStyle: 'self-end',
    subtitle: 'more.about.p2.subtitle',
    text: 'more.about.p2',
  },
  {
    imgstyle: 'rotate-[160deg]',
    containerStyle: 'self-end',
    subtitle: 'more.about.p3.subtitle',
    text: 'more.about.p3',
  },
  {
    imgstyle: 'rotate-[210deg]',
    containerStyle: 'self-end',
    subtitle: 'more.about.p4.subtitle',
    text: 'more.about.p4',
  },
  {
    imgstyle: 'rotate-[-90deg]',
    subtitle: 'more.about.p5.subtitle',
    text: 'more.about.p5',
  },
];
