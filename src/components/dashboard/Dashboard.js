import React, { Component } from 'react';
import ExpenseList from '../expenses/ExpenseList';
import SummaryExpense from '../expenses/SummaryExpense';
import ExpenseFilters from '../expenses/ExpenseFilters';



class Dashboard extends Component {
    
    render(){
    return(
        <div>
            <SummaryExpense/>
            <ExpenseFilters/>
            <ExpenseList/>
        </div>
    )
}
}

export default Dashboard;
