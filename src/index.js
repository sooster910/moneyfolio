import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
//try filter
import {setTextFilter,setStartDate} from './store/actions/filtersActions';
import filterLogic from './components/filter/filterLogic';
import{addExpense} from './store/actions/expensesActions';
import{getExpense} from './store/actions/expensesActions';

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(rootReducer,
 // compose(
  composeEnhencers(
 applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);


 //store.dispatch(addExpense({ description: 'water bill', amount: 100, createdAt:1000 }));
 //store.dispatch(addExpense({ description: 'gas bill', amount: 300, createdAt:1000}));
 //store.dispatch(setTextFilter('gas'));
// const state=store.getState();
// console.log('store.getState',state);
// const visibleExpenses = filterLogic(state.firestore.ordered.expenses, state.filters)
//console.log('visible Expense:',visibleExpenses);

//  store.dispatch(setStartDate(100));


//  store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpense = filterLogic(state.expenses , state.filters)
//   console.log('visible Expense:', visibleExpense);
// });


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
