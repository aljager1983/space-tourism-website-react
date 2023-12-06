import React, { useState, useEffect } from 'react';

const Crew = () => {

    useEffect(() => {
        fetch('http://localhost:8000/crew')
        .then(res => {
        if(!res.ok){        //error throwing
            throw Error('could not fetch the data for that resource');
          }
          return  res.json();
        })
        .then(data => {
            
        })
        .catch(err => {
            console.log(err.message);
        })
    }, []);
    return ( 
        <div className="crew">
            <div className="crew-left">
            <h1>02 MEET YOUR CREW</h1>
                <h1>this is the left side</h1>
            </div>
            <div className="crew-right">
            <img src={require(`./assets/crew/image-anousheh-ansari.png`)} alt={`bright side of`} />
            </div>
        </div>
     );
}
 
export default Crew;