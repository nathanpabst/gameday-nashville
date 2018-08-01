import React from 'react';

import fbEvents from '../../firebaseRequests/events';

import EventForm from '../EventForm/EventForm';
import Games from '../Games/Games';
import Search from '../Search/Search';

import './CreateEvent.css';

class CreateEvent extends React.Component {
    state = {
      showEventForm: false,
      gameDeets: {},
      events: {},
      searchTerm: '',
    };

    // ********SHOW/HIDE THE EVENT FORM WHEN CREATE EVENT BTN IS CLICKED
    toggleShowEventForm = () => {
      this.setState({showEventForm: !this.state.showEventForm});
    }

    // *********TAKES FORM INPUT AND POSTS NEW EVENT TO FIREBASE
    formSubmitEvent = (newEvent) => {
      const {gameDeets} = this.state;
      fbEvents.postEvent(newEvent, gameDeets)
        .then(() => {
          fbEvents.getAllEvents()
            .then((events) => {
              this.setState({events});
              this.props.history.push('/myEvents');
            });
        })
        .catch((error) => {
          console.error('error in posting new event', error);
        });
    }

    // ******GRABS SEARCH INPUT FROM GAMES & SETS STATE*****//
    updateSearchInput = (searchTerm) => {
      this.setState({searchTerm});
    }

    // ******GRABS GAMEDEETS FROM EVENT FORM & SETS STATE*****//
    updateGameDeets = gameDeets => this.setState({gameDeets})

    render () {
      return (
        <div className="CreateEvent">
          <Search
            onSearch = {this.updateSearchInput}
            searchTerm = {this.state.searchTerm}
          />
          <div className="col-sm-6">
            <Games
              toggleShowEventForm = {this.toggleShowEventForm}
              updateGameDeets = {this.updateGameDeets}
              searchTerm = {this.state.searchTerm}
            />
          </div>
          <div className="col-sm-6">
            <EventForm
              showEventForm = {this.state.showEventForm}
              onSubmit={this.formSubmitEvent}
              gameDeets = {this.state.gameDeets}

            />
          </div>
        </div>
      );
    }
}

export default CreateEvent;
