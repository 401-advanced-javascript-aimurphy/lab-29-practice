import React from 'react';
import {If, When, Unless} from './if/index.js';


function Deck(props) {
const deck=props.deck||[];
  return (
    <div>
      <When condition={deck.title}>
        <header><h2>{deck.title}</h2></header>
      </When>
      {props.children}
      </div>
  );
}

export default Deck;