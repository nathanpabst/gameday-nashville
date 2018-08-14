import axios from 'axios';
import constants from '../constants';

const postNewBug = (newBug) => {
  return axios
    .post(`${constants.firebaseConfig.databaseURL}/Bugs.json`, newBug);
};

export default { postNewBug };
