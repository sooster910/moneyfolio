import React, { Component } from 'react';
import ExpenseList from '../expenses/ExpenseList';
import SummaryExpense from '../expenses/SummaryExpense';
import ExpenseFilters from '../expenses/ExpenseFilters';
import { connect } from "react-redux";
import { getExpense } from "../../store/actions/expensesActions";
import filteredExpense from "../filter/filterLogic";
import { dispatch } from 'rxjs/internal/observable/range';
import ExpenseChart from '../expenses/ExpenseChart';

class Dashboard extends Component {
    // componentWillMount(){
    //     // this.props.dispatch(getExpense())
    //    
    //     console.log('start getExpense()')
    // }
    
    render(){
        console.log('this.props.expense:', this.props.expensee)
       
    return(
        <div>      
            <ExpenseFilters/>
            <SummaryExpense expenses={this.props.expense}/>
           <ExpenseChart expenses={this.props.expense}/>
            <ExpenseList expenses={this.props.expense}/>
        </div>
    )
}
}

const mapState = state => ({
    
     expense: filteredExpense(state.expense, state.filters)
  
  });
  const mapDispatch = dispatch => {
    dispatch(getExpense())
    return{
    };
  };
  export default connect(
    mapState,
    mapDispatch
  )(Dashboard);

//export default Dashboard;
