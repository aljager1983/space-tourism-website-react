import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import logo from "./assets/shared/logo.svg";
import burger from "./assets/shared/icon-hamburger.svg";

const Navbar = () => {
    const [toggle, setToggle] = useState();
    const [navStyle, setNavStyle]  = useState();
    const [burgStyle, setBurgStyle] = useState();
    const docWidth = window.innerWidth;
    const docHeight = window.innerHeight;
    
    useEffect(() => {
        if(docWidth >= 413) {
            setNavStyle("flex");
            setBurgStyle("none");
        } else {
            setNavStyle("none")
            setBurgStyle("flex");
        }
    }, [docWidth, toggle])

    const hide = () => {
        // setNavStyle("flex");
        setNavStyle("flex");
        setBurgStyle("none");
        
    }

    const clickToggle = () => {
        setToggle(x => !x);
    }
    
    return ( 
        <div>
            <div className='docWidth'>{docWidth}x{docHeight}</div>
            <div className="logo">
                <img src={logo} alt="star-logo" className="logo-icon" />  
                <hr className="hr-nav"/>
            </div>
       
            <nav className="navbar" style={{display: `${navStyle}` }}>
                <Link to="/" className="navitems" id="link-home" onClick={clickToggle}><span className="bold">00</span><span>HOME</span></Link>
                <Link to="/destination"  className="navitems" id="link-destination" onClick={clickToggle}><span className="bold">01</span><span>DESTINATION</span></Link>
                <Link to="/crew"  className="navitems" id="link-crew" onClick={clickToggle}><span className="bold" >02</span><span>CREW</span></Link>
                <Link to="/technology"  className="navitems" id="link-tech" onClick={clickToggle}><span className="bold" >03</span><span>TECHNOLOGY</span></Link>
            </nav>
            <img src={burger} alt="burger icon" className="burger" onClick={hide} style={{display: `${burgStyle}` }}/>
        </div>
     );
}
 
export default Navbar;