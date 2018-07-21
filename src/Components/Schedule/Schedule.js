import React from 'react';

import './Schedule.css';

import getSchedule from '../../firebaseRequests/schedule';

class Schedule extends React.Component {
  state = {
    schedules: [],
  }
  componentDidMount () {
    getSchedule()
      .then((schedules) => {
        this.setState({schedules});
      })
      .catch((error) => {
        console.error('error with schedule GET request', error);
      });
  }
  render () {
    const {schedules} = this.state;
    const scheduleComponents = schedules.map((schedule) => (
      <div key={schedule.id}className="panel panel-default">
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
