import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { CalculationsDefaultState, Combinations } from '../types';

const defaultState: CalculationsDefaultState = {
  isLoading: false,
  errors: '',
  combinations: undefined,
  username: undefined,
};

export const calculatorReducer = handleActions<CalculationsDefaultState, Combinations>(
  {
    [actions.GET_CALCULATIONS_REQUEST.toString()]: (state: CalculationsDefaultState) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_CALCULATIONS_SUCCESS.toString()]: (state, { payload }) => ({
      ...state,
      combinations: payload.response,
      isLoading: false,
    }),
    [actions.GET_CALCULATIONS_FAIL.toString()]: (state: CalculationsDefaultState) => ({
      ...state,
      isLoading: false,
      errors: 'lol',
    }),
  },

  defaultState,
);
