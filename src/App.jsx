import Message,{ListGroup,Hook,MyButton} from "./functionComponent";
import Demo,{Statechange, Welcome} from "./classComponent";
import { Forms } from "./forms";
import { Counter } from "./counter";
import Count, { Count2, Obj } from "./reactHooks";
import TodoApp from "./Todolist";
export default function App(){
  return (
  <>
  {/* <Message greet="Welcome" exc="!!"/>
  <MyButton/>
  <ListGroup><p>I am using the child</p></ListGroup>
  <Demo name="Class Component"/>
  <Hook/>
  <Welcome name="Mern"/>
  <Forms/> */}
  {/* <Statechange/> */}
  {/* <Counter/> */}
  {/* <Count/> */}
  {/* <Count2/> */}
<Obj/>
<TodoApp/>
  </>
  )
  }







