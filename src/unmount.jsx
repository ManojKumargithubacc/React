import { Component } from "react";
import DidUpdate from "./updateMethods";
 
export default class UnMount extends Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
        return(
            <>{this.state.show?<DidUpdate/>:<h1>Component removed</h1>}
            <button onClick={()=>this.setState({show:false})}>Toggle component</button>
            </>
        );
    }
}