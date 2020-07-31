import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchProfile from "./SearchProfile";
import axios from "axios";
class Profiles extends Component {
  constructor() {
    super();
    this.state = {
      flag: false,
      cops: [],
      isLoaded: false,
      search: "",
      placeholder: "Search by Station",
    };
  }

  /* This is where data will be fetched from */
  componentDidMount() {
    // fetch("https://www.balldontlie.io/api/v1/players")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     this.setState({
    //       isLoaded: true,
    //       cops: result.data,
    //     });
    //   });
    axios.get("https://www.balldontlie.io/api/v1/players").then((result) => {
      // console.log(result);
      this.setState({
        isLoaded: true,
        cops: result.data.data,
      });
    });
    axios.get("http://localhost:5000").then((res) => console.log(res.data));
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  getData = (rowData) => {
    console.log(rowData);
  };

  handleFlagByName = () => {
    this.setState({
      flag: true,
      placeholder: "Search by Name",
    });
  };

  handleFlagByStation = () => {
    this.setState({
      flag: false,
      placeholder: "Search by Station",
    });
  };

  render() {
    let filteredCops = this.state.cops.filter((cop) => {
      if (this.state.flag)
        return (
          cop.first_name
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1
        );
      else
        return (
          cop.team.city
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1
        );
    });

    return (
      <React.Fragment>
        <div className="profileNavBar">
          <h1>Profiles</h1>
        </div>

        <div id="search-wrapper">
          <div className="container">
            <input
              placeholder={this.state.placeholder}
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
            <a className="button-small" onClick={this.handleFlagByName}>
              By Name
            </a>
            <a className="button-small" onClick={this.handleFlagByStation}>
              By Station
            </a>
          </div>
          {filteredCops.map((cop) => (
            <SearchProfile
              key={cop.id}
              rowData={cop}
              handleClick={this.getData}
            />
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

export default Profiles;
