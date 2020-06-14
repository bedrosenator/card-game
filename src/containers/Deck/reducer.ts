import {
  GET_CARDS,
  GET_CARDS_ERROR,
  GET_CARDS_SUCCESS,
  GET_SHUFFLED_DECK,
  GET_SHUFFLED_DECK_ERROR,
  GET_SHUFFLED_DECK_SUCCESS,
  INCREMENT_SCORE
} from './constants';
import {ICard, ICards, IDeck} from 'types/deck';
import { IDeckActionTypes } from 'types/actions';

type TDeckState = {
  loading: boolean,
  cards: ICard[],
  deck: IDeck,
  scores: number,
  remaining: number,
  error: TypeError | null
}

const initialState: TDeckState = {
  loading: false,
  cards: [],
  deck: {
    success: false,
    deck_id: '',
    remaining: 0,
    shuffled: false,
  },
  scores: 0,
  remaining: 0,
  error: null,
};

function deckReducer(state = initialState, { type, data }: IDeckActionTypes) {
  switch (type) {
    case GET_SHUFFLED_DECK:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_SHUFFLED_DECK_SUCCESS:
      return {
        ...state,
        loading: false,
        deck: data,
        remaining: data.remaining
      };
    case GET_SHUFFLED_DECK_ERROR:
      return {
        ...state,
        loading: false,
        error: data,
      };
    case GET_CARDS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: data.cards,
        remaining: data.remaining
      };
    case GET_CARDS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        scores: state.scores + 1,
      };
    default:
      return state;
  }
}

export default deckReducer;
