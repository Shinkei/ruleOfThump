import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Papa from './components/Papa';
import { fetchCelebritiesAction, upVoteCelebrityAction, downVoteCelebrityAction } from './reducers/ruleOfThumbs';
import VoteSquare from './components/VoteSquare';
import StyledApp from './components/styledComponents/StyledApp';
import cristina from './assets/cristina.png';
import kanye from './assets/kanye.png';
import malala from './assets/malala.png';
import mark from './assets/mark.png';

class App extends Component {

  componentDidMount(){
    this.props.fetchCelebrities();
  }

  selectImage(name){
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
          <StyledApp>
            <div id="pastTrial" className="ad-container">
              <div>
                <h5>Speak out. Be heard.</h5>
                <h2>Be counted</h2>
              </div>
              <p className="text">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.</p>
              <p className="x">X</p>
            </div>
            <h2 id="howItWork" className="subtitle">Votes</h2>
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
          </StyledApp>
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
