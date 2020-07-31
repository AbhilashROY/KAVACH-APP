import React from "react";

const Report = (props) => {
  const obj = JSON.parse(props.location.state.value);
  // console.log(obj);
  const h5style = {
    marginTop: "5px",
    marginBottom: "5px",
    color: "#2c003e",
    fontSize: "18px",
  };
  const metaData=obj.rowData.meta_data;
  const data= [];
  for(let media in metaData){
    data.push({
      id:media,
      ...metaData[media]
    });
  }
  const content = data.map(d=>{
    if(d.filetype==='pdf'){
      return(
        <div key= {d.id}>
            <p>Document Related to Crime</p>
            <a href={d.filelink}
            >{d.filename}</a>
        </div>
      )
    }else if(d.filetype==='mp3'){
      return(
        <div key= {d.id}>
          <p>Crime Scene Audio</p>
          <audio controls src={d.filelink}>
          </audio>
        </div>
      )
    }else if(d.filetype==='mp4'){
      return(
        <div key= {d.id}>
          <p>Crime Scene Video</p>
          <video style={{height:"320px",width:'240px'}} controls 
            src={d.filelink}
          ></video>
        </div>
      )
    }else{
      return(
        <div key= {d.id}>
          <p>Crime Scene Image</p>
          <img style={{height:"320px",width:'240px'}}
            src={d.filelink}
          ></img>
        </div>
      );
    }
  })
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
                <strong>Location:</strong> {obj.rowData.AddressLine}
              </h5>
              <h5>
                <strong>Officer Assigned:</strong> Ikea Singh
              </h5>
              <button className="button-small1" style={{ marginLeft: "0px" }}>
                Victim Info
              </button>
            </div>
            <div className="column2a">
              <h5 style={h5style}>
                <strong>Title: </strong> {obj.rowData.crime_type}
              </h5>
              <h5 style={h5style}>
                <strong>Reported on: </strong> {obj.rowData.timestamp}
              </h5>
              <h5 style={h5style}>
                <strong>Report Category: </strong>
              </h5>
              <h5 style={h5style}>
                <strong>Report Status: </strong> {obj.rowData.report_status}
              </h5>
              <h5>
                <strong>Description: </strong>
                <p>{obj.rowData.description}</p>
              </h5>
              <input style = {{marginBottom: '0px', width: '97%'}} type = "text" placeholder = "Enter Your Progress"/>
              <div style={{ textAlign: "right" }}>
                <button style={{marginTop: '10px'}} className="button-small1">Submit Progress</button>
              </div>
              

            </div>
          </div>
          
        </div>
      </div>
      <div id="wrapper3">
        <div ><h3 style={{textAlign:'center'}}>CRIME MEDIA</h3></div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="flex-container">      
            {content}
        </div>
      </div>
      
    </React.Fragment>
  );
};
export default Report;
