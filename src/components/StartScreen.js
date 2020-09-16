import React from 'react';


class StartScreen extends React.Component {

  state = {
    addingNewPlayer: false,
    newPlayerName: 'player 1'
  };

  addPlayerInputRef = React.createRef();

  addPlayerBtnHandler = () => {
    this.setState({addingNewPlayer:false});
    this.props.onAddPlayerClick(this.state.newPlayerName);
  }
  
  componentDidUpdate() {
    if(this.state.addingNewPlayer) {
      this.addPlayerInputRef.current.focus();
    }
  }

  removePlayer(player) {
    this.props.onRemovePlayerClick(player);
  }

  render() {

    const players = this.props.playersNames.map((player,index)=>{
      return(
        <div key={player+index}>
          <div className="ui large basic label" style={{marginBottom:"2px"}}>
            {player}     
            <i className="delete icon" onClick={player=>this.removePlayer(index)}></i>
          </div>

        </div>
      );
    });

    const addNewPlayer = () => {
      if(this.state.addingNewPlayer) {
        return (
          <div>
            <form>
            <div className="ui input" style={{marginRight:"4px"}}>
              <input className="" ref={this.addPlayerInputRef} value={this.state.newPlayerName} onChange={(e)=>{this.setState({newPlayerName:e.target.value})}}/>
            </div>
            <button className="ui blue button" onClick={this.addPlayerBtnHandler}>OK</button>
            <button className="ui button" onClick={()=>{this.setState({addingNewPlayer:false})}}>CANCEL</button>
            </form>
            
          </div>
        );
      } else {
        return (
          <div>
            <button className="ui labeled blue icon button" onClick={()=>{this.setState({addingNewPlayer:true, newPlayerName:'player ' +(this.props.playersNames.length+1)})}}>
            <i className="plus icon"></i>
              Add player
            </button>
          </div>
        );
      }
    } 

    return(

      <div>
        
        <div className="ui segments">
          <div className="ui secondary padded segment">
            <h3>Players</h3>
          </div>

          <div className="ui basic very padded segment">
            {players}
            <br/>
            {addNewPlayer()}
          </div>
        </div>

        
        
        
        
        <div className="ui center aligned basic segment">
          <button className={`ui green massive button ${this.props.playersNames.length?"":"disabled"}`} onClick={this.props.onStartClick}>Start Game</button>
        </div>
      </div>
    );
  }

}


export default StartScreen;