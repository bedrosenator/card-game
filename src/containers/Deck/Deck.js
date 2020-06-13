import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from 'components/Counter';
import {
  getDeckSelector,
  getLoadingSelector,
  getCardsSelector,
  cardsCounterSelector,
  scoresCounterSelector
} from './selectors';
import { getShuffledDeck, getCards } from './actions';
import { Card } from 'components/Card/Card';

export const Deck = () => {
  const dispatch = useDispatch();
  const deck = useSelector(getDeckSelector);
  const cards = useSelector(getCardsSelector);
  const count = useSelector(cardsCounterSelector);
  const isLoading = useSelector(getLoadingSelector);
  const scoresCounter = useSelector(scoresCounterSelector);
  const handleSelectCards = (guess, cardValue) => {
    dispatch(getCards({
      deckId: deck.deck_id,
      cardValue,
      guess
    }));
  }
  console.log(' cARDS ====> ', cards);

  useEffect(() => {
    dispatch(getShuffledDeck())
  }, [dispatch]);

  return (
    <div>
      {deck && cards && <Counter scores={scoresCounter} cards={count} />}
      {cards && cards.cards.map(card => <Card key={card.code} {...card} />)}
      <button onClick={() => handleSelectCards(1, cards.cards[0].value)}>Next card is bigger</button>
      <button onClick={() => handleSelectCards(-1, cards.cards[0].value)}>Next card is smaller</button>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};
