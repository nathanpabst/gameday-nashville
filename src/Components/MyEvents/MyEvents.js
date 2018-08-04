import React from 'react';

import fbEvents from '../../firebaseRequests/events';
import authRequests from '../../firebaseRequests/auth';
import SingleEvent from '../SingleEvent/SingleEvent';

import './MyEvents.css';

class MyEvents extends React.Component {
  state = {
    events: [],
  }

  refreshEvents = () => fbEvents
    .getMyEvents(authRequests.getUid())
    .then((events) => {
      this.setState({ events });
    })
    .catch((error) => {
      console.error('error with retrieving events', error);
    });

  componentDidMount () {
    this.refreshEvents();
  }

  deleteClickEvent = (id) => fbEvents
    .deleteMyEvent(id)
    .then(this.refreshEvents)
    .catch(((err) => {
      console.error('error with deleting event', err);
    }));

  saveClickEvent = (id, event) => fbEvents
    .putEvent(id, event)
    .then(this.refreshEvents)
    .catch((err) => {
      console.error('error with updating details', err);
    });

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
        <header className="header">
          <h2>
            My events
          </h2>
          <div className="row">
            {eventComponents}
          </div >
        </header>
      </div>
    );
  }
}

export default MyEvents;
