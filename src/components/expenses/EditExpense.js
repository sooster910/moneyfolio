import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../../store/actions/expensesActions';
import ExpenseForm from './ExpenseForm';


class EditExpense extends Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.matchingExpense.id, expense);
        this.props.history.push('/');
    }
    render(){
        return (
        <div>
            <h3>Editing the expense with id of {this.props.match.params.id}</h3>
            <ExpenseForm
                matchingExpense={this.props.matchingExpense}
                onSubmit={this.onSubmit} />
        </div>
        );
    }

}
const mapStateToProps = (state, props) => {
    return {
        matchingExpense: state.expense.find((eachExpense) => {
            console.log('mapstate:', eachExpense.id)
            console.log('mapstate:', eachExpense)
            return eachExpense.id === props.match.params.id
        })
    }
}
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
