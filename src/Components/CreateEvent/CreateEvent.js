import React from 'react';

import './CreateEvent.css';
import EventForm from '../EventForm/EventForm';
import Games from '../Games/Games';

class CreateEvent extends React.Component {
    state = {showEventForm: false};
    toggleShowEventForm () {
      this.setState({showEventForm: !this.state.showEventForm});
      console.error('from CE', !this.state.showEventForm);
    }
    render () {
      return (
        <div className="CreateEvent">
          <div className="col-sm-6">
            <Games
              toggleShowEventForm = {this.toggleShowEventForm.bind(this)}
            />
          </div>
          <div className="col-sm-6">
            <EventForm
              showEventForm = {this.state.showEventForm}

            />
          </div>
        </div>
      );
    }
}

export default CreateEvent;
