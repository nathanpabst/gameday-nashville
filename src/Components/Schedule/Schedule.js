import React from 'react';

import './Schedule.css';

class Schedule extends React.Component {
  render () {
    return (
      <div className="panel panel-defaul">
        <div className="panel-heading Schedule">2018 Schedule</div>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <td>WK</td>
              <td>DATE</td>
              <td>OPPONENT</td>
              <td>TIME</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Sun, Sep 16</td>
              <td>Los Angeles</td>
              <td>3:05 PM</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sun, Sep 23</td>
              <td>San Francisco</td>
              <td>12:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Schedule;
