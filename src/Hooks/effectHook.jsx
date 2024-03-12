import React, { useState,useEffect} from 'react'

export default function EffectHook() {
    const[count,setCount]=useState(0)
    const[uname,setUname]=useState('')
    //useEffect hook replaces the compoundDidMount and comoundDiDUpdate and conditionally rendering only if count changes
    useEffect(()=>{
    
      console.log("Updating doc title")
      document.title= `${count}`
    },[count])
  return (
    <div>
      <input type="text" value={uname} onChange={(e)=>setUname(e.target.value)}/>
      <p>Counting:{count}</p>
      <button onClick={()=>setCount(count+1)}>CLICK</button>
    </div>
  )
}

export function EffectHookMouse() {
  const[x,setX]=useState(0)
  const[y,setY]=useState(0)
  function Mouseposition(e){
    console.log("Mouse over event")
    setX(e.clientX)
    setY(e.clientY)

  }
  useEffect(()=>{
    console.log("useEffect called")
    //Call useEffect only for compoundDidMount using []
    window.addEventListener('mouseover',Mouseposition)},[])
  return (
    <div>
      Co-ordinates X-{x} Y-{y}
    </div>
  )
}
//Using compoundWillUnmount using useEffect with return() method
export function EffectHookTimer() {
  const[count,setCount]=useState(0)
  const tick=()=>{
    setCount(count+1)
  }
  useEffect(()=>{
  const interval=setInterval(tick,1000)
  return()=>{
clearInterval(interval)
  }},[count])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}


