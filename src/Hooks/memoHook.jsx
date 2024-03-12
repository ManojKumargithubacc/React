import React, { useState,useMemo } from 'react'

function MemoHook() {
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    function incrementOne(){
        setCount1(count1+1)

    }
    function incrementTwo(){
        setCount2(count2+1)
    }
    const isEven=useMemo(()=>{
        let i=0
    while(i<3000000000) i++
    return count1%2===0},[count1])
    
    return (
    <div>
      <button onClick={incrementOne}>count: {count1}</button>
      <span>{isEven?'Even':'odd'}</span>
      <button onClick={incrementTwo}>count: {count2}</button>

    </div>
  )
}

export default MemoHook
