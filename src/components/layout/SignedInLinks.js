import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      
      <NavLink to="/" activeClassName="is-active" exact={true}>ExpenseDashboardPage</NavLink>
       <NavLink to="/create" activeClassName="is-active">AddExpense</NavLink>
       <NavLink to="/summary" activeClassName="is-active">SummaryExpense</NavLink>
       
        <NavLink to='/'>Log Out</NavLink>
      
    </div>
  )
}

export default SignedInLinks