import axios from 'axios';
import ActionTypes from '../constants/action_types';

export default () => ({
  type: ActionTypes.COINIGY_DATA_FETCH.name,
  payload: axios.get('https://young-stream-93294.herokuapp.com/').then(response => response.data),
});
