import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count }) => {
  return (
    <div>Counter: {count}</div>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
}

export {
  Counter
}
