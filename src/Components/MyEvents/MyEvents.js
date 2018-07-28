import React from 'react';
// import {Link} from 'react-router-dom';

import fbEvents from '../../firebaseRequests/events';
import authRequests from '../../firebaseRequests/auth';
import SingleEvent from '../SingleEvent/SingleEvent';

import './MyEvents.css';

class MyEvents extends React.Component {
  state = {
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

  deleteClickEvent = (id) => {
    fbEvents
      .deleteMyEvent(id)
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

  saveClickEvent = (id, event) => {
    return fbEvents
      .putEvent(id, event)
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
      .catch((err) => {
        console.error('error with updating details', err);
      });
  };

  render () {
    const { events } = this.state;
    const eventComponents = events.map((event) =>
      <SingleEvent
        key={event.id}
        event={event}
        handleSaveClickEvent={this.saveClickEvent}
        handleDeleteEvent={this.deleteClickEvent}
      />
    );

    return (
      <div className="MyEvents">
        <header className="top">
          <h1>
            My Hosted Events
          </h1>
          <div className="row">
            {eventComponents}
          </div >
        </header>
      </div>
    );
  }
}

export default MyEvents;
