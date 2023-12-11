import React, { useState, useEffect } from 'react';

const Destination = () => {

    const [destinationsData, setDestinationsData] = useState([0]);
    const [destinationName, setDName] = useState();
    const [destinationDescription, setDDescrip] = useState();
    const [destinationDistance, setDDistance] = useState();
    const [destinationTraveTime, setDTravelTime] = useState();
    const [planet, setPlanet] = useState("moon");
    // const [img, setImg] = useState();
    // const [isPending, setIsPending] = useState(true);
    const con = (e) => {
        const d = destinationsData[e.target.id];
        const dname = d.name;
        setPlanet(dname.toLowerCase());
        setDName(dname);
        setDDescrip(d.description);
        setDDistance(d.distance);
        setDTravelTime(d.travel);
    };
    useEffect(() => {
        fetch('http://localhost:8000/destinations')
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
            // setIsPending(false);
        })
        .catch(err => {
            // setIsPending(true);
            console.log(err.message);
        })
    }, []);
    
    return ( 
        <div className="destination">
            <div className="left">
                <h1 className="sml-txt">01 PICK YOUR DESTINATION</h1>
                <img src={require(`./assets/destination/image-${planet}.png`)} alt={`bright side of ${planet}`} className='preview'/>
               
            </div>
            <div className="right">
                <div className="links">
                    <h2 onClick={con} id="0">MOON</h2>
                    <h2 onClick={con} id="1">MARS</h2>
                    <h2 onClick={con} id="2">EUROPA</h2>
                    <h2 onClick={con} id="3">TITAN</h2>
                </div>
                <div className="name">
                    <h2 className="lg-txt">{destinationName}</h2> 
                </div>
                

                <div>
                    <p className='descripTxt'>{destinationDescription}</p> 
                </div>
                 
              
                    <hr className='hr-divider'/>
                <div className="stats ">
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