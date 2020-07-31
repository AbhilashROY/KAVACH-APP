import React from "react";

const Report = (props) => {
  const obj = JSON.parse(props.location.state.value);
  console.log(obj);
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
        <div id="portfolio" className="container" >
          {/* <div style={{height:'100px',width:'100px'}}>
            <audio controls src="https://firebasestorage.googleapis.com/v0/b/kavach-f5931.appspot.com/o/reports%2F-MCmDvD_BC21J5NxDETx%2F1595349381874?alt=media&token=960f8114-a381-4f05-b61d-8f87eb821ebf">
            </audio>
            </div>
          <div >
            <video style={{height:"320px",width:'240px'}} controls 
              src="https://firebasestorage.googleapis.com/v0/b/kavach-f5931.appspot.com/o/reports%2F-MCmDvD_BC21J5NxDETx%2F1595349381907?alt=media&token=8625682c-c361-44bf-9261-39c33af64868"
            >
            </video>
          </div>
          <div>
            <p>Document Related to Crime</p>
            <a href="https://firebasestorage.googleapis.com/v0/b/kavach-f5931.appspot.com/o/reports%2F-MCmDvD_BC21J5NxDETx%2F1595349381911?alt=media&token=1bab0e25-dd13-4bc0-9870-d19542786ef2"
            >This is a pdf file</a>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Report;
