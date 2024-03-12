import React, { Component } from 'react'
import { UserContext } from './grandParent'

class Child extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
            {
                user=>{
                    return <div>Using the props {user}</div>
                }
            }
        </UserContext.Consumer>
      </div>
    )
  }
}

export default Child
