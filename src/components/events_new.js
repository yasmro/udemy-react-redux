import React, { Component } from 'react';
// 1. connectをインポート
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom'

// import { postEvent } from '../actions'

class EventsNew extends Component {
  render(){
    return(
      <div>
        <h1>Post Event</h1>
 
      </div>
    )
  }
}



// 5-2. mapDispatchToPropsで使用するactionを明記
// key: () => dispatch(返す関数())

// const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(EventsNew)


// export default App;
