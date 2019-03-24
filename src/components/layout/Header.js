import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return(
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active">ExpenseDashboardPage</NavLink>
        <NavLink to="/create" activeClassName="is-active">AddExpensePage</NavLink>
        <NavLink to="/edit" activeClassName="is-active">EditExpensePage</NavLink>
       
       
        {/* <NavLink to="/help" activeClassName="is-active">HelpPage</NavLink> */}

    </header>
    );
}

export default Header;
