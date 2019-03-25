
import { connect } from 'react-redux';
import { setTextFilter,setCategoryFilter,setStartDate,setEndDate } from '../../store/actions/filtersActions';
import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
class ExpenseFilters extends Component{
    state={
         calendarFocused:null   
    }
    
    handleDateChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    
    handleFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused:calendarFocused}))

    }
    
    
    render(){
    return (    
        <div>
        
        <input type="text"
                value={this.props.filters.text} 
                onChange={(e) => {this.props.dispatch(setTextFilter(e.target.value))
        }}/>

        <select value={this.props.filters.category} 
                onChange={(e)=>{this.props.dispatch(setCategoryFilter(e.target.value))}}
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
        <DateRangePicker
        startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
        endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
        onDatesChange={(this.handleDateChange)} // PropTypes.func.isRequired,
        focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={this.handleFocusChange} // PropTypes.func.isRequired,
        numberOfMonths={1}
        isOutsideRange={()=>false}
        showClearDates={true}
/>
        </div>
    )

}
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpenseFilters)