import { Response } from '@/app/Home/components/FreeCalculators/Fate/types/index';

type Stringify<T> = {
  [K in keyof T]: string;
};

export type StringResponse = Stringify<Response>;
