import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
const ExpenseListItem = (props) => {


    return (<div>
        <Link to={`/edit/${props.expense.id}`}>
            <h1>expense list item :{props.expense.description}</h1>
        </Link>

        <p>id :</p> {props.expense.id}
        <p>Amount: </p>${parseFloat(props.expense.amount).toFixed(2)}
        <p>category: </p>{props.expense.category}
        <p>createdAt:{moment(props.expense.createdAt).format('MMMM Do, YYYY')}</p>
        <button>Remove</button>
    </div>
    )

}

export default ExpenseListItem;