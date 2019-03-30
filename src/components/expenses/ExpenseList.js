import React, { Component } from "react";
import ExpenseListItem from "./ExpenseListItem";
import SummaryExpense from "./SummaryExpense";
import { connect } from "react-redux";
import { getExpense } from "../../store/actions/expensesActions";
import Spinner from "../layout/Spinner";
import filteredExpense from "../filter/filterLogic";
class ExpenseList extends Component {

  
  render() {
    
    if (this.props.expenses) {
      return (
        <div>
{/* 
          <SummaryExpense expense={this.props.expenses}/> */}
            {this.props.expenses &&
            this.props.expenses.map(eachExpense => {
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

// const mapState = state => ({
//   expense: filteredExpense(state.expense, state.filters)
// });
// const mapDispatch = dispatch => {
//   dispatch(getExpense());
//   return {};
// };
// export default connect(
  // mapState,
//   mapDispatch
 //)(ExpenseList);
export default ExpenseList;