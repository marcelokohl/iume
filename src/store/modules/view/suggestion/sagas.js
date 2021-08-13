import { takeLatest, all, call, put } from 'redux-saga/effects';
import { Types, Actions } from './actions';

import { Owner } from '../../../../services/api/view/owner';

function* sendSuggestion({ payload }) {
  const { suggestion, screen } = payload
  
  const data = {
    "feedback": {
      "body": suggestion,
      "screen": screen
    }
  }

  try {
    yield call(Owner.sendSuggestion, data)

    yield put(Actions.sendSuggestionSuccess())
  } catch(err) {
    yield put(Actions.sendSuggestionFailed(err))
  }
}

export default all([
  takeLatest(Types.SEND_SUGGESTION_REQUEST, sendSuggestion)
]);