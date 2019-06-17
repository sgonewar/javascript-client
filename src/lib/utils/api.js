/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-unused-state */
import axios from 'axios';
import { configenv } from '../../configs/environment';

const url = (configenv.REACT_APP_URL + configenv.REACT_APP_FETCH_URL);
const loginUrl = (configenv.REACT_APP_URL + configenv.REACT_APP_LOGIN_URL);
const postUrl = (configenv.REACT_APP_URL + configenv.REACT_APP_FETCH_URL);
const callApi = async userDetails => await axios.post(
  configenv.REACT_APP_URL
  + configenv.REACT_APP_LOGIN_URL,
  userDetails,
);

export const getApi = async getTraineeData => await axios.get(url, {
  method: getTraineeData.method,
  headers: { Authorization: getTraineeData.token },
  params: { skip: getTraineeData.skip, limit: getTraineeData.limit },
})
  // eslint-disable-next-line no-sequences
  .then(response => response)
  .catch(err => err);

export const postApi = async (token, postTraineeData) => await axios.post(url, {
  method: 'post',
  ...postTraineeData,
}, { headers: { Authorization: token } })
  .then(response => response)
  .catch(err => err);

// const callApi = async (method, url, data) => {
//   return await axios({
//     method,
//     url,
//     data,
//   });
// }

export default callApi;