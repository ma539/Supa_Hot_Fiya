import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRapperDetails } from "../actions";
import Rapper from '../components/Rapper'


class App extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchRapperDetails();
  }

  renderRappers = () => {
    return this.props.data.map(rapper => <Rapper key={rapper.id} rapper={rapper} /> )
  }

  render() {
    console.log(this.props.data)

    return (
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Active</th>
      <th scope="col">Birthday</th>
      <th scope="col">Songs</th>
    </tr>
  </thead>
  <tbody>
    {
      this.renderRappers()
    }
  </tbody>
</table>
    );
  }
}

const mapStateToProps = ({ data = [] }) => ({
  data
});

export default connect(
  mapStateToProps,
  {
    fetchRapperDetails
  }
)(App);
