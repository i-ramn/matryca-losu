import { calculatorReducer as calculation } from '@/app/Home/components/FreeCalculators/Fate/reducers';
import { CalculationsDefaultState } from '@/app/Home/components/FreeCalculators/Fate/types';
import { createBlacklistFilter } from 'redux-persist-transform-filter';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const loginPageBlacklist = createBlacklistFilter('auth', ['errors']);

export type DefaultState = {
  calculation: CalculationsDefaultState;
};

const rootReducer = combineReducers({
  calculation,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  transform: [loginPageBlacklist],
};

export default persistReducer(persistConfig, rootReducer);
