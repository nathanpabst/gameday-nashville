import React from 'react';

import fbEvents from '../../firebaseRequests/events';

import EventForm from '../EventForm/EventForm';
import Games from '../Games/Games';

import './CreateEvent.css';

class CreateEvent extends React.Component {
    state = {
      showEventForm: false,
      gameDeets: {},
      events: {},
    };

    toggleShowEventForm = () => {
      this.setState({showEventForm: !this.state.showEventForm});
    }

    formSubmitEvent = (newEvent, gameData) => {
      console.error('from CE', newEvent);
      const {gameDeets} = this.state;
      // const {saveNewEvent} = this.setState;
      console.error({gameDeets});
      // console.error({saveNewEvent});
      fbEvents.postEvent(newEvent, gameDeets)
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
              onSubmit={this.formSubmitEvent}

            />
          </div>
        </div>
      );
    }
}

export default CreateEvent;
