import { combineReducers } from 'redux';
import deckReducer from 'containers/Deck/reducer';

const rootReducer = combineReducers({
  deck: deckReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
