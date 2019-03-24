import React, { Component } from 'react';
import ExpenseList from '../expenses/ExpenseList';
import ExpenseListItem from '../expenses/ExpenseListItem';
import SummaryExpense from '../expenses/SummaryExpense';
import ExpenseFilters from '../expenses/ExpenseFilters';

class Dashboard extends Component {
render(){
    //console.log(this.props);
   // console.log(this.props.expenses);
   console.log('this.props',this.props)
   console.log('this.props,expenses :',this.props.expenses);
 
    return(
        
        <div>
            <ExpenseFilters/>
          
            <ExpenseList />
            <SummaryExpense/>
        </div>
    )
}


}

export default Dashboard;
