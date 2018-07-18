import React from 'react';

import './EventListing.css';

class EventListing extends React.Component {
  state = {
    events: = [],

  }
  render () {
    const { events } = this.props;
    const eventItemComponents = events.map((event) => {
      return (
        <div className="card col-sm-4">
          <div className="card-body">
            <h3 className="card-title">{event.teamOne} vs. {event.teamTwo}</h3>
            <p className="card-text">{event.location}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="Home">
        <ul>{eventItemComponents}</ul>
      </div>
    );
  }
}

export default EventListing;