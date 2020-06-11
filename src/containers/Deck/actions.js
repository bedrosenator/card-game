import {
  GET_CARDS,
  GET_CARDS_ERROR,
  GET_CARDS_SUCCESS,
  GET_SHUFFLED_DECK,
  GET_SHUFFLED_DECK_ERROR,
  GET_SHUFFLED_DECK_SUCCESS
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

export const getCards = (deckId) => {
  return {
    type: GET_CARDS,
    data: deckId,
  }
};

export const getCardsSuccess = (data) => {
  return {
    type: GET_CARDS_SUCCESS,
    data,
  }
};

export const getCardsError = (error) => {
  return {
    type: GET_CARDS_ERROR,
    error,
  }
};
