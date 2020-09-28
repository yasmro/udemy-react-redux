import React, { Component } from 'react';
// 1. connectをインポート
import { connect } from 'react-redux';

// 2. すべてのactions関数を設定
import { increment, decrement } from '../actions'


// const App = () => {
//   return (
//     <div>
//       <Counter></Counter>
//     </div>
//   );
// }

class App extends Component {
  // 3. stateとメソッドはactions/reducersで定義済み
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     count: 0
  //   }
  //   console.log(this.state)
  // }
  // handlePlusButton = () => {
  //   this.setState({count: this.state.count + 1})
  // }
  // handleMinusButton = () => {
  //   this.setState({count: this.state.count - 1})
  // }

  render(){
    // 4. 対応するstate/actionをpropsで定義
    const props = this.props

    return(
      <div>
        <h1>count:{ props.value }</h1>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </div>
    )
  }
}

// 5. connect
// 5-1. mapStateToPropsで使用するstateを明記
const mapStateToProps = (state) => ({value: state.count.value})

// 5-2. mapDispatchToPropsで使用するactionを明記
// key: () => dispatch(返す関数())
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)


// export default App;
