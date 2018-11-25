import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Papa from './components/Papa';
import { fetchCelebritiesAction, upVoteCelebrityAction, downVoteCelebrityAction } from './reducers/ruleOfThumbs';
import VoteSquare from './components/VoteSquare';
import 'react-toastify/dist/ReactToastify.css';
import crowd from './assets/crowd.jpg';
import cristina from './assets/cristina.png';
import kanye from './assets/kanye.png';
import malala from './assets/malala.png';
import mark from './assets/mark.png';

const StyledBody = styled.div`
  margin-left: 12%;
  margin-right: 12%;
  margin-top:3%;

  .ad-container{
    display:grid;
    grid-template-columns: 3fr 10fr 1fr;
    background-color: #ebebeb;
    h5{
      font-size: 21px;
      margin-top: 14px;
      margin-bottom: 0;
    }
    h2{
      font-size: 38px;
      margin-top: 0;
      margin-bottom: 14px;
    }
    @media (max-width: 1583px) {
      h5{
        font-size: 17px;
      }
      h2{
        font-size: 30px;
      }
    }
    @media (max-width: 1070px) {
      h5{
        font-size: 14px;
      }
      h2{
        font-size: 25px;
      }
    }
  }

  .text{
    text-align: left;
    font-size: 20px;
    @media (max-width: 1583px) {
      font-size:15px;
    }
  }
  
  .x{
    font-size:24px;
  }

  .subtitle{
    text-align:left;
  }

  .votes-container{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:45px;
    @media (max-width: 1725px) {
      grid-template-columns: 1fr;
    }
  }

  .new-celebrity{
    background:linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${crowd});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity:0.3;
    display:grid;
    grid-template-columns: 4fr 1fr;
    margin-top:5%;
    @media (max-width: 1420px) {
      grid-template-columns: 3fr 2fr;
    }
  }

  .new-celebrity-text{
    opacity:1;
    h3 {
      color: #000;
      text-align:left;
      padding-left:3%;
      opacity:1;
      font-size:30px;
    }
  }

  .submit-name{
    background-color: rgb(255,255,255,0);
    border: none;
    padding-right: 35px;
    div{
      font-size:21px;
      border:solid;
      padding:10px;
    }
  }

`;

class App extends Component {

  componentDidMount(){
    this.props.fetchCelebrities();
  }

  selectImage(name){
    console.log(name)
    switch(name){
      case 'Cristina Fernandez':
        return cristina;
      case 'Kanye West':
        return kanye;
      case 'Malala Yousafzai':
        return malala;
      case 'Mark Zuckerberg':
        return mark;
      default:
      return cristina;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Papa {...this.props.celebrities[0]} />
        <section>
          <ToastContainer className='toast-container'
            toastClassName="dark-toast"/>
          <StyledBody>
            <div className="ad-container">
              <div>
                <h5>Speak out. Be heard.</h5>
                <h2>Be counted</h2>
              </div>
              <p className="text">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.</p>
              <p className="x">X</p>
            </div>
            <h2 className="subtitle">Votes</h2>
            <div className="votes-container">
              {this.props.celebrities.map((celebrity, index) =>{
                if(index === 0) return undefined;
                return (
                  <VoteSquare 
                    key={celebrity.id}
                    celebrity={celebrity}
                    upVote={this.props.upVoteCelebrity}
                    downVote={this.props.downVoteCelebrity}
                    image={this.selectImage(celebrity.name)}/>
                )
              })}
            </div>
            <div className="new-celebrity">
              <h3>Is there anyone else you would want us to add?</h3>
              <button className="submit-name"><div>Submit a Name</div></button>
            </div>
            <Footer />
          </StyledBody>
        </section>
      </div>
    );
  }
}

export default connect(
  (state) => ({celebrities: state.celebrities}),
  {
    fetchCelebrities:fetchCelebritiesAction,
    upVoteCelebrity:upVoteCelebrityAction,
    downVoteCelebrity:downVoteCelebrityAction
  }
)(App);
