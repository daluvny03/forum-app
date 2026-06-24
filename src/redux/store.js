import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const dummyReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dummy: dummyReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;