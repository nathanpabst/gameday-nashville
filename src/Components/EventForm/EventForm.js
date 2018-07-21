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
        <h2 className="">Add an event:</h2>
        <form className="form-horizontal" onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="team1">Team One:</label>
            <input
              type="text"
              class="form-control"
              id="team1"
              placeholder="Chiefs"
              value={newEvent.team1}
              onChange={this.team1Change}
            />
          </div>
          <div className="form-group">
            <label htmlFor="team2">Team Two:</label>
            <input
              type="text"
              class="form-control"
              id="team2"
              placeholder="Chargers"
              value={newEvent.team2}
              onChange={this.team2Change}
            />
          </div>
          <div className="form-group">
            <label htmlFor="datetime-local">Date</label>
            <input
              type="datetime-local"
              class="form-control"
              id="date"
              placeholder="MM/DD/YYYY"
              value={newEvent.date}
              onChange={this.dateChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              class="form-control"
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
              class="form-control"
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
              class="form-control"
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
              class="form-control"
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
              // pattern="[0-9]{5}"
              class="form-control"
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
              class="form-control"
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
