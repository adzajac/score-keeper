import React from 'react';

class GameHistory extends React.Component {

  render() {
    let renderedContent = <div></div>;

    if(this.props.rounds.length) {

      const renderRounds = this.props.rounds.map((round, i)=>{ 
        return (
          <tr key={"round"+i}>
            <td className="collapsing center aligned">{i+1}</td>
            {round.map((points,j)=>
              <td className="center aligned" key={"points_"+i+"_"+j}>
                {points}
              </td>
            )}
          </tr>
        );
      });

      renderRounds.reverse();

      const renderPlayers = this.props.playersNames.map((player,i)=><th className="center aligned" key={"pl"+i}>{player}</th>)

      renderedContent = 
        <div className="ui segment">
          <table className="ui very basic celled unstackable table">
            <thead>
              <tr>
                <th className="">Round</th>
                {renderPlayers}
              </tr>
            </thead>
            <tbody>
              {renderRounds}
            </tbody>
          </table>
        </div>;
    }
    
    return(
      <div className="ui segments">
          <div className="ui secondary segment">
            <h3>Game History</h3>
          </div>
        {renderedContent}
      </div>
    );
  }
}

export default GameHistory;