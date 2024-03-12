import {Routes,Route} from "react-router-dom"
import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import Error from "./error";
function App(){
  return(
    <>
    <Navbar/> 
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="/*" element={<Error/>}/>

    </Routes>
    </>
  )
}
export default App;
