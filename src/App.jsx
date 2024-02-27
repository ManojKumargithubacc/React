import Message,{ListGroup,Hook,MyButton} from "./functionComponent";
import Demo,{Welcome} from "./classComponent";
import { Forms } from "./forms";
export default function App(){
  return (<>
  <Message greet="Welcome" exc="!!"/>
  <MyButton/>
  <ListGroup/>
  <Demo name="Class Component"/>
  <Hook/>
  <Welcome name="Mern"/>
  <Forms/>
  </>);
  }







