import React from 'react';

import './EventListing.css';

import fbEvents from '../../firebaseRequests/events';
import fbGames from '../../firebaseRequests/games';

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
    fbGames.getAllGames()
      .then((games) => {
        this.setState({games});
      })
      .catch((error) => {
        console.error('error retrieving games', error);
      });
  }
  render () {
    const {events} = this.state;
    const eventComponents = events.map((event) => {
      const game = this.state.games.find(x => x.id === event.gameId);
      if (game) {
        return (
          <div key={event.id} className="card">
            <div className="card-body">
              <h3 className="card-title"><img className="team-logo-home" alt="teamLogo" src={game.aLogo}/> vs. <img className="team-logo-home" alt="teamLogo" src={game.hLogo}/></h3>
              <h4 className="card-text">{event.dateTime}</h4>
              <p className="card-text">{event.location}</p>
              <p className="card-text">{event.address}</p>
              <p className="card-text">{event.city}, {event.state}</p>
              <p className="card-text">{event.details}</p>
            </div>
          </div>
        );
      }
      return '';
    });
    return (
      <div className="Home">
        <div className="eventCards">{eventComponents}</div>
      </div>
    );
  }
}

export default EventListing;
