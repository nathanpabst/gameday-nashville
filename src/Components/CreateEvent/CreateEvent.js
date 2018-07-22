import React from 'react';

import fbEvents from '../../firebaseRequests/events';

import EventForm from '../EventForm/EventForm';
import Games from '../Games/Games';

import './CreateEvent.css';

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
      console.error({saveNewEvent});
      fbEvents.postEvent(newEvent)
        .then(() => {
          fbEvents.getAllEvents()
            .then((events) => {
              this.setState({events});
            });
        })
        .catch((error) => {
          console.error('error in posting new event', error);
        });
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
              // saveNewEvent={this.state.saveNewEvent}
              onSubmit={this.onFormSubmit}

            />
          </div>
        </div>
      );
    }
}

export default CreateEvent;
