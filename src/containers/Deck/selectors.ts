import { createSelector } from 'reselect';
import { AppState } from 'rootReducer';

export const getRootStateSelector = (state: AppState) => state.deck && state.deck;

export const rootStateSelector = createSelector(getRootStateSelector, (state) => {
  return state;
});
