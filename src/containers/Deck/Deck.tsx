import React, {useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from 'components/Counter';
import {
  rootStateSelector,
  cardsCounterSelector
} from './selectors';
import { getCards, getShuffledDeck } from './actions';
import { ICard } from 'types/deck';
import Card from 'components/Card';

export const Deck: FC = () => {
  const dispatch = useDispatch();
  const store = useSelector(rootStateSelector);
  const { deck, cards, loading, scores } = store;
  const cardsCount = useSelector(cardsCounterSelector);
  const handleSelectCards =  (guess: number, cardValue: string) => {
    dispatch(getCards({
      deckId: deck.deck_id,
      cardValue,
      guess
    }));
  }

  useEffect(() => {
    dispatch(getShuffledDeck())
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {cards.cards.map((card: ICard) => <Card key={card.code} {...card} />)}
      <Counter cards={cardsCount} scores={scores} />
      <button onClick={() => handleSelectCards(1, cards.cards[0].value)}>Next card is bigger</button>
      <button onClick={() => handleSelectCards(-1, cards.cards[0].value)}>Next card is smaller</button>
    </div>
  );
};
