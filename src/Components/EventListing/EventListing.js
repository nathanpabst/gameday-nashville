import React from 'react';

import './EventListing.css';

import fbEvents from '../../firebaseRequests/events';

class EventListing extends React.Component {
  state = {
    events: [],
  }

  // ********GET REQUEST TO FIREBASE FOR ALL AVAILABLE EVENTS****//
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
          <div className="card-body col-sm-3">
            <h2 className="card-background">Team<img className="selectedTeamLogo" src={event.selectedTeamLogo} alt="rooting for logo here"/>Event</h2>
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
        <div className="jumbotron">
          <h1>Welcome to Gameday Nashville!</h1>
          <p>Cheer like a local, wherever you are.</p>
          <p><a className="btn btn-primary btn-lg" href="/register" role="button">Sign Up</a></p>
        </div>
        <h2 className="header">Nearby watch parties</h2>
        <div className="eventCards">{eventComponents}</div>
      </div>
    );
  }
}

export default EventListing;
