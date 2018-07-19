import React from 'react';

import PropTypes from 'prop-types';

import './EventForm.css';

const defaultEvent = {
  team1: '',
  team2: '',
  date: 0,
  time: 0,
  location: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  description: '',
};

class EventForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    newEvent: defaultEvent,
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

  team1Change = (e) => {
    this.formFieldStringState('team1', e);
  }

  team2Change = (e) => {
    this.formFieldStringState('team2', e);
  }

  dateChange = (e) => {
    this.formFieldNumberState('date', e);
  }

  timeChange = (e) => {
    this.formFieldNumberState('time', e);
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
    const {onSubmit} = this.props;
    const {newEvent} = this.state;
    e.preventDefault();
    if (
      newEvent.team1 &&
      newEvent.team2 &&
      newEvent.date &&
      newEvent.time &&
      newEvent.address &&
      newEvent.city &&
      newEvent.state &&
      newEvent.zip &&
      newEvent.description) {
      onSubmit(this.state.newEvent);
      this.setState({newEvent: defaultEvent});
    } else {
      alert('dear god why???');
    }
  }

  render () {
    const {newEvent} = this.state;
    return (
      <div className="col-xs-8 col-xs-offset-2">
        <h2 className="text-center">Add an event:</h2>
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="team1">Team One:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="team1"
                placeholder="Chiefs"
                value={newEvent.team1}
                onChange={this.team1Change}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="team1">Team Two:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="team2"
                placeholder="Chargers"
                value={newEvent.team2}
                onChange={this.team2Change}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="date">Date:</label>
              <br />
              <input
                className="col-xs-12"
                type="date"
                id="date"
                placeholder="9/9/18"
                value={newEvent.date}
                onChange={this.dateChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="time">Time:</label>
              <br />
              <input
                className="col-xs-12"
                type="time"
                id="time"
                placeholder="3:05 PM"
                value={newEvent.time}
                onChange={this.timeChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="location">Location:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="location"
                placeholder="Double Dogs"
                value={newEvent.location}
                onChange={this.locationChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="address">Address:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="address"
                placeholder="12345 Main Street"
                value={newEvent.address}
                onChange={this.addressChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="city">City:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="city"
                placeholder="Nashville"
                value={newEvent.city}
                onChange={this.cityChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="state">State:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="state"
                placeholder="TN"
                value={newEvent.state}
                onChange={this.stateChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="zip">Zip Code:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                pattern="[0-9]{5}"
                id="zip"
                placeholder="37209"
                value={newEvent.zip}
                onChange={this.zipChange}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset className="col-xs-6">
              <label htmlFor="description">Description:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="description"
                placeholder="See you there!"
                value={newEvent.description}
                onChange={this.descriptionChange}
              />
            </fieldset>
          </div>
          <button className="col-xs-6 btn btn-danger col-xs-offset-3">
            Save event
          </button>
        </form>
      </div>
    );
  }
}

export default EventForm;
