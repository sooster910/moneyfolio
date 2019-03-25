import React, { Component } from 'react';
import 'react-dates/initialize';
import { connect } from 'react-redux'
import { addExpense, getExpense } from '../../store/actions/expensesActions'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddExpense extends Component {

    
    state = {
        description: '',
        category: null,
        note: '',
        amount: 0,
        createdAt:new Date(),
        calendarFocused: false,
        Message: ''
    };

    handleDescription = (e) => {
  const description = e.target.value;

        this.setState(() => ({
            description: description
            //es6 shorten hands 
            //description 
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
                //amount:amount
                amount: amount
            }));
        }
    };

    handleCreatedAt=(createdAt) =>{
        this.setState(()=>({
          createdAt: createdAt
        }));
      }
    
    handleFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submit the from:', this.state)
        if (!this.state.description || !this.state.amount || this.state.category === 'select') {
            this.setState(() => ({ Message: 'Please provide description, amount and category' }));
        } else {
            this.setState(() => ({ Message: '' }));
            this.props.addExpense(this.state);
            this.props.getExpense();
            this.props.history.push('/');
        }

    };
    render() {
        return (
            <div>
                ExpenseForm

                {this.state.Message && <p>{this.state.Message}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.handleDescription} >

                    </input>

                    <select
                        value={this.state.category}
                        onChange={this.handleCategory}
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

                    <input type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.handleAmount}
                    />

<DatePicker
  selected={this.state.createdAt}
  onSelect={this.handleCreatedAt} //when day is clicked
  onChange={this.handleChange} //only when value has changed
/>
                  
                    <textarea placeholder="Add a optional note for your expense"
                        value={this.state.note}
                        onChange={this.handleTextarea}>
                    </textarea>


                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {

    return {
        addExpense: (expense) => dispatch(addExpense(expense)),
        getExpense: () => dispatch(getExpense())
    }
}

export default connect(null, mapDispatchToProps)(AddExpense)
