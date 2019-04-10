import React, { Component } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';


class ExpenseForm extends Component {

    state = {
        description: this.props.matchingExpense ? this.props.matchingExpense.description : '',
        category: this.props.matchingExpense ? this.props.matchingExpense.category : '',
        note: this.props.matchingExpense ? this.props.matchingExpense.note : '',
        amount: this.props.matchingExpense ? this.props.matchingExpense.amount : '',
        createdAt: this.props.matchingExpense ? moment(this.props.matchingExpense.createdAt) : moment(),
        calendarFocused: false,
        Message: '',
        editing: false
    };


    handleDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description: description
        }))
    }
    handleCategory = (e) => {
        const category = e.target.value;
        this.setState(() => ({
            category: category
        }))
    }
    handleTextarea = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note: note
        }))
    }
    handleAmount = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount: amount
            }));
        }
    };
    handleChange = (createdAt) => {
        this.setState(() => ({
            createdAt: createdAt
        }));
    }

    handleFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt: createdAt }));
            console.log("createdAt", this.state.createdAt)
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));

    };
    onSubmit = (e) => {
        e.preventDefault();
        console.log('submit the from:', this.state)
        if (!this.state.description || !this.state.amount || this.state.category === 'select') {
            this.setState(() => ({ Message: 'Please provide description, amount and category' }));
        } else {
            this.setState(() => ({ Message: '' }));

            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: this.state.amount,
                createdAt: this.state.createdAt.valueOf(),
                category: this.state.category
            })
        }
    }
    render() {
        return (
            <div>

                {this.state.Message && <p>{this.state.Message}</p>}

                <form onSubmit={this.onSubmit} className="expense-form">
                    <div className="form-row justify-content-md-center">

                        <div className=" form-group col col-lg-2 col-sm-6">
                            <SingleDatePicker
                                className="form-control"
                                date={this.state.createdAt}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </div>
                        <div class=" form-group col col-lg-4 col-sm-6">
                            <select
                                value={this.state.category}
                                onChange={this.handleCategory}
                                className="form-control form-control-lg"
                            >
                                <option value="select">select category</option>
                                <option value="education">Education and Training</option>
                                <option value="food">Food</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="electronic">Electronic</option>
                                <option value="clothing">Clothing</option>
                                <option value="home">Home</option>
                                <option value="travel">Travel</option>
                                <option value="utilities">Utilities</option>
                                <option value="transportation">Transportation</option>
                                <option value="savings">Savings</option>
                                <option value="debt">Debt</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row justify-content-md-center">
                        <div className="form-group col-6 ">
                            <input type="text"
                                className="form-control form-control-lg"
                                placeholder="Description"
                                autoFocus
                                value={this.state.description}
                                onChange={this.handleDescription} >
                            </input>
                        </div>
                    </div>
                    <div className="form-row justify-content-md-center">
                        <div className="form-group col-6 ">
                            <input type="number"
                                className="form-control form-control-lg"
                                placeholder="Amount"
                                value={this.state.amount}
                                onChange={this.handleAmount}
                            />
                        </div>
                    </div>

                    <div className="form-row justify-content-md-center">
                        <div className="form-group col-6">
                            <textarea placeholder="Add a optional note for your expense"
                                className="form-control"
                                value={this.state.note}
                                onChange={this.handleTextarea}>
                            </textarea>
                        </div>
                    </div>
                    <div className="form-row justify-content-md-center">
                        <div className="form-group col-3">
                            <button className="form-control action-button">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ExpenseForm