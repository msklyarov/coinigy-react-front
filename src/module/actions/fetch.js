import axios from 'axios';
import ActionTypes from '../constants/action_types';

export default (url) => ({
  type: ActionTypes.COINIGY_DATA_FETCH.name,
  payload: axios.get(url).then(response => response.data),
});
