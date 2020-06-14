import React, {useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from 'components/Counter';
import {
  rootStateSelector,
} from './selectors';
import { getCards, getShuffledDeck } from './actions';
import { ICard } from 'types/deck';
import Card from 'components/Card';

export const Deck: FC = () => {
  const dispatch = useDispatch();
  const store = useSelector(rootStateSelector);
  const { deck, cards, loading, scores, remaining } = store;
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
console.log("DECK")
  return (
    <div>
      {cards.length &&
        <>
          {cards.map((card: ICard) => <Card key={card.code} {...card} />)}
          <Counter cardValue={cards[0].value} deckId={deck.deck_id} cards={remaining} scores={scores}/>
        </>
      }
    </div>
  );
};
