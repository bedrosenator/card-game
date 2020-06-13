import {
  GET_CARDS,
  GET_CARDS_ERROR,
  GET_CARDS_SUCCESS,
  GET_SHUFFLED_DECK,
  GET_SHUFFLED_DECK_ERROR,
  GET_SHUFFLED_DECK_SUCCESS, INCREMENT_SCORE
} from './constants';

const initialState = {
  loading: false,
  cards: {
    success: false,
    deck_id: '',
    cards: [],
  },
  deck: {
    success: false,
    deck_id: '',
    remaining: 0,
    shuffled: false,
  },
  scores: 0,
  error: null,
};

function deckReducer(state = initialState, { type, data }) {
  switch (type) {
    case GET_SHUFFLED_DECK:
      return {
        ...state,
        loading: true,
      };
    case GET_SHUFFLED_DECK_SUCCESS:
      return {
        ...state,
        loading: false,
        deck: data
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
      };
    case GET_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: data
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
