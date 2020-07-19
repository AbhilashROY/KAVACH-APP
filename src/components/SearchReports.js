import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

class SearchReports extends Component {
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
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          reports: result,
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
      <div>
        <div id="search-wrapper">
          <div className="container">
            <input
              placeholder="Search"
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </div>
          {filteredReports.map((report) => (
            <Card key={report.id} style={{ margin: `20px 80px 20px 80px` }}>
              <div className="root">
                <CardContent className="contentReports">
                  <h4>
                    <strong>title: </strong> {report.title}
                  </h4>
                  <h4>
                    <strong>Reported on: </strong> {report.userId}/
                    {report.id % 10}/2019
                  </h4>
                  <h4>
                    <strong>Active: </strong> false
                  </h4>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchReports;
