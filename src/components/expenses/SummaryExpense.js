import React from 'react';
import filteredExpense from '../filter/filterLogic';

import { connect } from 'react-redux';
import ExpenseChart from './ExpenseChart';
const SummaryExpense = props => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const firstdate = new Date(year, month, 1);

  // console.log('firstdate',firstdate.getTime()/1000)
  const lastdate = new Date(year, month + 1, 0);
  console.log('lastdateofthismonth', lastdate);
  const monthTotal = props.expenseReducer
    .filter(date => date.createdAt >= firstdate && date.createdAt <= lastdate)
    .map(aamount => aamount.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const total = props.expense
    .map(expenses => {
      return expenses.amount;
    })
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const firstDayPrevMonth = new Date(year, month - 1, 1);
  const lastDayPrevMonth = new Date(year, month, 0);

  const lastMonthTotal = props.expenseReducer
    .filter(
      date =>
        date.createdAt >= firstDayPrevMonth &&
        date.createdAt <= lastDayPrevMonth
    )
    .map(aamount => aamount.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);
  console.log('total lastmonth', lastMonthTotal);
  return (
    <div className="row">
      <div className="summary">
        <div className="summary-card-container">
          <div className="card-item ">
            <h4>
              <i className="fas fa-search" /> You are viewing
            </h4>
            <h1> {props.expense.length} expenses</h1>
          </div>

          <div className="card-item">
            <h4>
              <i className="fas fa-coins fa-2x" />
              Overall Spent
            </h4>

            <h1>${parseFloat(total).toFixed(2)}</h1>
          </div>

          <div className="card-item">
            <h4>
              <i className="fas fa-coins" />
              This Month
            </h4>
            <h1> ${parseFloat(monthTotal).toFixed(2)}</h1>
          </div>

          <div className="card-item">
            <h4>
              <i className="fas fa-coins" /> Last Month
            </h4>
            <h1> ${parseFloat(lastMonthTotal).toFixed(2)}</h1>
          </div>
        </div>
        <div className="summary-chart-container">
          <ExpenseChart />
        </div>
      </div>
    </div>
  );
};
const mapState = state => {
  return {
    expense: filteredExpense(state.expense, state.filters),
    expenseReducer: state.expense
  };
};

export default connect(mapState)(SummaryExpense);
