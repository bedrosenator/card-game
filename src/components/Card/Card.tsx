import React, { FC } from 'react';

type TCardProps = {
  image: string,
  value: string,
  suit: string,
  code:string
}

export const Card: FC<TCardProps> = ({ image, value, suit, code }) => {
  return (
    <div style={{height: '350px'}}>
      <div>{value} {suit}</div>
      <img alt={value} src={image} />
    </div>
  );
}
