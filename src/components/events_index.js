import React, { Component } from 'react';
// 1. connectをインポート
import { connect } from 'react-redux';

import _ from 'lodash';

import { Link } from 'react-router-dom'

// 2. すべてのactions関数を設定
import { readEvents } from '../actions'



class EventsIndex extends Component {
  // Componentがマウントしたときに実行
  componentDidMount(){
    console.log("mounted!");
    // 外部のapiサーバを取得
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    return(
      <div>
        <h1>Events</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to="/events/new">New Event</Link>
      </div>
    )
  }
}

// 5. connect
// 5-1. mapStateToPropsで使用するstateを明記
const mapStateToProps = (state) => ({events: state.events})

// 5-2. mapDispatchToPropsで使用するactionを明記
// key: () => dispatch(返す関数())

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)


// export default App;
