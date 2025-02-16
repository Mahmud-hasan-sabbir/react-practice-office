
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </div>
    );
}

export default Header;