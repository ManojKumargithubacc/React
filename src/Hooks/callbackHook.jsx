import { useCallback, useState} from "react";
import React from "react";
import Click from "./callbackHookdemo"
export default function UseCallback(){
    const [num,setnum]=useState(20)
    const [num1,setnum1]=useState(50)
 
    const increment=useCallback(()=>{
        setnum(num+1);
    },[num]);
    const increment1=useCallback(()=>{
        setnum1(num1+1000);
    },[num1]);
    return(
        <>
        <h2>UseCallback </h2>
        <h2>Num: {num} Num1: {num1}</h2>
        <Click handleClick={increment}>Increment </Click>
        <Click handleClick={increment1} >Increment1</Click>
        </>
    );
}