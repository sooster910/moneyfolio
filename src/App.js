import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn'
import AddExpense from './components/expenses/AddExpense';
import Dashboard from './components/dashboard/Dashboard';
import EditExpense from './components/expenses/EditExpense';
//import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar'
import NotFoundPage from './components/expenses/NotFoundpage';
import SummaryExpense from './components/expenses/SummaryExpense';
class App extends Component {
    
    
    
    render(){
    return (
 
    <BrowserRouter>
    
    <Navbar />
        <Switch>
        <Route path="/" component={Dashboard} exact={true}  />
            <Route path="/signin" component={SignUp} />             
            <Route path="/signup" component={SignIn} /> 
            <Route path="/create" component={AddExpense}  />
            <Route path="/summary" component={SummaryExpense}/>
            <Route path="/edit/:id" component={EditExpense}  />
            {/* <Route path="/help" component={Help}  /> */}
            <Route component={NotFoundPage} />
        </Switch>


    </BrowserRouter>

   );
  }
}

export default App;
