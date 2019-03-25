import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter,setCategoryFilter } from '../../store/actions/filtersActions';
const ExpenseFilters = (props) => {
    console.log(props);

    return (
        <div>
        
        <input type="text"
                value={props.filters.text} 
                onChange={(e) => {props.dispatch(setTextFilter(e.target.value))
        }}/>

        <select value={props.filters.category} 
                onChange={(e)=>{props.dispatch(setCategoryFilter(e.target.value))}}
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
    )

}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpenseFilters)