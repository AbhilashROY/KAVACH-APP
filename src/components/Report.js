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
                {obj.rowData.first_name} {obj.rowData.title}
              </h5>
              <br />
              <h5>
                <strong>Reported on: </strong> {obj.rowData.userId}/
                {obj.rowData.id % 10}/2019
              </h5>
              <h5>
                <strong>Report Category</strong>
              </h5>
            </div>
            <div className="column4">
              <h5>
                <strong> Victim Name: </strong>
              </h5>

              <h5>
                <strong>Victim Phone Number: </strong> 5463473
              </h5>

              <h5>
                <strong>Location:</strong>
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
