import React, { Component } from 'react';
import 'react-dates/initialize';
import { connect } from 'react-redux'
import { addExpense } from '../../store/actions/expensesActions'
import ExpenseForm from './ExpenseForm'
import { Redirect } from 'react-router-dom'
class AddExpense extends Component {
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div>
                <ExpenseForm onSubmit={(expense) => {
                    this.props.addExpense(expense)
                    this.props.history.push('/dashboard');
                }} />
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