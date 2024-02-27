import { NavLink } from "react-router-dom";
export function Navbar(){
    return(
<nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">Aboutus</NavLink>

</nav>)
}