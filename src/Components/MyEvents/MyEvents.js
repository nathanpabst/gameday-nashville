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

  deleteClickEvent = () => {
    const firebaseId = this.props.match.params.id;
    console.error('from MyEvents', firebaseId);

    fbEvents
      .deleteMyEvent(firebaseId)
      .then(() => {
        this.props.history.push('/myEvents');
      })
      .catch(((err) => {
        console.error('error with deleting event', err);
      }));
  }

  render () {
    const {events} = this.state;
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
              <p><button type="button" className="btn btn-primary">Edit</button> <button type="button" className="btn btn-default" onClick={this.deleteClickEvent}>Delete</button></p>
            </div>
          </div>
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
