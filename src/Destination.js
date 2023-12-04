import React, { useState, useEffect } from 'react';

const Destination = () => {

    const [destinationsData, setDestinationsData] = useState([0]);
    const [d, setD] = useState(0);
    const [destinationName, setDName] = useState();
    const [destinationDescription, setDDescrip] = useState();
    const [destinationDistance, setDDistance] = useState();
    const [destinationTraveTime, setDTravelTime] = useState();
    const [planet, setPlanet] = useState("moon");
    // console.log(destinationsData[0].images.png);
    const con = (e) => {
        const d = destinationsData[e.target.id];
        setD(d);
        const dname = d.name;
        setPlanet(dname.toLowerCase());
        setDName(dname);
        setDDescrip(d.description);
        setDDistance(d.distance);
        setDTravelTime(d.travel);
    };
    useEffect(() => {
        const abortCont = new AbortController();
        fetch('data.json',  {signal : abortCont.signal})
        .then(res => {
        if(!res.ok){        //error throwing
            throw Error('could not fetch the data for that resource');
          }
          return  res.json();
        })
        .then(data => {
            setDestinationsData(data);
            setDName(data[0].name);
            setDDescrip(data[0].description);
            setDDistance(data[0].distance);
            setDTravelTime(data[0].travel);
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
                <img src={require(`./assets/destination/image-${planet}.png`)} alt={`bright side of ${planet}`} />
            </div>
            <div className="destination-right">
                <div className="destination-links">
                    <h2 onClick={con} id="0">Moon</h2>
                    <h2 onClick={con} id="1">Mars</h2>
                    <h2 onClick={con} id="2">Europa</h2>
                    <h2 onClick={con} id="3">Titan</h2>
                </div>
                <div className="destination-name">
                    <h2>{destinationName}</h2> 
                </div>
                

                <div className="description">
                    <p>{destinationDescription}</p> 
                </div>
                 
              
                    <hr />
                <div className="destination-stats">
                    <div className="avg-distance">
                        <h2>AVG. DISTANCE</h2>
                        <h3>{destinationDistance}</h3>
                    </div>
                    <div className="est-trave-time">
                        <h2>EST. TRAVEL TIME</h2>
                        <h3>{destinationTraveTime}</h3>
                    </div>
                </div>
                
            </div>
        </div>
        
     );
}
 
export default Destination;

//npx json-server --watch data/data.json --port 8000
//above line is to run json server