import React from "react";

const Report = (props) => {
  const obj = JSON.parse(props.location.state.value);
  const h5style = {
    marginTop: '5px',
    marginBottom: '5px',
    color: '#2c003e',
    fontSize: '18px',
  }
  return (
    <React.Fragment>
      <div id="wrapper2">
        <div id="welprof" className="container">
          <div id="profile">
            <div className="column1a">
              <h5>
                <strong> Victim Name: </strong> Anil Srivastava
              </h5>
              <h5>
                <strong>Victim Phone Number: </strong> 5463473
              </h5>
              <h5>
                <strong>Location:</strong> Janiganj,Silchar
              </h5>
              <h5>
                <strong>Officer Assigned:</strong> Ikea Singh
              </h5>
              <button className="button-small1" style= {{marginLeft: '0px'}}>
                  Victim Info
              </button>
            </div>
            <div className="column2a">
              <h5 style = {h5style}>
                <strong>Title: </strong>
                {obj.rowData.first_name} {obj.rowData.title}
              </h5>
              <h5 style = {h5style}>
                <strong>Reported on: </strong> {obj.rowData.userId}/
                {obj.rowData.id % 10}/2019
              </h5>
              <h5 style = {h5style}>
                <strong>Report Category: </strong>
              </h5>
              <h5>
                <strong>Description: </strong>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </h5>
              <div style = {{textAlign: 'right'}}>
                <button className="button-small1">
                  Media 
                </button>
                <button className="button-small1">
                  Progress
                </button>
              </div>
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
