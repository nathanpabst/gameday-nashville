import React from 'react';
// import {Link} from 'react-router-dom';

import fbEvents from '../../firebaseRequests/events';
import authRequests from '../../firebaseRequests/auth';

import './MyEvents.css';

class MyEvents extends React.Component {
  state = {
    event: {
      details: '',
    },
    events: [],
  }

  componentDidMount () {
    fbEvents
      .getMyEvents(authRequests.getUid())
      .then((events) => {
        this.setState({ events });
      })
      .catch((error) => {
        console.error('error with retrieving events', error);
      });
  }

  deleteClickEvent = (e) => {
    fbEvents
      .deleteMyEvent(e.target.id)
      .then(() => {
        fbEvents
          .getMyEvents(authRequests.getUid())
          .then((events) => {
            this.setState({ events });
          })
          .catch((error) => {
            console.error('error with retrieving events', error);
          });
      })
      .catch(((err) => {
        console.error('error with deleting event', err);
      }));
  }

  handleInputChange = (e) => {
    const details = e.target.value;
    this.setState({event: {
      ...this.state.event,
      details,
    }});
  }

  editClickEvent = (event) => {
    this.setState({event});
  }

  saveClickEvent = () => {
    const eventId = this.state.event.id;
    fbEvents
      .putEvent(eventId, this.state.event)
      .then(() => {

      })
      .catch((err) => {
        console.error('error with updating details', err);
      });
  };

  render () {
    const { events } = this.state;
    const eventComponents = events.map((event) => (
      <div key={event.id} className="row">
        <div className="col-sm-4">
          <div className="thumbnail eventThumbnail">
            <img src="https://media.bizj.us/view/img/3507951/kansas-city-chiefs-mark*750xx681-384-192-110.jpg" alt="team-logo" />
            <div className="caption">
              <h3>{event.dateTime}</h3>
              <h4>{event.homeTeam} vs. {event.awayTeam}</h4>
              <p>{event.location}</p>
              <p>{event.address}</p>
              <p>{event.city}, {event.state}</p>
              <p>{event.details}</p>
              <p><button type="button" className="btn btn-primary" id={event.id} onClick={() => this.editClickEvent(event)}>Edit Details</button> <button type="button" className="btn btn-danger" id={event.id} onClick={this.deleteClickEvent}>Delete Event</button></p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 editBox">
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.event.details}
            className="form-control"
          />
          <button className="btn btn-default" type="button" onClick={this.saveClickEvent}>Save</button>
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
