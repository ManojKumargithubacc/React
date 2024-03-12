import React,{createContext} from 'react'
import ContextHookparent from './contextHookparent'
export const UserContext=createContext()

function ContextHook() {
  return (
    <div>
      <UserContext.Provider value={"Context"}>
     <ContextHookparent/> 
     </UserContext.Provider>
    </div>
  )
}

export default ContextHook
