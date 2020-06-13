import React, { FC } from 'react';

type TCounterProps = {
  cards: number,
  scores: number,
};

const Counter: FC<TCounterProps> = ({ cards, scores }) => {
  return (
    <>
      <div>Cards left: {cards}</div>
      <div>Correct answers: {scores}</div>
    </>
  );
};

export {
  Counter
}
