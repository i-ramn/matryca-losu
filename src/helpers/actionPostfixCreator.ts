import { POSTFIXES } from '@/constants/actionPostfixes';
import IAction from '@/types/actions';

const { REQUEST_POSTFIX } = POSTFIXES;

const createActionWithPostfix = (action: IAction<void>, payload: any, postfix: string) => {
  return {
    type: action.type.slice(0, action.type.length - REQUEST_POSTFIX.length) + postfix,
    payload: {
      response: payload.response,
      actionPayload: payload.actionPayload,
    },
  };
};

export default createActionWithPostfix;
