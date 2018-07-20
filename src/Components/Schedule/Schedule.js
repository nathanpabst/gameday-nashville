import React from 'react';

import './Schedule.css';

class Schedule extends React.Component {
  render () {
    return (
      <div className="Schedule">
        <table className="table table-condensed table-bordered table-striped">
          <thead>
            <tr>
              <th>2018 Schedule</th>
            </tr>
          </thead>
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
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Schedule;
