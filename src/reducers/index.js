import { combineReducers } from 'redux';

// reducers
import authReducer from './reducer_auth.js';

const rootReducer = combineReducers({
  authenticated: authReducer
});

export default rootReducer;
