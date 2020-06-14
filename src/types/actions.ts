import {
  GET_CARDS,
  GET_CARDS_ERROR,
  GET_CARDS_SUCCESS,
  GET_SHUFFLED_DECK,
  GET_SHUFFLED_DECK_ERROR,
  GET_SHUFFLED_DECK_SUCCESS,
  INCREMENT_SCORE
} from 'containers/Deck/constants';
import {ICard, ICards, IDeck, IError} from './deck';

export interface IGetShuffledDeck {
  type: typeof GET_SHUFFLED_DECK,
  data?: any
}

export interface IGetShuffledDeckSuccess {
  type: typeof GET_SHUFFLED_DECK_SUCCESS,
  data: IDeck,
}

export interface IGetShuffledDeckError {
  type: typeof GET_SHUFFLED_DECK_ERROR,
  data: IError,
}

export interface IGuessCard {
  deckId: string,
  guess?: number,
  cardValue: string,
}

export interface IGetCards {
  type: typeof GET_CARDS,
  data: IGuessCard,
}

export interface IGetCardsSuccess {
  type: typeof GET_CARDS_SUCCESS,
  data: ICard[],
}

export interface IIncrementScore {
  type: typeof INCREMENT_SCORE,
  data?: any
}

export interface IGetCardsError {
  type: typeof GET_CARDS_ERROR,
  data: IError,
}

export type IDeckActionTypes =
  IGetCards
  | IGetCardsError
  | IGetCardsSuccess
  | IGetShuffledDeck
  | IGetShuffledDeckSuccess
  | IGetShuffledDeckError
  | IIncrementScore
