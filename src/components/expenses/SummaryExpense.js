import React from 'react';
import {connect} from 'react-redux';
import { addExpense,getExpense } from '../../store/actions/expensesActions'





const SummaryExpense=(props)=>{
   
   return(<div>
       <h1>All  {props.expense.length} expenses </h1>
       <h1> All Expenses: Your total is :</h1> 
       {props.expense.map(eachExpense => <li key={eachExpense.id}> {eachExpense.description} {eachExpense.amount}</li>)}  


    </div>)
}
  const mapState = state => ({
    expense: state.expense
    })
   const mapDispatch = dispatch => {
    dispatch(getExpense())
    return {
    }
   }
   export default connect(mapState, mapDispatch)(SummaryExpense);