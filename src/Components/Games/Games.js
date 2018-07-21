import React from 'react';

import './Games.css';

import getAllGames from '../../firebaseRequests/games';

class Games extends React.Component {
    state = {
      games: [],
      event: {},
      toggleShowEventForm: this.props.toggleShowEventForm,
    };

  selectedEvent = (game) => {
    this.setState({ event: { ...game } });
    this.state.toggleShowEventForm();
  }

  componentDidMount () {
    getAllGames()
      .then((games) => {
        this.setState({ games });
      })
      .catch((error) => {
        console.error('error with games GET request', error);
      });
  }

  render () {
    const { games } = this.state;
    const gameComponents = games.map((game) => (
      <div key={game.id} className="panel panel-default">
        <div className="panel-heading Games">2018 Schedule</div>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <td>{game.weekNum}</td>
              <td>{game.dateTime}</td>
              <td>{game.homeTeam}</td>
              <td>{game.awayTeam}</td>
              <td>
                <button className="btn btn-primary" onClick={() => this.selectedEvent(game)}>
                  Create Event
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
    return (
      <div className="Games">
        <ul>{gameComponents}</ul>
      </div>
    );
  }
}

export default Games;
