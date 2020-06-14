import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import config from 'config';
import { getShuffledDeckError, getShuffledDeckSuccess, getCardsSuccess, incrementScore } from './actions';
import { GET_CARDS, GET_SHUFFLED_DECK } from './constants';

function* cardsSagaWatcher() {
  // @ts-ignore
  yield takeLatest([GET_CARDS], getCardsSaga);
}

function* deckSagaWatcher() {
  yield takeLatest([GET_SHUFFLED_DECK], getShuffledDeckSaga);
}

function* getShuffledDeckSaga() {
  try {
    const deck = yield axios.get(`${config.api.url}/new/shuffle/?deck_count=1`);
    if (deck && deck.data) {
      yield put(getShuffledDeckSuccess(deck.data));
      yield getCardsSaga({
        data: {
          deckId: deck.data.deck_id,
          guess: 0,
          cardValue: deck.data,
        },
      });
    }
  } catch (e) {
    yield put(getShuffledDeckError({
      status: e.response.status,
      statusText: e.response.statusText,
    }));
  }
}

function* getCardsSaga({ data }) {
  const cards = yield axios.get(`${config.api.url}/${data.deckId}/draw/?count=1`);
  yield put(getCardsSuccess(cards.data));

  if (data.guess) {
    const cardValue = cards.data.cards[0].value;
    const nextCardValue = config.cardsHash[cardValue];
    const prevCardValue = config.cardsHash[data.cardValue];
    const isNextCardBigger = nextCardValue > prevCardValue && data.guess === 1;
    const isNextCardSmaller = nextCardValue < prevCardValue && data.guess === -1 ;

    if (isNextCardBigger || isNextCardSmaller) {
      yield put(incrementScore())
    }
  }
}

export default [cardsSagaWatcher, deckSagaWatcher];
