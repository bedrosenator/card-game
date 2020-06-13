import { createSelector } from 'reselect';

export const getRootStateSelector = (state) => state.deck && state.deck;

export const rootStateSelector = createSelector(getRootStateSelector, (state) => {
  return state;
});

export const cardsCounterSelector = createSelector(rootStateSelector, ({ deck, cards }) => {
  return deck.remaining > cards.remaining ? cards.remaining : deck.remaining;
});
