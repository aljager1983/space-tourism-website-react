import moon from "./assets/destination/image-moon.png"
import React, { useState, useEffect } from 'react';

const Destination = () => {

    const [destinations, setDestinations] = useState([]);
    const [d, setD] = useState(0);
    const con = (e) => setD(destinations[e.target.id]);
    const img = JSON.stringify(d.images.png);
    useEffect(() => {
        const abortCont = new AbortController();
        fetch('http://localhost:8000/destinations',  {signal : abortCont.signal})
        .then(res => {
        if(!res.ok){        //error throwing
            throw Error('could not fetch the data for that resource');
          }
          return  res.json();
        })
        .then(data => {
            setDestinations(data);
            
        })
        .catch(err => {
            console.log(err.message);
        })
        return () => abortCont.abort();
    }, []);
    
    return ( 
        <div className="destination">
            <div className="destination-left">
                <h1>01 PICK YOUR DESTINATION</h1>
                <img src={ require({img}) } alt="bright side of moon" />
            </div>
            <div className="destination-right">
                <div className="destination-links">
                    <h2 onClick={con} id="0">Moon</h2>
                    <h2 onClick={con} id="1">Mars</h2>
                    <h2 onClick={con} id="2">Europa</h2>
                    <h2 onClick={con} id="3">Titan</h2>
                </div>
                <div className="destination-name">
                <h2>{d.name}</h2> 
                <p>{d.description}</p> 
                </div>
                <div className="description"></div>
                <hr />
                <div className="destination-stats"></div>
            </div>
        </div>
     );
}
 
export default Destination;

//npx json-server --watch data.json --port 8000
//above line is to run json server