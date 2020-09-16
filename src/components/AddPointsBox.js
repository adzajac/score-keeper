import React from 'react';

class AddPointsBox extends React.Component {

  state = {
    inputValue:0
  };

  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  submitPoints = () => {
    this.props.addPointsBtnHandler(this.state.inputValue); 
    this.setState({inputValue:0});
    this.inputRef.current.focus();
  };

  validateInput = (e) => {
    const parsed = parseInt(e.target.value);
    if(!isNaN(parsed))
      this.setState({inputValue:parsed})
  }

  render() {
    return(
      <div className="ui segments">
        <div className="ui secondary center aligned padded segment">
          <h3> Next player: {this.props.nextPlayerName}</h3>
          <form onSubmit={(e)=>{e.preventDefault();}}>
            <div className="ui huge action input" > 
              <input style={{width:"5em", textAlign:"center"}} type="text" ref={this.inputRef} value={this.state.inputValue} onChange={this.validateInput}/>
              <button className="ui green huge button" onClick={this.submitPoints}>
                ADD POINTS&nbsp; 
              </button>
            </div>
          </form>
          <br/>
        </div>
      </div>
    );
  }
}

export default AddPointsBox;