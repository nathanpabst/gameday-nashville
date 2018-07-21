import React from 'react';

import './Schedule.css';

import getSchedule from '../../firebaseRequests/schedule';

class Schedule extends React.Component {
  state = {
    schedule: [],
  }
  componentDidMount () {
    getSchedule()
      .then((schedule) => {
        this.setState({schedule});
      })
      .catch((error) => {
        this.setState({schedule: []});
      });
  }
  render () {
    const {schedule} = this.state;
    const scheduleComponents = schedule.map((schedule) => (
      <div key={schedule.id}className="panel panel-defaul">
        <div className="panel-heading Schedule">{schedule.name} 2018 Schedule</div>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <td>{schedule.weeks}</td>
              <td>{schedule.dates}</td>
              <td><img className="logo" src={schedule.logos} alt="logo" /> {schedule.opponents}</td>
              <td>{schedule.times}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
    return (
      <div className="Schedule">
        <ul>{scheduleComponents}</ul>
      </div>
    );
  }
}

export default Schedule;
