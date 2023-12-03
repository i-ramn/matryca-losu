import { RoutesEnum } from '@/types/routes';
import { MessageIds } from '../../../../types/i18n';

interface ButtonsData {
  id: MessageIds | undefined;
  href: RoutesEnum;
}

export const buttonsData: ButtonsData[] = [
  { id: 'button.calculate-online', href: RoutesEnum.Calculation },
  { id: 'buttonn.calculate-complience', href: RoutesEnum.Conformity },
  { id: 'button.calculate-child', href: RoutesEnum.Calculation },
];
