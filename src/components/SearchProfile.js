import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import image1 from "../images/cop.jpg";

class SearchProfile extends Component {
  constructor() {
    super();
    this.state = {
      cops: [],
      isLoaded: false,
      search: "",
    };
  }

  /* This is where data will be fetched from */
  componentDidMount() {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          cops: result,
        });
      });
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredCops = this.state.cops.filter((cop) => {
      return (
        cop.login.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
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

          {filteredCops.map((cop) => (
            <Card key={cop.id} style={{ margin: `20px 80px 20px 80px` }}>
              <div className="root">
                <img src={image1} style={{ width: `150px` }} />
                <div>
                  <CardContent className="contentProfile">
                    <div className="column1">
                      <h3>
                        <strong>Name: </strong> {cop.login}
                      </h3>
                      <h4>
                        <strong>Station: </strong> Xyz
                      </h4>
                      <h4>
                        <strong>Phone: </strong> {cop.id}
                      </h4>
                    </div>
                    <div className="column2"></div>
                    <div className="column4">
                      <h3>
                        <strong>Active Cases: </strong> 8
                      </h3>
                      <h4>
                        <strong>Rejected Cases: </strong> 18
                      </h4>
                      <h4>
                        <strong>Completed Cases: </strong> 9
                      </h4>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchProfile;
