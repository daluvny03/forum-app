import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import authUser from './auth/reducer';
import users from './users/reducer';
import threads from './threads/reducer';
import threadDetail from './threadDetail/reducer';
import leaderboards from './leaderboard/reducer';
import isPreload from './loading/reducer';
import { thunk } from 'redux-thunk';

const rootReducer =
  combineReducers({
    authUser,
    users,
    threads,
    threadDetail,
    leaderboards,
    isPreload,
  });

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;