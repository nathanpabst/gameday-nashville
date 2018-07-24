import axios from 'axios';
import constants from '../constants';

const getAllEvents = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/Events.json`)
      .then((results) => {
        const events = [];
        if (results.data !== null) {
          Object.keys(results.data).forEach((key) => {
            results.data[key].id = key;
            events.push(results.data[key]);
          });
        }
        resolve(events);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const postEvent = (newEvent, gameDeets) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/Events.json`, {...newEvent, ...gameDeets})
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });

};

export default { getAllEvents, postEvent };
