import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ cards, scores }) => {
  return (
    <>
      <div>Cards left: {cards}</div>
      <div>Correct answers: {scores}</div>
    </>
  );
};

Counter.propTypes = {
  cards: PropTypes.number,
  score: PropTypes.number,
}

export {
  Counter
}
