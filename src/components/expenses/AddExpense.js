import React, { Component } from "react";
import "react-dates/initialize";
import { connect } from "react-redux";
import { addExpense } from "../../store/actions/expensesActions";
import ExpenseForm from "./ExpenseForm";
import { Redirect, Link } from "react-router-dom";

class AddExpense extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <section className="add-expense">
        <div className="row">
          <div className="expense-header">
            <Link to="/dashboard" className="link-back link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
          <h1 className="lg-heading u-center-text mb-sm">Add Expense</h1>

          <div className="expense-body">
            <ExpenseForm
              onSubmit={expense => {
                this.props.addExpense(expense);
                this.props.history.push("/dashboard");
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  console.log("auth state:", state);
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => dispatch(addExpense(expense))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExpense);
