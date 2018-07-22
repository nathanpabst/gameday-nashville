import React from 'react';

import './CreateEvent.css';
import EventForm from '../EventForm/EventForm';
import Games from '../Games/Games';

class CreateEvent extends React.Component {
    state = {
      showEventForm: false,
      gameDeets: {},
      saveNewEvent: {},
    };
    toggleShowEventForm = () => {
      this.setState({showEventForm: !this.state.showEventForm});
    }
    onFormSubmit = (newEvent) => {
      const {gameDeets} = this.state;
      const {saveNewEvent} = this.state;
      console.error({gameDeets});
    }

    updateGameDeets = gameDeets => this.setState({gameDeets})
    render () {
      return (
        <div className="CreateEvent">
          <div className="col-sm-6">
            <Games
              toggleShowEventForm = {this.toggleShowEventForm}
              updateGameDeets = {this.updateGameDeets}
            />
          </div>
          <div className="col-sm-6">
            <EventForm
              showEventForm = {this.state.showEventForm}
              onFormSubmit={this.onFormSubmit}
              saveNewEvent={this.state.saveNewEvent}

            />
          </div>
        </div>
      );
    }
}

export default CreateEvent;
