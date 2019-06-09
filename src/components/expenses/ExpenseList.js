import React, { Component } from "react";
import ExpenseListItem from "./ExpenseListItem";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import filteredExpense from "../filter/filterLogic";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { messaging } from "firebase";


class ExpenseList extends Component {

  render() {
    
    if (this.props.expense) {
      return (
        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th />
            </tr>
          </thead>
          {this.props.expense && this.props.expense.map(eachExpense => {
            return (
              <ExpenseListItem key={eachExpense.id} expense={eachExpense} />
         
            );
          })}
        </table>
      );
    } else {
      return <Spinner />
    }
  }
}

const mapState = state => {
 console.log('state from expense list',state)
 const id = state.expense.map((expense)=>{
   return expense.id
 })
 console.log('expense id :', id)
  return{
  expense: filteredExpense(state.expense, state.filters)
}}

export default connect(mapState)(ExpenseList);
