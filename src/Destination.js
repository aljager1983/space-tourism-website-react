import moon from "./assets/destination/image-moon.png"
const Destination = () => {
    return ( 
        <div className="destination">
            <div className="destination-left">
                <h1>01 PICK YOUR DESTINATION</h1>
                <img src={moon} alt="bright side of moon" />
            </div>
            <div className="destination-right">
                <div className="destination-links">
                    <h2>Moon</h2>
                    <h2>Mars</h2>
                    <h2>Europa</h2>
                    <h2>Titan</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Destination;