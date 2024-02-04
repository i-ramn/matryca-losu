import { handleActions } from 'redux-actions';
import { SET_USER_NAME } from '@/store/user/userActions';
import * as actions from './userActions';

export interface userDefaultState {
  userName?: string;
}

const defaultState = {};

export const userReducer = handleActions(
  {
    [actions.SET_USER_NAME.toString()]: (state: userDefaultState, { payload }) => ({
      ...state,
      userName: payload,
    }),
  },
  defaultState,
);
