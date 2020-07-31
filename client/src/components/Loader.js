import React, {Component} from 'react';
import ReactLoading from 'react-loading';


export default class Loader extends Component { 

    constructor(props) {  
        super(props);  
        this.state = { 
            type : "spinningBubbles",
            color : "black"
         };  
    }  

    render() {
        return(
            
            <div className= "Loader">
                <ReactLoading type={this.state.type} color={this.state.color} height={150} width={150} />
            </div>

        )
        
    }
}