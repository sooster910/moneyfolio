import React, { Component } from 'react';
import 'react-dates/initialize';
import { connect } from 'react-redux'
import { addExpense } from '../../store/actions/expensesActions'
import ExpenseForm from './ExpenseForm'
import { Redirect, Link } from 'react-router-dom'

class AddExpense extends Component {
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-3  ">
                        <Link to="/dashboard" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left" /> Back To Dashboard
                    </Link>
                    </div>
                </div>
                <div className="card mx-5">
                    <div className="card-header">
                        Add Expense
                </div>

                    <div className="card-body mt-3">
                        <ExpenseForm onSubmit={(expense) => {
                            this.props.addExpense(expense)
                            this.props.history.push('/dashboard');
                        }} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('auth state:', state)
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddExpense)