import React from 'react'
import ReactDom from 'react-dom'
//Using portals and rendering the h1 tag in a seperate DOM
function Portals() {
  return ReactDom.createPortal (
    <h1>Using a portal DOM</h1>,
    document.getElementById("portal")
  )
}

export default Portals
