import Message,{ListGroup,Hook,MyButton} from "./functionComponent";
import Demo,{Statechange, Welcome} from "./classComponent";
import { Forms } from "./forms";
import { Counter } from "./counter";
import Count, { Count2, Obj } from "./Hooks/stateHook";
import TodoApp from "./Todolist";
import LifeCycleMethods from "./lifeCycleMethods";
import EffectHook from "./Hooks/effectHook";
import { EffectHookMouse } from "./Hooks/effectHook";
import { EffectHookTimer } from "./Hooks/effectHook";
import { ReactCreate } from "./functionComponent";
import MemoHook from "./Hooks/memoHook";
import GrandParent from "./Context/grandParent";
import ContextHook from "./Hooks/contexthook/contextHookgrandparent";
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
{/* <MemoHook/> */}
{/* <GrandParent/> */}
<ContextHook/>
  </>
  )
  }







