import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from 'components/Counter';
import { getDeckSelector, getLoadingSelector, getCardsSelector } from './selectors';
import { getShuffledDeck, getCards } from './actions';
import { Card } from 'components/Card/Card';

export const Deck = () => {
  const dispatch = useDispatch();
  const deck = useSelector(getDeckSelector);
  const selectedCards = useSelector(getCardsSelector);
  const isLoading = useSelector(getLoadingSelector);
  const handleSelectCards = () => {
    dispatch(getCards(deck.deck_id));
  }
  console.log(selectedCards);

  useEffect(() => {
    dispatch(getShuffledDeck())
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {deck && selectedCards && <Counter count={deck.remaining > selectedCards.remaining ? selectedCards.remaining : deck.remaining} />}
      {selectedCards && selectedCards.cards.map(card => <Card key={card.code} {...card} />)}
      <button onClick={handleSelectCards}>+</button>
      <button>-</button>
    </div>
  );
};
