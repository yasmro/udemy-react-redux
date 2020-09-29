import React, { Component } from 'react';
// 1. connectをインポート
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom'

import { Field, reduxForm } from 'redux-form'

import { getEvent, deleteEvent, putEvent } from '../actions'

class EventsShow extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  renderField(field){
    const { input, label, type, meta: {touched, error}} = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values){
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  async onDeleteClick(){
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  render(){
    const { handleSubmit, pristine, submitting } = this.props;
    // pristine: 入力していない
    // submitting: submitが押されたらtrue

    return(
      <div>
        <h1>Show/Update Event</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
        
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <div>
          <input type="submit" value="Submit" disable={pristine || submitting} />
          <Link to="/" >Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div>
        </form>
      </div>
    )
  }
}

// 5-2. mapDispatchToPropsで使用するactionを明記
// key: () => dispatch(返す関数())


const mapDispatchToProps = ({ deleteEvent })

const validate = values => {
  const errors = {}

  if(!values.title) errors.title = 'Enter a title, please.'
  if(!values.body) errors.body = 'Enter a body, please.'
  return errors
}

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm'})(EventsShow)
)
