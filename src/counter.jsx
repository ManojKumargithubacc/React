import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state={
           count:0
        }
    }
  render() {
    return (
      <div>
        <p>Count - {this.state.count}</p>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
      </div>
    )
  }
}

export default Counter
