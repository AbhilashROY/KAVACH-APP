import React, {Component} from 'react';
import Loader from './Loader';
import axios from 'axios';
import {Polar} from 'react-chartjs-2';



export default class LineDemo extends Component {
    constructor(props) {  
        super(props);  
        this.state = {
          Loading : true,
          Data: {} };  
    }  

    componentDidMount() {  
        axios.get(`http://localhost:5000/`)  
        .then(res => {  
            console.log(res);  
            const data = res.data.pred_data;  
            const labeldata = res.data.years;
                            
            this.setState({  
                Loading : false,
                Data: {  
                    labels: labeldata, 
                    datasets: [
                    {
                        label: 'My First dataset',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.3)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: data
                    }]  
                }
            });  
        })  
    }  
  
    styles = {
      justifyContent: "center",
      alignItems: "center",
      textAlign: 'center',
      margin: '0% 45%',
    };

  render() {
    return (
      <div>
        {this.state.Loading ? 
        <div style = {this.styles}>
          <Loader />
        </div> : 
        <div>
          <h2>ASSAULT ON WOMEN</h2>
          <Polar ref="chart" data={this.state.Data} />
        </div>}
      </div>
    );
  }

  
}