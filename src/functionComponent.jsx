import { useState } from "react";
//Using arrow function as a component
 const Message=(props)=>{
  const uname = "Manoj";
  return (<><h1>Hi I am {uname} {props.greet} {props.exc}</h1> <hr/></>);
}

 export function MyButton() {
  return <><button  style={{backgroundColor:"purple"}}>I'm a button</button><hr/></>;
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
      <ul className="list-group">{items}</ul>
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
export default Message;
