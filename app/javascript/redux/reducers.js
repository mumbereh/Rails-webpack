import { combineReducers } from 'redux';
import { FETCH_RANDOM_GREETING } from './actions';

const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;
