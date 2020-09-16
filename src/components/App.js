import React from 'react';

import StartScreen from './StartScreen';
import ScoreScreen from './ScoreScreen';

class App extends React.Component {

  state = {
    scoreSessionStarted:false,
    playersNames:[]
  };

  render() {
    
    let renderScreen = <div></div>;

    if(this.state.scoreSessionStarted) {
      renderScreen = <ScoreScreen playersNames={this.state.playersNames}/> 
    } else {
      renderScreen = <StartScreen 
        playersNames={this.state.playersNames} 
        onAddPlayerClick={(player)=>this.setState({playersNames:[...this.state.playersNames, player]})}
        onRemovePlayerClick={(playerNumb)=>this.setState({playersNames:this.state.playersNames.filter((p,i)=>i!==playerNumb)})}
        onStartClick={()=>{
          if(this.state.playersNames.length) {
            this.setState({scoreSessionStarted:true})
          }
        }}
      /> 
    }

    return(
      <div className="ui text raised container segments" style={{marginTop: "1em"}}>
        <div className="ui center aligned segment padded">
          <h1 className="ui header">Score Keeper</h1>
        </div>
        <div className="ui very padded segment">
          {renderScreen}
        </div>   
      </div>
    );

  }
};

export default App;
