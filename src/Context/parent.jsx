import React, { Component } from 'react'
import Child from './child'

class Parent extends Component {
  render() {
    return (
      <div>
        <Child/>
      </div>
    )
  }
}

export default Parent
