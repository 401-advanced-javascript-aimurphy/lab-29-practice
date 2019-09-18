import React from 'react';
import When from './if/index.js';
import Card from './card.js';
import Deck from './deck.js';
const Page = (props) => {
  const content = props.content || [];
  return (
    <>
      {content.map((deck, i) => {
        const cards = deck.records.map((card, i) => (<Card key={`card${i}`} content={card} />));

        // @809 walk through the code.
        /*
        content={
          Deck1:{
            card1={},
            card2={}
          },
          Deck2:{
            card1={},
            card2={}
          }
        }
        for all the decks in content create a deck where all kids are card
        for all the cards in a deck give the card content
        */
        return (
          <Deck key={`deck${i}`} deck={deck}>
            {cards}
          </Deck>
        )
        /*
        <Deck className="deck">
          {deck.records.map( (card) =>
            <Card className="card">
            </Card>
          )}
        </Deck>
        */
      })}
    </>
  );
};


export default Page;
