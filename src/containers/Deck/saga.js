import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import config from 'config';
import { getShuffledDeckError, getShuffledDeckSuccess, getCards, getCardsSuccess, getCardsError } from './actions';
import { GET_CARDS, GET_SHUFFLED_DECK } from './constants';

function* sagaWatcher() {
  yield takeLatest([GET_SHUFFLED_DECK], getShuffledDeckSaga);
  yield takeLatest([GET_CARDS], getCardsSaga);
}

function* getShuffledDeckSaga() {
  try {
    const deck = yield axios.get(`${config.api.url}/new/shuffle/?deck_count=1`);

    if (deck && deck.data) {
      yield put(getShuffledDeckSuccess(deck.data));
      yield getCardsSaga(deck.data.deck_id);
    }
  } catch (e) {
    yield put(getShuffledDeckError({
      status: e.response.status,
      statusText: e.response.statusText,
    }));
  }
}

function* getCardsSaga(deckId) {
  const id = deckId.data ? deckId.data : deckId;
  const cards = yield axios.get(`${config.api.url}/${id}/draw/?count=1`);
  yield put(getCardsSuccess(cards.data));
}

export default sagaWatcher;
