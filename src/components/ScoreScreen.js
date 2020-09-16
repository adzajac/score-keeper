import React from 'react';
import AddPointsBox from './AddPointsBox';
import GameHistory from './GameHistory';
import Scoreboard from './Scoreboard';

class ScoreScreen extends React.Component {

  state = {
    players:this.props.playersNames.map((playerName)=>{return{name:playerName,score:0};}),
    currentPlayer:0,
    rounds:[]
  };

  addPoints = (points) => {

    const newStatePlayers = this.state.players.map((player,i) => { 
      if(i===this.state.currentPlayer) {
        return {name:player.name, score:player.score+points}
      } else
      return player;
    })
    
    this.setState({
        players:newStatePlayers, 
        currentPlayer:this.state.currentPlayer===this.state.players.length-1?0:this.state.currentPlayer+1
      }
    );
    
    if(this.state.currentPlayer === 0) {
      this.setState({rounds:[...this.state.rounds,[points]]});
    } else {
      let newRoundsState = [...this.state.rounds];
      newRoundsState[newRoundsState.length-1].push(points);
      this.setState({
        rounds: newRoundsState
      });
    }
    
  }

  render() {
    return(
      <div>
        <AddPointsBox 
          nextPlayerName={this.props.playersNames[this.state.currentPlayer]} 
          addPointsBtnHandler={this.addPoints}/>
        <Scoreboard players={this.state.players}/>
        <GameHistory rounds={this.state.rounds} playersNames={this.props.playersNames}/>    
      </div>
    );
  }

}


export default ScoreScreen;
