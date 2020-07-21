import React from "react";
import image1 from "../images/cop_lady.jpg";

const Profile = (props) => {
  const obj = JSON.parse(props.location.state.value);
  return (
    <React.Fragment>
      <div id="wrapper2">
        <div id="welcome" className="container">
          <div id="profile">
            <div className="column1">
              <img src={image1} />
            </div>
            <div className="column2">
              <h2>
                <strong>Name: </strong>
                {obj.rowData.first_name} {obj.rowData.last_name}
              </h2>
              <br />
              <h3>
                <strong>Station: </strong> {obj.rowData.team.city}{" "}
                {obj.rowData.team.division} {obj.rowData.team.id}
              </h3>
              <h4>
                <strong>Phone: </strong> {obj.rowData.id}
                {obj.rowData.team.id}
              </h4>
            </div>
            <div className="column4">
              <h2>
                <strong> {obj.rowData.id} </strong>
              </h2>
              <h4>Active Cases:</h4>

              <h2>
                <strong>{obj.rowData.team.id}</strong>
              </h2>
              <h4>Completed Cases:</h4>

              <h2>
                <strong>8</strong>
              </h2>
              <h4>Rejected Cases:</h4>
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
