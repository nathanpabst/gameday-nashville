import React from 'react';

import PropTypes from 'prop-types';

import './EventForm.css';

const defaultEvent = {
  location: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  description: '',
};

class EventForm extends React.Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    // selectedGameDeets: PropTypes.object.isRequired,
  }

  state = {
    newEvent: defaultEvent,
    showEventForm: this.props.showEventForm,
  }

  formFieldStringState = (name, e) => {
    const tempEvent = {...this.state.newEvent};
    tempEvent[name] = e.target.value;
    this.setState({newEvent: tempEvent});
  }

  formFieldNumberState = (name, e) => {
    const tempEvent = {...this.state.newEvent};
    tempEvent[name] = e.target.value * 1;
    this.setState({newEvent: tempEvent});
  }

  locationChange = (e) => {
    this.formFieldStringState('location', e);
  }
  addressChange = (e) => {
    this.formFieldStringState('address', e);
  }

  cityChange = (e) => {
    this.formFieldStringState('city', e);
  }

  stateChange = e => {
    this.formFieldStringState('state', e);
  };

  zipChange = e => {
    this.formFieldNumberState('zip', e);
  };

  descriptionChange = (e) => {
    this.formFieldStringState('description', e);
  }

  formSubmit = (e) => {
    const {onFormSubmit} = this.props;
    const {newEvent} = this.state;
    e.preventDefault();
    newEvent.location &&
    newEvent.address &&
    newEvent.city &&
    newEvent.state &&
    newEvent.zip &&
    newEvent.description
      ? onFormSubmit && this.setState({newEvent: defaultEvent})
      : alert('dear god why???');
  }

  render () {
    const {newEvent} = this.state;
    return (
      <div className={console.error('from ef', this.state.showEventForm) || this.props.showEventForm ? 'col-xs-8 col-xs-offset-2' : 'hide'}>
        <h2 className="">Add an event:</h2>
        <form className="form-horizontal" onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Double Dogs"
              value={newEvent.location}
              onChange={this.locationChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main Street"
              value={newEvent.address}
              onChange={this.addressChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="Nashville"
              value={newEvent.city}
              onChange={this.cityChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="TN"
              value={newEvent.state}
              onChange={this.stateChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              pattern="[0-9]{5}"
              className="form-control"
              id="zip"
              placeholder="37215"
              value={newEvent.zip}
              onChange={this.zipChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              className="form-control"
              rows="3"
              id="description"
              placeholder="See you there!"
              value={newEvent.description}
              onChange={this.descriptionChange}
            />
          </div>
          <button className="btn btn-primary">
            Save Event
          </button>
        </form>
      </div>
    );
  }
}

export default EventForm;
