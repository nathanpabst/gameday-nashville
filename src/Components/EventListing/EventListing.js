import React from 'react';

import './EventListing.css';

import getAllEvents from '../../firebaseRequests/events';

class EventListing extends React.Component {
  state = {
    events: [],
  }
  componentDidMount () {
    getAllEvents()
      .then((events) => {
        this.setState({events});
      })
      .catch((error) => {
        this.setState({events: []});
      });
  }
  render () {
    const {events} = this.state;
    const eventComponents = events.map((event) => (
      <div key={event.uid} className="card col-sm-4">
        <div className="card-body">
          <h3 className="card-title">{event.teamOne} vs. {event.teamTwo}</h3>
          <h4 className="card-text">{event.date} {event.time}</h4>
          <p className="card-text">{event.location}</p>
          <p className="card-text">{event.address}</p>
          <p className="card-text">{event.city}, {event.state}</p>
        </div>
      </div>
    ));
    return (
      <div className="Home">
        <ul>{eventComponents}</ul>
      </div>
    );
  }
}

export default EventListing;
