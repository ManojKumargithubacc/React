import React,{Component} from "react";

export class Demo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <p>Hi I am using {this.props.name}</p>)
    }
}








