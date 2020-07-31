import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchReports from "./SearchReports";
import axios from "axios";
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

  getUserData = async () => {
    try {
      const { data } = await axios.get(
        `https://kavach-f5931.firebaseio.com/reports.json`
      );
      console.log(data);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  json2array = (json) => {
    let result = [];
    let keys = Object.keys(json);
    keys.forEach(function (key) {
      result.push(json[key]);
    });
    return result;
  };

  async componentDidMount() {
    const report = await this.getUserData();
    console.log(report);
    this.setState({
      isLoaded: true,
      reports: this.json2array(report),
    });
    console.log("set");
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    console.log(90);
    console.log(this.state.reports);
    let filteredReports = this.state.reports.filter((report) => {
      return report.timestamp.toString().indexOf(this.state.search) !== -1;
    });
    return (
      <React.Fragment>
        <div className="profileNavBar">
          <h1>Reports</h1>
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
            <SearchReports key={report.report_id} rowData={report} />
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
