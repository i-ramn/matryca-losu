import apiCallsMapping from '@/api/apiCallMapping';
import { call, delay, put, takeEvery } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';

import { POSTFIXES, REQUEST_PENDING_DELAY } from '@/constants/actionPostfixes';
import { AxiosResponse } from 'axios';
import { isEmpty } from 'lodash';
import { SagaReturnType } from 'redux-saga/effects';
import createActionWithPostfix from './actionPostfixCreator';

const { REQUEST_POSTFIX, SUCCESS_POSTFIX, FAIL_POSTFIX } = POSTFIXES;

type CallMethod = (arg: string) => Promise<AxiosResponse<any, any>>;
type ResponseType = SagaReturnType<CallMethod>;

function* sendRequest(action: AnyAction) {
  try {
    const сallMethod: CallMethod = apiCallsMapping(action);
    const response: ResponseType = yield call(сallMethod, action.payload);

    console.log('Result of call');

    yield put(
      createActionWithPostfix(
        action,
        {
          response: !isEmpty(response) ? response.data : {},
          actionPayload: action.payload,
        },
        SUCCESS_POSTFIX,
      ),
    );
  } catch (error: any) {
    console.log(error);

    const errorMessage =
      error && error.response && error.response.data && error.response.data.message;

    yield put(
      createActionWithPostfix(
        action,
        {
          response: errorMessage || 'fail',
        },
        FAIL_POSTFIX,
      ),
    );
  }
}

function* requestEnded() {
  yield delay(REQUEST_PENDING_DELAY);
}

const isApiCallAction = (action: AnyAction) => action.type.endsWith(REQUEST_POSTFIX);

const isApiCallEndedAction = (action: AnyAction) =>
  action.type.endsWith(SUCCESS_POSTFIX) || action.type.endsWith(FAIL_POSTFIX);

function* apiCallsSaga() {
  yield takeEvery(isApiCallAction, sendRequest);
  yield takeEvery(isApiCallEndedAction, requestEnded);
}

export default apiCallsSaga;
