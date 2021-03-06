import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseListItem = props => (
  <tbody className="table-body">
    <tr className="table-body-row">
      <td>{moment(props.expense.createdAt).format("MMMM Do, YYYY")}</td>
      <td>{props.expense.category}</td>
      <td>{props.expense.description}</td>
      <td>${parseFloat(props.expense.amount).toFixed(2)}</td>
      <td>
        <Link to={`/edit/${props.expense.id}`} className="edit-btn">
          Edit/Remove
        </Link>
      </td>
    </tr>
  </tbody>
);

export default ExpenseListItem;
