import { combineReducers } from 'redux';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...action.data,
      }
    case 'LOGOUT':
      return {};

    default:
      return state;
  }
}

const NEHSApp = combineReducers({
  user: userReducer,
});

export default NEHSApp;
