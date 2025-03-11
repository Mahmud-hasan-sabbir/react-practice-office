
import './Header.css';
import {NavLink , Link} from "react-router-dom";
import Registration from './Registration';


function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
         <div class="container">
           <Link class="navbar-brand text-white" to="/">Navbar</Link>
           
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white" style={{gap: "15px", marginLeft: "300px"}}>
               <li class="nav-item">
                 <NavLink class="nav-link active text-white" to="/">Home</NavLink>
               </li>
               <li class="nav-item">
                 <NavLink class="nav-link text-white" to="/about">About</NavLink>
               </li>
               <li class="nav-item">
                 <NavLink class="nav-link text-white" to="/Pragment">Pragment</NavLink>
               </li>
               <li class="nav-item">
                 <NavLink class="nav-link text-white" to="/Clipboard">Clipboard</NavLink>
               </li>
               <li class="nav-item">
                 <NavLink class="nav-link text-white" to="/Keybord">Keybord</NavLink>
               </li>
               <li class="nav-item">
                 <NavLink class="nav-link text-white" to="/Website">Website</NavLink>
               </li>
               <li class="nav-item">
                 <NavLink class="nav-link text-white" to="/Registration">Registration</NavLink>
               </li>
             </ul>
             <form class="d-flex">
               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
               <button class="btn btn-outline-success text-white" type="submit">Search</button>
             </form>
           </div>
         </div>
       </nav>
    );
}

export default Header;