import axios from 'axios';
import constants from '../constants';

const getSchedule = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/Schedules.json`)
      .then((results) => {
        const schedule = [];
        if (results.data !== null) {
          Object.keys(results.data).forEach((key) => {
            results.data[key].id = key;
            schedule.push(results.data[key]);
          });
        }
        resolve(schedule);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getSchedule;
