import {
  GET_CARDS,
  GET_CARDS_ERROR,
  GET_CARDS_SUCCESS,
  GET_SHUFFLED_DECK,
  GET_SHUFFLED_DECK_ERROR,
  GET_SHUFFLED_DECK_SUCCESS,
  INCREMENT_SCORE
} from './constants';
import {
  IGetCards,
  IGetCardsError,
  IGetCardsSuccess,
  IGetShuffledDeck,
  IGetShuffledDeckError,
  IGetShuffledDeckSuccess,
  IGuessCard,
  IIncrementScore
} from 'types/actions';
import { ICards, IDeck, IError } from 'types/deck';

export const getShuffledDeck = (): IGetShuffledDeck => {
  return {
    type: GET_SHUFFLED_DECK,
  }
};

export const getShuffledDeckSuccess = (data: IDeck): IGetShuffledDeckSuccess => {
  return {
    type: GET_SHUFFLED_DECK_SUCCESS,
    data,
  }
};

export const getShuffledDeckError = (error: IError): IGetShuffledDeckError => {
  return {
    type: GET_SHUFFLED_DECK_ERROR,
    data: error,
  }
};

export const getCards = (data: IGuessCard ): IGetCards => {
  return {
    type: GET_CARDS,
    data,
  }
};

export const getCardsSuccess = (data: ICards): IGetCardsSuccess => {
  return {
    type: GET_CARDS_SUCCESS,
    data,
  }
};

export const incrementScore = (): IIncrementScore => {
  return {
    type: INCREMENT_SCORE,
  }
};

export const getCardsError = (error: IError): IGetCardsError => {
  return {
    type: GET_CARDS_ERROR,
    data: error,
  }
};
