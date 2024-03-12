import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    //Creating a ref
      this.inputRef = React.createRef()
         
      
    }
    //Focus the iput field when the page is loaded
    componentDidMount(){
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default RefsDemo
