import React from 'react';
import {If, When, Unless} from './if/index.js';
import Card from './card.js';
import Deck from './deck.js';
const Page = (props) => {

  const content = props.content || [];

  return (
    <>
      {content.map( (deck,i) => (

        <Deck className="deck">
          <When condition={deck.title}>
           <header><h2>{deck.title}</h2></header>
           </When>
          {deck.records.map( (card) =>

            <Card className="card">
              <When condition={deck.title}>
              <header><h3>{card.title}</h3></header>
              </When>
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


export default Page;
