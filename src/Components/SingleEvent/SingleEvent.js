import React from 'react';

import './SingleEvent.css';

class SingleEvent extends React.Component {
  state = {
    showEditForm: false,
    event: {
      details: '',
    },
  };

  // *******CAPTURES NEW USER INPUT WITHIN THE EDIT FORM*****//
  handleInputChange = (e) => {
    const details = e.target.value;
    this.setState({event: {
      ...this.state.event,
      details,
    }});
  }

  // *********SHOW THE EDIT FORM ON BUTTON CLICK*******//
  toggleShowEditForm = () => {
    this.setState({
      showEditForm: !this.state.showEditForm,
      event: {...this.props.event},
    });
  }

  handleSave = () => {
    this.props.handleSaveClickEvent(this.props.event.id, this.state.event)
      .then(() => {
        this.toggleShowEditForm();
      });
  }

  deleteClickEvent = () => {
    this.props.handleDeleteEvent(this.props.event.id);
  }

  render () {
    const {event} = this.props;

    return (
      <div className="col-sm-4 col-med-2" key={event.id}>
        <div className="thumbnail eventThumbnail">
          <div className="caption">
            <h3 className=""><img className="team-logo-events" alt="teamLogo" src={event.aLogo}/> vs. <img className="team-logo-events" alt="teamLogo" src={event.hLogo}/></h3>
            <h3>{event.dateTime}</h3>
            <h4>{event.location}</h4>
            <p>{event.address}</p>
            <p>{event.city}, {event.state}</p>
            <p>{event.details}</p>
            <p><button type="button" className="btn btn-primary" id={event.id} onClick={this.toggleShowEditForm}>Edit Details</button> <button type="button" className="btn btn-danger" onClick={this.deleteClickEvent}>Delete Event</button></p>
          </div>
          <div className={this.state.showEditForm ? '' : 'hide'}>
            <input
              type="text"
              onChange={this.handleInputChange}
              value={this.state.event.details}
              className="form-control"
            />
            <button className="btn btn-default" type="button" onClick={this.handleSave}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleEvent;
