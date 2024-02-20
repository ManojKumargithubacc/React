import {ListGroup} from "./functionComponent"
import { Hook } from "./functionComponent";
import Message,{MyButton} from "./functionComponent"
import { Demo} from "./classComponent";
export default function App(){
  return (<>
  <Message greet="Welcome" exc="!!"/>
  <MyButton/>
  <ListGroup/>
  <Demo name="Class Component"/>
  <Hook/>
  
  </>);
  }







