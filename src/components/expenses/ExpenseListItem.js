import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const ExpenseListItem=(props)=>{
    return(<div>
     <Link to={`/edit/${props.expense.id}`}>
<h1>expense list item :{props.expense.description}</h1>
</Link>
<p>id :</p> {props.expense.id}
 <p>Amount: </p>${parseFloat(props.expense.amount).toFixed(2)}
 <p>createdAt:</p>
</div>
    )

}

export default ExpenseListItem;