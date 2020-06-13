import { createSelector } from 'reselect';

export const getRootStateSelector = (state) => state.deck;

export const getLoadingSelector = createSelector(getRootStateSelector, (state) => {
  return state.loading;
});

export const getDeckSelector = createSelector(getRootStateSelector, (state) => {
  return state.deck;
});

export const getCardsSelector = createSelector(getRootStateSelector, (state) => {
  return state.cards;
});

export const scoresCounterSelector = createSelector(getRootStateSelector, (state) => {
  return state.scores;
});

export const cardsCounterSelector = createSelector(getCardsSelector, getDeckSelector, (cards, deck) => {
  return deck && cards && deck.remaining > cards.remaining ? cards.remaining : deck.remaining;
});
