import React, { Component } from "react";
import { connect } from "react-redux";
import {
  editExpense,
  removeExpense
} from "../../store/actions/expensesActions";
import ExpenseForm from "./ExpenseForm";
import { Redirect, Link } from "react-router-dom";

class EditExpense extends Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.matchingExpense.id, expense);
    this.props.history.push("/dashboard");
  };
  handleRemove = () => {
    this.props.removeExpense({ id: this.props.matchingExpense.id });
    this.props.history.push("/dashboard");
  };

  render() {
    console.log("expense id :", this.props.match.params.id);
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    console.log("current auth id Editexpense:", this.props.auth);
    return (
      <section className="edit-expense">
        <div className="row">
          <div className="expense-header">
            <Link to="/dashboard" className="link-back link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
            <button onClick={this.handleRemove} className="remove-btn">
              Remove
            </button>
          </div>
          <h1 className="lg-heading u-center-text mb-sm">Edit Expense</h1>

          <div className="expense-body">
            <ExpenseForm
              matchingExpense={this.props.matchingExpense}
              onSubmit={this.onSubmit}
            />
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state, props) => ({
  matchingExpense: state.expense.find(
    eachExpense =>
      // console.log('mapstate:', eachExpense.id)
      // console.log('mapstate:', eachExpense)
      eachExpense.id === props.match.params.id
  ),
  auth: state.auth
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: expense => dispatch(removeExpense(expense))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpense);
