import Message,{ListGroup,Hook,MyButton} from "./functionComponent";
import Demo,{Statechange, Welcome} from "./classComponent";
import { Forms } from "./forms";
import { Counter } from "./counter";
import Count, { Count2, Obj } from "./stateHook";
import TodoApp from "./Todolist";
import LifeCycleMethods from "./lifeCycleMethods";
import EffectHook from "./effectHook";
import { EffectHookMouse } from "./effectHook";
import { EffectHookTimer } from "./effectHook";
import { ReactCreate } from "./functionComponent";
import ReduxReact from "../redux-react/src/reduxReact";
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
   {/* <Count2/>  */}
{/* <Obj/> */}
{/* <TodoApp/> */}
{/* <LifeCycleMethods/> */}
{/* <EffectHook/> */}
{/* <EffectHookMouse/> */}
{/* <EffectHookTimer/> */}
{/* <ReactCreate/> */}
<ReduxReact/>
  </>
  )
  }







