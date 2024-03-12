import React, { Component, createContext } from 'react'
import Parent from './parent'
export const UserContext=createContext()

class GrandParent extends Component {
  render() {
    return (
      <div>
        <UserContext.Provider value={"Manoj"}>
        <Parent/>
        </UserContext.Provider>
      </div>
    )
  }
}

export default GrandParent
