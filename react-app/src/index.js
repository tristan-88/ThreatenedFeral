import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store'
import sessionActions from './store/session'
import animalActions from './store/animal'
import {getDirections} from './store/map'

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.animalActions = animalActions;
  window.sessionActions = sessionActions;
  window.store = store
  window.dispatch = store.dispatch
  window.getDirections = getDirections
}
//Provider- component passes down global store
//ReactDOM.render - first parameter replaces the what in the second parameter
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
