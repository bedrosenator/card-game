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
      <img alt={value} src={image} />
      <div>{value} {code} {suit}</div>
    </div>
  );
}
