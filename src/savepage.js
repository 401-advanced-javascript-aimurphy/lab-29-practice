import React from 'react';
import Card from './card.js';
import Deck from './deck.js';
import {If, When, Unless} from './if/index';
const Page = (props) => {

  const content = props.content || [];

  return (
    <>
      {content.map( (deck,i) => (

        <Deck className="deck">
           <header><h2>{deck.title}</h2></header>

          {deck.records.map( (card) =>

            <Card className="card">
              <header><h3>{card.title}</h3></header>
              <div className="content">{card.copy}</div>
              <figure>
                <img src={card.media.href} alt={card.media.alt} />
                <figcaption>{card.media.title}</figcaption>
              </figure>
              <nav className="links">
                <ul>
                  {card.links.map( (link,i) => (
                    <li key={i}><a className={link.type} href={link.href} title={link.title}>{link.title}</a></li>
                  ))}
                </ul>
              </nav>
            </Card>

          )}

        </Deck>

      ))}
    </>
  );
};

// function Deck(props) {
//   return <div>{props.children}</div>;
// }

// function Card(props) {
//   return <div>{props.children}</div>;
// }


export default Page;
