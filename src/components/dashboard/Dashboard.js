import React, { Component } from "react";
import ExpenseList from "../expenses/ExpenseList";
import SummaryExpense from "../expenses/SummaryExpense";
import ExpenseFilters from "../expenses/ExpenseFilters";
import { connect } from "react-redux";
import ExpenseChart from "../expenses/ExpenseChart";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <section id="main">
        <div className="container pt-3">
          <ExpenseFilters />
          <div className="row justify-content-md-center mb-4">
            <div className="col lg-6 md-6 sm-12">
              <SummaryExpense />
            </div>
            <div className="col lg-6 md-6 sm-12">
              <ExpenseChart />
            </div>
          </div>
          <ExpenseList />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Dashboard);
