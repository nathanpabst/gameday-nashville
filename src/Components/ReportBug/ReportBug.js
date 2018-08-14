import React from 'react';
import FormAlert from '../FormAlert/FormAlert';

import PropTypes from 'prop-types';

import './ReportBug.css';

const defaultBug = {
  name: '',
  email: '',
  issue: '',
};

class ReportBug extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    newBug: defaultBug,
    message: 'please make sure all fields are complete',
  }

  // ********UPDATES THE STATE FOR FIELDS CONTAINING STRINGS*****//
  formFieldStringState = (name, e) => {
    const tempBug = {...this.state.newBug};
    tempBug[name] = e.target.value;
    this.setState({newBug: tempBug});
  }

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }
  emailChange = (e) => {
    this.formFieldStringState('email', e);
  }

  issueChange = (e) => {
    this.formFieldStringState('message', e);
  }

  // *******ENSURES ALL FIELDS ARE POPULATED BEFORE SAVING THE ENTRY****//
  formSubmit = (e) => {
    const {onSubmit} = this.props;
    const {newBug} = this.state;
    e.preventDefault();
    newBug.name &&
    newBug.email &&
    newBug.issue
      ? onSubmit(newBug) && this.setState({newBug: defaultBug})
      : this.setState({show: true});
  }

  render () {
    const show = this.state.show;
    const message = this.state.message;
    const {newBug} = this.state;
    return (
      <div className="col-xs-8 col-xs-offset-2 bug-form">
        <h2 className="">Report an issue:</h2>
        <form className="form-horizontal" onSubmit={this.formSubmit}>

          <div className="form-group">
            <label htmlFor="name">What is your full name?</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder=""
              value={newBug.name}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">What is your email address?</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder=""
              value={newBug.email}
              onChange={this.emailChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="issue">Please describe the issue.</label>
            <textarea
              type="text"
              className="form-control"
              rows="3"
              id="issue"
              placeholder=""
              value={newBug.issue}
              onChange={this.issueChange}
            />
          </div>
          <button className="btn btn-primary">
            Submit
          </button>
          <FormAlert
            show = {show}
            message = {message}
          />
        </form>
      </div>
    );
  }
}

export default ReportBug;
