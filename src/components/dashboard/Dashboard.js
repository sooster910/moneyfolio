import React, { Component } from "react";
import ExpenseList from "../expenses/ExpenseList";
import SummaryExpense from "../expenses/SummaryExpense";
import ExpenseFilters from "../expenses/ExpenseFilters";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <ExpenseFilters />

        <SummaryExpense />

        <ExpenseList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Dashboard);
