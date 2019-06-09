import React, { Component } from "react";
import ExpenseList from "../expenses/ExpenseList";
import SummaryExpense from "../expenses/SummaryExpense";
import ExpenseFilters from "../expenses/ExpenseFilters";
import { connect } from "react-redux";
import ExpenseChart from "../expenses/ExpenseChart";
import { Redirect } from "react-router-dom";
import Footer from "../layout/Footer";
class Dashboard extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <section id="main">
        <ExpenseFilters />

        <SummaryExpense />

        {/* <ExpenseChart /> */}

        <ExpenseList />

        <Footer />
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
