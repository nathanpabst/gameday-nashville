import React from 'react';
// import {Link} from 'react-router-dom';

import fbEvents from '../../firebaseRequests/events';
import authRequests from '../../firebaseRequests/auth';

import './MyEvents.css';

class MyEvents extends React.Component {
  state = {
    events: [],
  }
  componentDidMount () {
    fbEvents
      .getMyEvents(authRequests.getUid())
      .then((events) => {
        this.setState({events});
      })
      .catch((error) => {
        console.error('error with retrieving events', error);
      });
  }
  render () {
    const {events} = this.state;
    const eventComponents = events.map((event) => (
      <div key={event.id} className="card col-sm-4">
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
      <div className="MyEvents">
        <header className="top">
          <h1>
            My Hosted Events
          </h1>
          <ul>
            {eventComponents}
          </ul>
        </header>
      </div>
    );
  }
}

export default MyEvents;
