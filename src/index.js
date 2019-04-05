import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import { getExpense } from './store/actions/expensesActions';
import firebase from './config/fbConfig'
import { Login, Logout } from './store/actions/authActions';

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
  // compose(
  composeEnhencers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {

    ReactDOM.render(<Provider store={store} ><App /></Provider>,
      document.getElementById('root'));
    hasRendered = true
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(Login(user.uid));
    console.log('log in uid:', user.uid)

    store.dispatch(getExpense()).then(() => {
      renderApp()


    })
  } else {
    // store.dispatch(Logout());
    renderApp()
    console.log('log out')
  }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
