import { useState } from "react";
import { Fragment } from "react";
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
 export function ListGroup(props) {
  return (
    <>
    
      <h1>List items</h1>
      <ul className="list-group">{items}</ul>
      {props.children}
      </>
    
  );
  }
 export function Hook(){
  const [name,setName]=useState("Manoj")
  return(
    <Fragment>
    <p>{name}</p>
    <button onClick={()=>setName("Kumar")}> Click </button>
    </Fragment>

  );  
}
export default Message

// export function ReactCreate(){
  // return(
    // React.createElement('div',{id:'hello'},React.createElement('h1',null,'Manoj'),React.createElement('p',null,'Manoj is using react createElement'))
    // 
  // 
// 
  // )
// }
 