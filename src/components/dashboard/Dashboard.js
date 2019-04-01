import React, { Component } from 'react';
import ExpenseList from '../expenses/ExpenseList';
import SummaryExpense from '../expenses/SummaryExpense';
import ExpenseFilters from '../expenses/ExpenseFilters';
import { connect } from "react-redux";
import { getExpense } from "../../store/actions/expensesActions";
import filteredExpense from "../filter/filterLogic";
import { dispatch } from 'rxjs/internal/observable/range';
import ExpenseChart from '../expenses/ExpenseChart';

class Dashboard extends Component {

  render() {
    console.log('this.props.expense:', this.props.expensee)

    return (
      <div>
        <ExpenseFilters />
        <SummaryExpense />
        <ExpenseChart />
        <ExpenseList />

      </div>
    )
  }
}

export default Dashboard;
