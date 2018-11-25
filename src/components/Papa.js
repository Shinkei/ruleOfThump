import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import HeaderSquare from './styledComponents/HeaderSquare'
import StyledPapa from './styledComponents/StyledPapa';

const Papa = (props) => {
  return(
    <StyledPapa>
      <main>
        <HeaderSquare>
          <article>
            <h6>What's your opinion on</h6>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <div className="more">
              <span><FontAwesomeIcon icon={faWikipediaW} /></span>
              <h6><a href="https://en.wikipedia.org/wiki/Pope">More information</a></h6>
            </div>
            <h4>What's Your Veredict?</h4>
          </article>
            <div className="button-container">
              <button className="thumbsup"><FontAwesomeIcon icon={faThumbsUp} /></button>
              <button className="thumbsdown"><FontAwesomeIcon icon={faThumbsDown} /></button>
            </div>
      </HeaderSquare>
      </main>
    </StyledPapa>
  );
}

export default Papa;