import React, { useState, useEffect } from 'react';



const Technology = () => {
    const [data, setData] = useState();
    const [imagePrev, setImagePrev] = useState("launch-vehicle");
    const [winSize, setWinSize] = useState("portrait");
    const [label1, setLabel1] = useState();
    useEffect(() => {
        fetch('http://localhost:8000/technology')
        .then(res => {
            if(!res.ok){        //error throwing
                throw Error('could not fetch the data for that resource');
              }
              console.log("fetch has been triggered");
              return  res.json();
        })
        .then(data => {
            setData(data);
            setLabel1(data[0].name);
        })
        .catch()

    }, []);

    return ( 
        <div className="technology">

            <div className="crew-left">
                <h1>02 MEET YOUR CREW</h1>
                <div className="navNumDots">
                    <h2 id="" tabIndex="0">1</h2>
                    <h2 id="" tabIndex="1">2</h2>
                    <h2 id="" tabIndex="2">3</h2>
                </div>
                <h2>THE TERMINOLOGY</h2>
                <h2>{label1}</h2>
            </div>

            <div className="crew-right">
                <img src={require(`./assets/technology/image-${imagePrev}-${winSize}.jpg`)} alt='bright side of' />  
            </div>
        </div>
     );
}
 
export default Technology;