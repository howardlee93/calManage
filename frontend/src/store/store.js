import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import rootReducer from '../reducers/root_reducer';



const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,

    composeEnhancers(applyMiddleware(thunk, logger))
  )
);

export default configureStore;
