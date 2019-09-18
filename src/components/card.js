import React from 'react';
import {If, When, Unless} from './if/index.js';


function Card(props) {
  const card=props.content || [];
  return (<div>
    {/* @815pm 17sept */}
      <When condition={card.title}>
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
    {props.children}</div>);
}

export default Card;