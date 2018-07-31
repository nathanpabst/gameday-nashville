import React from 'react';

import './EventListing.css';

import fbEvents from '../../firebaseRequests/events';

class EventListing extends React.Component {
  state = {
    events: [],
    games: [],
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
    const eventComponents = events.map((event) => {
      return (
        <div key={event.id} className="card">
          <div className="card-body">
            <h3 className="card-title"><img className="team-logo-home" alt="teamLogo" src={event.aLogo}/> vs. <img className="team-logo-home" alt="teamLogo" src={event.hLogo}/></h3>
            <h4 className="card-text">{event.dateTime}</h4>
            <p className="card-text">{event.location}</p>
            <p className="card-text">{event.address}</p>
            <p className="card-text">{event.city}, {event.state}</p>
            <p className="card-text">{event.details}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="Home">
        <div className="eventCards">{eventComponents}</div>
      </div>
    );
  }
}

export default EventListing;
