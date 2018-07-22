import React from 'react';

import './EventListing.css';

import fbEvents from '../../firebaseRequests/events';

class EventListing extends React.Component {
  state = {
    events: [],
  }
  componentDidMount () {
    fbEvents.getAllEvents()
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
          <h3 className="card-title">{event.homeTeam} vs. {event.awayTeam}</h3>
          <h4 className="card-text">{event.dateTime}</h4>
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
