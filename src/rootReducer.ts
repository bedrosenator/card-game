import { combineReducers } from 'redux';
import deckReducer from 'containers/Deck/reducer';

const rootReducer = combineReducers({
  deck: deckReducer,
});

export default rootReducer;
