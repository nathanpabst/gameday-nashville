import React from 'react';
import { Carousel } from 'react-bootstrap';

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
        <Carousel.Item key={event.id} className="card">
          <h2 className="card-background">Team<img className="selectedTeamLogo" src={event.selectedTeamLogo} alt="rooting for logo here"/>Event</h2>
          <Carousel.Caption className="card-body">
            <h3 className="card-title">{event.homeTeam} vs. {event.awayTeam}</h3>
            <h4 className="card-text">{event.dateTime}</h4>
            <h5 className="card-text">{event.location}</h5>
            <p className="card-text">{event.address} {event.city}, {event.state}</p>
            <p className="card-text">{event.city}, {event.state}</p>
            <p className="card-text">{event.details}</p>
          </Carousel.Caption>
        </Carousel.Item>
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
        <Carousel className="eventCards">{eventComponents}</Carousel>
      </div>
    );
  }
}

export default EventListing;
