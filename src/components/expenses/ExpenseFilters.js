import { connect } from "react-redux";
import {
  setTextFilter,
  setCategoryFilter,
  setStartDate,
  setEndDate
} from "../../store/actions/filtersActions";
import React, { Component } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseFilters extends Component {
  state = {
    calendarFocused: null
  };

  handleDateChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  handleFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused: calendarFocused }));
  };
  handleSelect = e => {
    const options = e.target.value;
    this.props.filters.category = options;
    this.props.dispatch(setCategoryFilter(options));
    console.log("you select category", options);
  };
  handleFocus = e => {
    this.props.filters({ category: "" });
  };
  render() {
    return (
      <div className="search_container mt-sm row">
        <div className="search_container_group">
          <div className="search_container_group-item">
            <input
              type="text"
              className="text-input"
              placeholder="Search"
              value={this.props.filters.text}
              onChange={e => {
                this.props.dispatch(setTextFilter(e.target.value));
              }}
            />
          </div>
          <div className="search_container_group-item">
            <select
              value={this.props.filters.category}
              onChange={this.handleSelect}
              className="select"
            >
              <option value="">select</option>
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
          <div className="search_container_group-item">
            <DateRangePicker
              startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
              endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
              onDatesChange={this.handleDateChange} // PropTypes.func.isRequired,
              focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={this.handleFocusChange} // PropTypes.func.isRequired,
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseFilters);
