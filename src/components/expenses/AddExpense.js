import React, { Component } from 'react';
import 'react-dates/initialize';
import { connect } from 'react-redux'
import { addExpense} from '../../store/actions/expensesActions'
import ExpenseForm from './ExpenseForm'

class AddExpense extends Component {

    render() {
        return (
            <div>
               <ExpenseForm onSubmit={(expense)=>{
                   this.props.addExpense(expense)
                    this.props.history.push('/');
             
                   
               }} />               
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense)),
    }
}
export default connect(null, mapDispatchToProps)(AddExpense)