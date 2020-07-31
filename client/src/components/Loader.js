import React, {Component} from 'react';
import ReactLoading from 'react-loading';


export default class Loader extends Component { 

    constructor(props) {  
        super(props);  
        this.state = { 
            type : "spinningBubbles",
<<<<<<< HEAD
            color : 'black'
=======
            color : "black"
>>>>>>> fc5a965491dfc1e69c3f052fd4b5f23977fa4ce8
         };  
    }  

    render() {
        return(
            
<<<<<<< HEAD
            <div className="Loader">
=======
            <div className= "Loader">
>>>>>>> fc5a965491dfc1e69c3f052fd4b5f23977fa4ce8
                <ReactLoading type={this.state.type} color={this.state.color} height={150} width={150} />
            </div>

        )
        
    }
}