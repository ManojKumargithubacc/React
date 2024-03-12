import { NavLink,Link } from "react-router-dom";
export function Navbar(){
    return(
<nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">Aboutus</NavLink>
    <Link to="/*"></Link>


</nav>)
}