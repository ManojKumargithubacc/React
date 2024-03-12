import React from 'react'
import { useContext } from 'react'
import { UserContext } from './contextHookgrandparent'

function ContextHookChild() {
    const user=useContext(UserContext)
  return (
    <div>
      {user}
    </div>
  )
}

export default ContextHookChild
