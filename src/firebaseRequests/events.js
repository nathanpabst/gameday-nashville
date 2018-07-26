import axios from 'axios';
import constants from '../constants';

import authRequests from '../firebaseRequests/auth';

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
  const newPost = {...newEvent, ...gameDeets};
  newPost.uid = authRequests.getUid();
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/Events.json`, newPost)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getMyEvents = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/Events.json?orderBy="uid"&equalTo="${uid}"`)
      .then(res => {
        const events = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            events.push(res.data[fbKey]);
          });
        }
        resolve(events);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const deleteMyEvent = (eventId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${constants.firebaseConfig.databaseURL}/Events/${eventId}.json`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const putEvent = (eventId, updateEvent) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${constants.firebaseConfig.databaseURL}/Events/${eventId}.json`, updateEvent)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default { getAllEvents, postEvent, getMyEvents, deleteMyEvent, putEvent };
