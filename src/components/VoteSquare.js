import React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import image from '../assets/kanye.png';

const StyledDiv = styled.div`
  background-image: url(${image});
  width: 100%;
  height: 640px;
`;


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
    toast.info("Thank You!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000 
    });
    this.props.upVote(this.props.celebrity);
    this.calculatePercentage();
    this.setState({
      voted:true
    })
  }

  handleDownVote(){
    toast.info("Thank You!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000 
    });
    this.props.downVote(this.props.celebrity);
    this.calculatePercentage();
    this.setState({
      voted:true
    })
  }

  handleVoteAgain(){
    this.setState({
      voted:false
    })
  }

  renderVoteButtons(){
    if(this.state.voted){
      return (
        <button onClick={this.handleVoteAgain}>Vote Again</button>
      );
    }
    return (
      <>
        <button onClick={this.handleUpVote}>Thumb up</button>
        <button onClick={this.handleDownVote}>Thumb down</button>
        <button>Vote Now</button>
      </>
    );
  }

  render(){
    return (
      <StyledDiv>
        <div>
          <span>logoThumb</span>
          <h2>{this.props.celebrity.name}</h2>
        </div>
        <h6><strong>1 month ago</strong> in Entertainment</h6>
        <p>{this.props.celebrity.description}</p>
        <p>{this.state.totalVotes}</p>
        <div>
          {this.renderVoteButtons()}
        </div>
        <div>
          <span>thumb up {this.state.thumbpsUpPercentage}%</span>
          <span>thumb down {this.state.thumbsdownPercentage}%</span>
        </div>
      </StyledDiv>
    );
  }
}

export default VoteSquare;