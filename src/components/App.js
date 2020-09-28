import React, { Component } from 'react';

const App = () => {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    console.log(this.state)
  }
  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }
  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render(){
    return(
      <div>
        <h1>count:{this.state.count}</h1>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </div>
    )
  }
}


export default App;
