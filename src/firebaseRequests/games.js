import axios from 'axios';
import constants from '../constants';

const getAllGames = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/Games.json`)
      .then((results) => {
        const games = [];
        if (results.data !== null) {
          Object.keys(results.data).forEach((key) => {
            results.data[key].id = key;
            games.push(results.data[key]);
          });
        }
        resolve(games);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getAllGames;
