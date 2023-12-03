import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';

import * as calculateActions from '@/app/Home/components/FreeCalculators/Fate/actions';
import * as calculateApi from '@/app/Home/components/FreeCalculators/Fate/api';

interface ActionMapping {
  [key: string]: (arg: string) => Promise<AxiosResponse<any, any>>;
}

const apiCallsMapping = (action: AnyAction) => {
  const mapping: ActionMapping = {
    [calculateActions.GET_CALCULATIONS_REQUEST.toString()]: calculateApi.getCalculations,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw new SyntaxError('Not mapped action');
  }

  return mapping[action.type];
};

export default apiCallsMapping;
