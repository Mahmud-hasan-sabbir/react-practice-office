
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
         <div class="container">
           <a class="navbar-brand text-white" href="#">Navbar</a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white" style={{gap: "15px", marginLeft: "450px"}}>
               <li class="nav-item">
                 <Link class="nav-link active text-white" to="/">Home</Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link text-white" to="/about">About</Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link text-white" to="/Pragment">Pragment</Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link text-white" to="/Clipboard">Clipboard</Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link text-white" to="/Keybord">Keybord</Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link text-white" to="/Website">Website</Link>
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