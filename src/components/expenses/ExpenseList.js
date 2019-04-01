import React, { Component } from "react";
import ExpenseListItem from "./ExpenseListItem";
import SummaryExpense from "./SummaryExpense";
import { connect } from "react-redux";
import { getExpense } from "../../store/actions/expensesActions";
import Spinner from "../layout/Spinner";
import filteredExpense from "../filter/filterLogic";


class ExpenseList extends Component {

  render() {
    
    if (this.props.expense) {
      return (
        <div>
            {this.props.expense &&
            this.props.expense.map(eachExpense => {
              return (
                <ExpenseListItem key={eachExpense.id} expense={eachExpense} />
              );
            })}
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

const mapState = state => ({
  expense: filteredExpense(state.expense, state.filters)
});

export default connect(mapState)(ExpenseList);
