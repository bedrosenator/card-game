import {
  GET_CARDS,
  GET_CARDS_ERROR,
  GET_CARDS_SUCCESS,
  GET_SHUFFLED_DECK,
  GET_SHUFFLED_DECK_ERROR,
  GET_SHUFFLED_DECK_SUCCESS,
  INCREMENT_SCORE
} from './constants';

export const getShuffledDeck = () => {
  return {
    type: GET_SHUFFLED_DECK,
  }
};

export const getShuffledDeckSuccess = (data) => {
  return {
    type: GET_SHUFFLED_DECK_SUCCESS,
    data,
  }
};

export const getShuffledDeckError = (error) => {
  return {
    type: GET_SHUFFLED_DECK_ERROR,
    error,
  }
};

export const getCards = ({ deckId, guess, cardValue }) => {
  return {
    type: GET_CARDS,
    data: {
      deckId,
      guess,
      cardValue
    },
  }
};

export const getCardsSuccess = (data) => {
  return {
    type: GET_CARDS_SUCCESS,
    data,
  }
};

export const incrementScore = () => {
  return {
    type: INCREMENT_SCORE,
  }
};

export const getCardsError = (error) => {
  return {
    type: GET_CARDS_ERROR,
    error,
  }
};
