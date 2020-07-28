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
                {obj.rowData.company.catchPhrase}
              </h5>
              <br />
              <h5>
                <strong>Reported on: </strong> {obj.rowData.id}/{obj.rowData.id}
                /2019
              </h5>
              <h5>
                <strong>Report Category: </strong> Burglary
              </h5>
            </div>
            <div className="column4">
              <h5>
                <strong> Victim Name: </strong>
                {obj.rowData.name}
              </h5>

              <h5>
                <strong>Victim Phone Number: </strong> {obj.rowData.phone}
              </h5>

              <h5>
                <strong>Location:</strong>
                {obj.rowData.address.street} {obj.rowData.address.suite}{" "}
                {obj.rowData.address.city} {obj.rowData.address.zipcode}
              </h5>
              <h5>
                <strong>Officer Assigned:</strong> {obj.rowData.username}
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
