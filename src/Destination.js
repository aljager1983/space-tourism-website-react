import React, { useState, useEffect } from 'react';

const Destination = () => {

    const [destinations, setDestinations] = useState([0]);
    const [d, setD] = useState(0);
    const [planet, setPlanet] = useState("moon");
    const con = (e) => {
        const d = destinations[e.target.id];
        setD(d);
        const dname = d.name;
        setPlanet(dname.toLowerCase());
    };
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
                <img src={require(`./assets/destination/image-${planet}.png`)} alt="bright side of moon" />
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

//npx json-server --watch data/data.json --port 8000
//above line is to run json server