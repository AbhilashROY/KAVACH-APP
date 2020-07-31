import React from "react";
import image1 from "../images/cop3.jpg";

const Profile = (props) => {
  const obj = JSON.parse(props.location.state.value);

  const h4style = {
    marginTop: '5px',
    marginBottom: '0px',
    marginRight : '10px',
    color: '#2c003e',
    fontSize: '18px',
  }
  return (
    <React.Fragment>
      <div id="wrapper2">
        <div id="welprof" className="container">
          <div id="profile">
            <div className="column1a">
              <img src={image1} style={{ width: `250px` }} />
              <h2>
                <strong>Name: </strong>
                {obj.rowData.first_name} {obj.rowData.last_name}
              </h2>
            </div>
            <div className="column2a" style={{ paddingTop: `30px` }}>
              <h3 style = {h4style}>
                <strong>Station: </strong> {obj.rowData.team.city}{" "}
                {obj.rowData.team.division} {obj.rowData.team.id}
              </h3>
              <h4 style = {h4style}>
                <strong>Phone: </strong> {obj.rowData.id}
                {obj.rowData.team.id}
              </h4>
              <h4 style = {h4style}>Active Cases: <strong> {obj.rowData.id} </strong></h4>
              <h4 style = {h4style}>Completed Cases: <strong>{obj.rowData.team.id}</strong></h4>
              <h4 style = {h4style}>Rejected Cases: <strong>8</strong></h4>
              <div className = "Desc">
                  <p><strong>About: </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
              </div>
              <div style = {{textAlign: 'right'}}>
                <button className="button-small1">
                  Upload Image
                </button>
                <button className="button-small1">
                  View Cases
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
export default Profile;
