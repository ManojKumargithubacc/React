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

export class New extends Component {
render(){
    return(
        <h1></h1>
    )
}
}
export class Statechange extends Component{
    constructor(){
        super()
        this.state={
            message:"I am using the state"
        }
    }
render(){
    return(
        <>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.setState({message:"State is changed"})}>Submit</button>
        </>
    )
}
}






