import React from 'react';

import './Games.css';

import getAllGames from '../../firebaseRequests/games';

class Games extends React.Component {
    state = {
      games: [],
      event: {},
      // toggleShowEventForm: this.props.toggleShowEventForm,
    };

  selectedEvent = (game) => {
    const {toggleShowEventForm, updateGameDeets} = this.props;
    this.setState({ event: { ...game } });
    updateGameDeets(game);
    toggleShowEventForm();
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
      <div key={game.id}>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
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
        <div class="panel panel-primary">
          <div class="panel-heading">2018 Schedule</div>
          <div class="panel-body">
            <ul className="gameComp">{gameComponents}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
