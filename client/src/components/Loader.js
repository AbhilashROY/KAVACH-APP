import React, {Component} from 'react';
import ReactLoading from 'react-loading';


export default class Loader extends Component { 

    constructor(props) {  
        super(props);  
        this.state = { 
            type : "spinningBubbles",
            color : "blue"
         };  
    }  

    render() {
        return(
            <div>
                <ReactLoading type={this.state.type} color={this.state.color} height={150} width={150} />
            </div>

        )
        
    }
}