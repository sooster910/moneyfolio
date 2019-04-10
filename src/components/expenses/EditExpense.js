import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../../store/actions/expensesActions';
import ExpenseForm from './ExpenseForm';
import { Redirect, Link } from 'react-router-dom'


class EditExpense extends Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.matchingExpense.id, expense);
        this.props.history.push('/dashboard');
    }
    handleRemove = () => {
        this.props.removeExpense({ id: this.props.matchingExpense.id });
        this.props.history.push('/dashboard');
    }

    render() {
        console.log('expense id :', this.props.match.params.id)
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/' />
        console.log('current auth id Editexpense:', this.props.auth)
        return (
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-3  ">
                        <Link to="/dashboard" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left" /> Back To Dashboard
                        </Link>
                    </div>
                </div>
                <div className="card mx-5">
                    <div className="card-header">
                        Editing Expense
                        <button onClick={this.handleRemove} className="btn btn-danger float-right" >Remove</button>

                    </div>

                    <div className="card-body mt-3">
                        <ExpenseForm
                            matchingExpense={this.props.matchingExpense}
                            onSubmit={this.onSubmit}
                        />

                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state, props) => {
    return {
        auth: state.auth,
        matchingExpense: state.expense.find((eachExpense) => {
            console.log('mapstate:', eachExpense.id)
            console.log('mapstate:', eachExpense)
            return eachExpense.id === props.match.params.id
        })
    }
}
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (expense) => dispatch(removeExpense(expense))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
