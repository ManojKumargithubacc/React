import React,{Component} from "react";
export default class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"Manoj"
        }



    }
    


    render(){
        return(
        <p>Hi I am using {this.props.name} {this.state.username} </p>)
    }
}
export class Welcome extends Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }








