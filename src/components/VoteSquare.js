import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { toast } from 'react-toastify';
import StyledVoteSquare from './styledComponents/StyledVoteSquare';

class VoteSquare extends React.Component{
  constructor(props){
    super(props);
    this.state={
      thumbpsUpPercentage:0,
      thumbsdownPercentage:0,
      voted:false
    }
    this.calculatePercentage = this.calculatePercentage.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.renderVoteButtons = this.renderVoteButtons.bind(this);
    this.handleVoteAgain = this.handleVoteAgain.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  componentDidMount(){
    this.calculatePercentage();
  }

  calculatePercentage(){
    const totalVotes = this.props.celebrity.thumbsup + this.props.celebrity.thumbsdown;
    const thumbsUpP = Math.round((this.props.celebrity.thumbsup * 100) / totalVotes);
    const thumbsDownP = Math.round((this.props.celebrity.thumbsdown * 100) / totalVotes);
    this.setState({
      thumbpsUpPercentage:thumbsUpP,
      thumbsdownPercentage:thumbsDownP
    });
  }

  handleUpVote(){
    this.handleMessage();
    this.props.upVote(this.props.celebrity);
    this.calculatePercentage();
    this.setState({
      voted:true
    })
  }

  handleDownVote(){
    this.handleMessage();
    this.props.downVote(this.props.celebrity);
    this.calculatePercentage();
    this.setState({
      voted:true
    })
  }

  handleMessage(){
    toast.info("Thank You!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000 
    });
  }

  handleVoteAgain(){
    this.setState({
      voted:false
    })
  }

  renderVoteButtons(){
    if(this.state.voted){
      return (
        <button className="vote-now-button vote-again-button" onClick={this.handleVoteAgain}>Vote Again</button>
      );
    }
    return (
      <>
        <button onClick={this.handleUpVote} className="thumb-button thumbup-button"><FontAwesomeIcon icon={faThumbsUp}/></button>
        <button onClick={this.handleDownVote} className="thumb-button thumbdown-button"><FontAwesomeIcon icon={faThumbsDown}/></button>
        <button onClick={this.handleMessage} className="vote-now-button">Vote Now</button>
      </>
    );
  }

  renderThumbIcon(){
    if(this.state.thumbpsUpPercentage >= this.state.thumbsdownPercentage){
      return (
        <div className="thumb-name"><span><FontAwesomeIcon icon={faThumbsUp}/></span></div>
      );
    }
    return (<div className="thumb-name thumbdown-button"><span><FontAwesomeIcon icon={faThumbsDown}/></span></div>);
  }

  render(){
    return (
      <StyledVoteSquare image={this.props.image} thumbUp={+this.state.thumbpsUpPercentage ||1} thumbDown={+this.state.thumbsdownPercentage || 1}>
        <div className="name-container">
          {this.renderThumbIcon()}
          <h2>{this.props.celebrity.name}</h2>
        </div>
        <h6 className="lapse"><strong>1 month ago</strong> in Entertainment</h6>
        <p className="description">{this.props.celebrity.description}</p>
        <div className="button-container">
          {this.renderVoteButtons()}
        </div>
        <div className="votes-percentage-container">
          <span className="thumbup-percentage"><FontAwesomeIcon icon={faThumbsUp}/> {this.state.thumbpsUpPercentage || '0'}%</span>
          <span className="thumbdown-percentage">{this.state.thumbsdownPercentage || '0'}% <FontAwesomeIcon icon={faThumbsDown}/></span>
        </div>
      </StyledVoteSquare>
    );
  }
}

export default VoteSquare;