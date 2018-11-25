import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'styled-components';
import papa from '../assets/papa.png';

const StyledPapa = styled.div`
  background-image: url(${papa});
  max-height:100%;
  height:auto;
  padding-top: 1px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledSquare = styled.div`
  width: 613px;
  margin-top: 12%;
  margin-left: 12%;
  background-color: #4c4c4c;
  opacity: 0.7;
  color: white;

  article{
    text-align: left;
    padding-top: 12px;
    padding-left: 34px;
  }

  h1{
    font-size: 70px;
    margin: 0;
  }

  h6{
    font-size: 19px;
    margin: 0;
    padding-top: 24px;
  }

  p{
    margin: 0;
    font-size: 24px;
    padding-right: 90px;
    padding-top: 18px;
  }

  a{
    color: white;
    text-decoration: none;
    border-bottom: 2px dotted #fff;
  }
  .more{
    display:grid;
    grid-template-columns: 1fr 10fr;
  }
  .more > span {
    padding-top: 23px;
    font-size: 23px;
  }

  .button-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  button{
    font-size:25px;
    padding:20px;
    opacity:0.7;
    color:#ffffff;
    border:none;
  }
  .thumbsup{
    background-color: #2cbbb3;
  }
  .thumbsdown{
    background-color: #feb432;
  }
`;

const Papa = (props) => {
  return(
    <StyledPapa>
      <main>
        <StyledSquare>
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
              <button className="thumbsup"><FontAwesomeIcon icon="thumbs-up" /></button>
              <button className="thumbsdown"><FontAwesomeIcon icon="thumbs-down" /></button>
            </div>
      </StyledSquare>
      </main>
    </StyledPapa>
  );
}

export default Papa;