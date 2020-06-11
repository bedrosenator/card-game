import { spawn, all, call } from 'redux-saga/effects'
import deckSaga from 'containers/Deck/saga';

export default function* rootSaga () {
  const sagas = [
    deckSaga,
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.error(e)
        }
      }
    }))
  );
}
