import React, { useState, useEffect } from 'react';



const Technology = () => {
    const [data, setData] = useState();
    const [imagePrev, setImagePrev] = useState("launch-vehicle");
    const [winSize, setWinSize] = useState("portrait");
    const [label1, setLabel1] = useState();
    const [label2, setLabel2] = useState();

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
            setLabel2(data[0].description);
        })
        .catch()

    }, []);

    const call = (e) => {
        const x = e.target.id;
        const y = e.target.tabIndex;
        setImagePrev(x);
        setLabel1(data[y].name);
        setLabel2(data[y].description);
    }
    return ( 
        <div className="technology">

            <div className="left">
                <h1 className="sml-txt">03 SPACE LAUNCH 101</h1>
                <div className="navNumDots">
                    <h2 id="launch-vehicle" tabIndex="0" onClick={call}>1</h2>
                    <h2 id="spaceport" tabIndex="1" onClick={call}>2</h2>
                    <h2 id="space-capsule" tabIndex="2" onClick={call}>3</h2>
                </div>
                <h2>THE TERMINOLOGY</h2>
                <h2>{label1}</h2>
                <p>{label2}</p>
            </div>

            <div className="right">
                <img src={require(`./assets/technology/image-${imagePrev}-${winSize}.jpg`)} alt='bright side of' className='preview'/>  
            </div>
        </div>
     );
}
 
export default Technology;