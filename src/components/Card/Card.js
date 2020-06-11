import React from 'react';

export const Card = ({ image, value, suit, code }) => {
  return (
    <div>
      <img alt={value} src={image} />
      <div>{value} {code} {suit}</div>
    </div>
  );
}
