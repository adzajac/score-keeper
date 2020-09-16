import React from 'react';


class Scoreboard extends React.Component {


render() {

  const playersTable = [...this.props.players].sort((a,b)=>{return b.score-a.score}).map((player,i)=>{
    return (
      <tr key={player.name+i}>
        <td className="collapsing fitted center aligned">{i+1}</td>
        <td className="left aligned">{player.name}</td>
        <td className="right aligned"> {player.score}</td>
      </tr>
    );
  })

  return (
    <div className="ui segments">
      <div className="ui secondary segment">
        <h3>Scoreboard</h3>
      </div>

      <div className="ui segment">
        <table className="ui very basic celled unstackable table">
          <thead>
            <tr>
              <th className="">Position</th>
              <th className="">Player Name</th>
              <th className="three wide right aligned">Total</th>
            </tr>
          </thead>
          <tbody>
            {playersTable}
          </tbody>
        </table>
      </div>
    </div>
  );

}

}

export default Scoreboard;