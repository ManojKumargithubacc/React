import React,{useRef} from 'react'
import ForwardingRefs from './forwardingRefs'

function ForwardingRefsParent() {
    const ref=useRef(null)
    const clickHandler=()=>{
        ref.current.focus()
    }
  return (
    <div>
      <ForwardingRefs ref={ref}/>
      <button onClick={clickHandler}>Click to focus</button>
    </div>
  )
}

export default ForwardingRefsParent
