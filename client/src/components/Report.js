import React from "react";

const Report = (props) => {
  const obj = JSON.parse(props.location.state.value);
  return (
    <React.Fragment>
      <div id="wrapper2">
        <div id="welcome" className="container">
          <div id="profile">
            <div className="column2">
              <h5>
                <strong>Title: </strong>
                {obj.rowData.crime_type}
              </h5>
              <br />
              <h5>
                <strong>Reported on: </strong> {obj.rowData.timestamp}
              </h5>
              <h5>
                <strong>Description:</strong> {obj.rowData.description}
              </h5>
            </div>
            <div className="column4">
              <h5>
                <strong> Victim Name: </strong>
              </h5>

              <h5>
                <strong>Victim Phone Number: </strong>
              </h5>

              <h5>
                <strong>Location:</strong> {obj.rowData.AddressLine}
              </h5>
              <h5>
                <strong>Officer Assigned:</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper3">
        <div id="portfolio" className="container"></div>
      </div>
    </React.Fragment>
  );
};
export default Report;
