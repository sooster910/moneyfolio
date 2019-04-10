import React from 'react';
import filteredExpense from "../filter/filterLogic";
import { connect } from "react-redux";



const SummaryExpense = (props) => {

    const total = props.expense.map((expenses) => {
        return expenses.amount
    }).reduce((sum, value) => {
        return sum + parseFloat(value.toString())
    }, 0)

    return (
        <div>
            <div className="card summary-card h-100 d-flex mb-4 pt-2 pb-2" >
                <div className="card-body align-items-center d-flex justify-content-center">
                    <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
                        <h5> <i className="fas fa-search" /> All Expenses</h5>
                        {props.expense.length}
                    </h1>

                </div>
            </div>
            <div className="card summary-card h-100 d-flex mb-3 pt-3 pb-2">
                <div className="card-body align-items-center d-flex justify-content-center">
                    <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
                        <h5> <i className="fas fa-coins" /> SPENT </h5>
                        ${parseFloat(total).toFixed(2)}
                    </h1>
                </div>
            </div>
        </div>
    )
}
const mapState = state => ({
    expense: filteredExpense(state.expense, state.filters)
});


export default connect(mapState)(SummaryExpense);