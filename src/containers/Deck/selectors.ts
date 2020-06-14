import { createSelector } from 'reselect';
import { AppState } from 'rootReducer';

export const getRootStateSelector = (state: AppState) => state.deck && state.deck;

export const rootStateSelector = createSelector(getRootStateSelector, (state) => {
  return state;
});

export const cardsCounterSelector = createSelector(rootStateSelector, ({ deck, cards }) => {
  return deck.remaining > cards.remaining ? cards.remaining : deck.remaining;
});
