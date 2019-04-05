import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../../store/actions/expensesActions';
import ExpenseForm from './ExpenseForm';
import {Redirect} from 'react-router-dom'


class EditExpense extends Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.matchingExpense.id, expense);
        this.props.history.push('/dashboard');
    }
    handleRemove=()=>{
        this.props.removeExpense({ id: this.props.matchingExpense.id });
        this.props.history.push('/dashboard');
    }
   
    render(){
        const {auth} = this.props;
        if(!auth.uid) return<Redirect to='/'/>
       console.log('current auth id Editexpense:', this.props.auth)
        return (
        <div>
            <h3>Editing the expense with id of {this.props.match.params.id}</h3>
            <ExpenseForm
                matchingExpense={this.props.matchingExpense}
                onSubmit={this.onSubmit} />
             <button onClick={this.handleRemove} className="btn btn-danger" >Remove</button> 
        </div>
        );
    }

}
const mapStateToProps = (state, props) => {
    return {
        auth: state.auth,   
        matchingExpense: state.expense.find((eachExpense) => {
            console.log('mapstate:', eachExpense.id)
            console.log('mapstate:', eachExpense)
            return eachExpense.id === props.match.params.id
      
        })
    }
}
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (expense)=>dispatch(removeExpense(expense))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
