import React, { FC } from 'react';
import {getCards} from '../../containers/Deck/actions';
import {useDispatch} from 'react-redux';

type TCounterProps = {
  cards: number,
  scores: number,
  cardValue: string,
  deckId: string
};

const Counter: FC<TCounterProps> = ({ cards, scores, cardValue, deckId }) => {
  const dispatch = useDispatch();
  const handleSelectCards =  (guess: number, cardValue: string) => {
    dispatch(getCards({
      deckId,
      cardValue,
      guess
    }));
  }

  return (
    <>
      <div>Cards left: {cards}</div>
      <div>Correct answers: {scores}</div>
      <button onClick={() => handleSelectCards(1, cardValue)}>Next card is bigger</button>
      <button onClick={() => handleSelectCards(-1, cardValue)}>Next card is smaller</button>
    </>
  );
};

export {
  Counter
}