import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import SignIn from "./components/auth/SignIn";
import AddExpense from "./components/expenses/AddExpense";
import Dashboard from "./components/dashboard/Dashboard";
import EditExpense from "./components/expenses/EditExpense";
import Navbar from "./components/layout/Navbar";
import ErrorPage from "./components/expenses/404ErrorPage";
import "normalize.css/normalize.css";
import "./styles/App.scss";

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={SignIn} />

            <Route exact path="/dashboard" component={Dashboard} />
            {/* <Route path="/signin" component={SignIn} />              */}
            {/* <Route path="/signup" component={UserIsAuthenticated(SignUp)} /> */}

            <Route exact path="/create" component={AddExpense} />
            <Route exact path="/edit/:id" component={EditExpense} />

            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
