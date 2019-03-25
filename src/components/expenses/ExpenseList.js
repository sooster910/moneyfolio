import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect} from 'react-redux';
import { getExpense } from '../../store/actions/expensesActions'
import{firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import Spinner from '../layout/Spinner';
import filteredExpense from '../filter/filterLogic';
const ExpenseList = (props) => {
   // console.log('expenseList props:', props.expenses.length[1]);
    //console.log('props.expenses.description',props.fbExpenses.description);
    //  if(props.expense){
    return (
        
       <div>
       {/* <h1>You are viewing {props.expenses.length}</h1>
       
                   {props.expenses && props.expenses.map((expense) => {
               // console.log('map expense:',expense);
                //console.log('id:', expense.id);
                return (   
             <ExpenseListItem key={expense.id} 
                              expense={expense}/>
             
                )
            })}    */}
            <h1>All  {props.expense.length} expenses </h1>
       <h1> All Expenses: Your total is :</h1> 
       {props.expense&&props.expense.map((eachExpense) => {
           return <ExpenseListItem key={eachExpense.id} expense={eachExpense}/>})}  
            </div> 
       
    ); 
// // }else{return <Spinner/> }
 }
// //where expenses coming from is reducer name and then initstate name expenses 

const mapState = state => ({
    expense: filteredExpense(state.expense, state.filters)
    })
   const mapDispatch = dispatch => {
    dispatch(getExpense())
    return {
 
    }
   }
   export default connect(mapState, mapDispatch)(ExpenseList);

// const mapStateToProps=(state)=>{
//     console.log('state.expense:', state.TestExpenses );
//     console.log('state:',state);
//     console.log('state.firestore:',state.firestore);

//     return {
//       Testexpenses:state.expense,
//       expenses:state.firestore.ordered.expenses,
//       //filters: state.filters
//      };
 //};
//export default connect(mapStateToProps)(Dashboard)
// export default compose(
//    connect(mapStateToProps),
//    firestoreConnect([
//        {collection:'expenses'}
//    ]) 
// )(ExpenseList);