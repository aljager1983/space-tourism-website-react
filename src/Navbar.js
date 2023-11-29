const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navitems" id="link-home"><span className="bold">00</span><span>HOME</span></div>
            <div className="navitems" id="link-destination"><span className="bold">01</span><span>DESTINATION</span></div>
            <div className="navitems" id="link-crew"><span className="bold">02</span><span>CREW</span></div>
            <div className="navitems" id="link-tech"><span className="bold">03</span><span>TECHNOLOGY</span></div>
        </div>
     );
}
 
export default Navbar;