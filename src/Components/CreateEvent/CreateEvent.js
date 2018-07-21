import React from 'react';

import './CreateEvent.css';
import EventForm from '../EventForm/EventForm';
import Games from '../Games/Games';

class CreateEvent extends React.Component {
  render () {
    return (
      <div className="CreateEvent">
        <div className="col-sm-6">
          <Games

          />
        </div>
        <div className="col-sm-6">
          <EventForm

          />
        </div>
      </div>
    );
  }
}

export default CreateEvent;
