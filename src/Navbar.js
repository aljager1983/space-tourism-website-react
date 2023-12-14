import { Link } from "react-router-dom";
import logo from "./assets/shared/logo.svg";
import burger from "./assets/shared/icon-hamburger.svg";

const Navbar = () => {

    
    return ( 
        <div>
            <div className="logo">
                <img src={logo} alt="star-logo" className="logo-icon" />  
                <hr className="hr-nav"/>
            </div>
       
            <nav className="navbar">
                <Link to="/" className="navitems" id="link-home"><span className="bold">00</span><span>HOME</span></Link>
                <Link to="/destination"  className="navitems" id="link-destination"><span className="bold">01</span><span>DESTINATION</span></Link>
                <Link to="/crew"  className="navitems" id="link-crew"><span className="bold">02</span><span>CREW</span></Link>
                <Link to="/technology"  className="navitems" id="link-tech"><span className="bold">03</span><span>TECHNOLOGY</span></Link>
            </nav>
            <img src={burger} alt="burger icon" className="burger"/>
        </div>
     );
}
 
export default Navbar;