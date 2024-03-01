import { useState } from "react"

//useState hook
export default function Count(){
    const [count,setCount]=useState(0)
    return(
        <>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Count</button>
        </>
    )
}
//Using the previous state value to update the state
//It doesn't automatically merge and update the state 
export function Count2(){
    const initialCount=0
    const [count,setCount]=useState(initialCount)
    return(
        <>
        Count:{count}
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(preCount=>preCount+1)}>Increment</button>
        <button onClick={()=>setCount(preCount=>preCount-1)}>Decrement</button>

        </>
    )
}
//Using Object in useState, if we don't use ...name only one property will be updated at a time
export function Obj(){
   const[name,setName] =useState({firstName:'',lastName:''})
    return(
        <>
        First Name<input type="text" value={name.firstName} onChange={e=> setName({...name,firstName:e.target.value})} /><br/>

        Last Name<input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
        <h1>First Name: {name.firstName}</h1>
        <h1>Last Name: {name.lastName}</h1>

        </>
    )
}
//useEffect hook