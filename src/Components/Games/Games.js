import React from 'react';

import './Games.css';

import getAllGames from '../../firebaseRequests/games';

class Games extends React.Component {
    state = {
      games: [],
      event: {},
      originalGames: [],
    };

  selectedEvent = (game) => {
    const {toggleShowEventForm, updateGameDeets} = this.props;
    this.setState({ event: { ...game } });
    updateGameDeets(game);
    toggleShowEventForm();
  }

  componentDidMount () {
    const keepers = [];
    getAllGames()
      .then((games) => {
        this.setState({ originalGames: games });
        const copyOfOriginal = [...games];
        copyOfOriginal.forEach((game) => {
          const foundGame = keepers.find((keepGame) => {
            return keepGame.uniqueGameKey === game.uniqueGameKey;
          });
          if (foundGame === undefined) {
            keepers.push(game);
          }
        });
        this.setState({ games: keepers });

      })
      .catch((error) => {
        console.error('error with games GET request', error);
      });
  }

  componentWillReceiveProps () {
    const searchInput = this.props.searchTerm;
    const games = [...this.state.originalGames];
    const filterGames = games.filter(game => game.homeTeam.toLowerCase().includes(searchInput.toLowerCase()));
    this.setState({games: filterGames});
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
        <div className="panel panel-primary">
          <div className="panel-heading">2018 Schedule</div>
          <div className="panel-body">
            <ul className="gameComp">{gameComponents}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
