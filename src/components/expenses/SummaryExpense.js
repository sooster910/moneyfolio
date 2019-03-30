import React from 'react';




const SummaryExpense=(props)=>{

    const total = props.expenses.map((expenses)=>{
        return expenses.amount}).reduce((sum,value)=>{
            return sum + parseFloat(value.toString())
        },0)
    
   return(<div>
       <h1>Summary Expense</h1>
       <h1> All Expenses:{props.expenses.length}</h1> 
       <h1>Your total spending : ${parseFloat(total).toFixed(2)} </h1>  
  
    </div>)
}

  export default SummaryExpense;