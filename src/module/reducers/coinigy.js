import ActionTypes from '../constants/action_types';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.COINIGY_DATA_FETCH.FULFILLED:
      return action.payload;
    case ActionTypes.COINIGY_DATA_CLEAR:
      return {};
    default:
      return state;
  }
};
