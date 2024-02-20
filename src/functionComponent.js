import { useState } from "react";

export default function Message(props){
  const uname = "Manoj";
  return <h1>Hi I am {uname} {props.greet} {props.exc}</h1>;
}

export function MyButton() {
  return <button  style={{backgroundColor:"purple"}}>I'm a button</button>;
}
const lists = ["Manoj", "Kumar", "Magadheeran", "Vasantha"];
const items = lists.map((item, index) => (
  <li
  style={{color:"blue"}}
    onClick={() => console.log(item, index)}
    className="list-group-item"
    key={item}
  >
    {item}
  </li>
));
export function ListGroup() {
  return (
    <>
      <h1>List items</h1>
      <ul class="list-group">{items}</ul>
    </>
  );
  }
export function Hook(){
  const [name,setName]=useState("Manoj")
  return(
    <>
    <p>{name}</p>
    <button onClick={()=>setName("Kumar")}> Click </button>
    </>

  );
    
  
}
