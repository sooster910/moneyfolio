import React, { Component } from "react";
import ExpenseListItem from "./ExpenseListItem";
import { connect } from "react-redux";
import { getExpense } from "../../store/actions/expensesActions";
import Spinner from "../layout/Spinner";
import filteredExpense from "../filter/filterLogic";
class ExpenseList extends Component {
  render() {
    if (this.props.expense) {
      return (
        <div>
          <h1>All {this.props.expense.length} expenses </h1>
          <h1> All Expenses: Your total is :</h1>

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
const mapDispatch = dispatch => {
  dispatch(getExpense());
  return {};
};
export default connect(
  mapState,
  mapDispatch
)(ExpenseList);
