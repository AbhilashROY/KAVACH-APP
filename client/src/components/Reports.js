import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchReports from "./SearchReports";
import axios from 'axios';
class Reports extends Component {
  constructor() {
    super();
    this.state = {
      reports: [],
      isLoaded: false,
      search: "",
    };
  }

  /* This is where data will be fetched from */
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     this.setState({
    //       isLoaded: true,
    //       reports: result,
    //     });
    //   });
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((result) => {
      // console.log(result);
      this.setState({
        isLoaded: true,
        reports: result.data,
      });
    });
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredReports = this.state.reports.filter((report) => {
      return report.userId.toString().indexOf(this.state.search) !== -1;
    });
    return (
      <React.Fragment>
        <div id="wrapper2" className="profileNavBar">
          <div className="container">
            <div>
              <h1>Reports</h1>
            </div>
          </div>
        </div>

        <div id="search-wrapper">
          <div className="container">
            <input
              placeholder="Search by Date"
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </div>
          {filteredReports.map((report) => (
            <SearchReports key={report.id} rowData={report} />
          ))}
        </div>

        <div id="footer" className="container">
          <div className="title">
            <h2>Get in touch</h2>{" "}
          </div>
          <ul className="contact">
            <li>
              <a className="icon icon-phone"></a>
            </li>
            <li>
              <a className="icon icon-twitter"></a>
            </li>
            <li>
              <a className="icon icon-youtube-sign"></a>
            </li>
            <li>
              <a className="icon icon-tumblr"></a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Reports;
