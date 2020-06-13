import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from 'components/Counter';
import {
  rootStateSelector,
  cardsCounterSelector
} from './selectors';
import { getShuffledDeck, getCards } from './actions';
import { Card } from 'components/Card/Card';

export const Deck: FC = () => {
  const dispatch = useDispatch();
  const store = useSelector(rootStateSelector);
  const cardsCount = useSelector(cardsCounterSelector);
  const { deck, cards, loading, scores } = store;
  const handleSelectCards = (guess, cardValue) => {
    dispatch(getCards({
      deckId: deck.deck_id,
      cardValue,
      guess
    }));
  }

  useEffect(() => {
    dispatch(getShuffledDeck())
  }, [dispatch]);

  return (
    <div>
      <Counter scores={scores} cards={cardsCount} />
      {cards.cards.map(card => <Card key={card.code} {...card} />)}
      <button onClick={() => handleSelectCards(1, cards.cards[0].value)}>Next card is bigger</button>
      <button onClick={() => handleSelectCards(-1, cards.cards[0].value)}>Next card is smaller</button>
      {loading && <div>Loading...</div>}
    </div>
  );
};
