import React, { useState, useEffect } from 'react';



const Technology = () => {
    const [data, setData] = useState();
    const [imagePrev, setImagePrev] = useState("launch-vehicle");
    const [winSize, setWinSize] = useState("portrait");
    const [label1, setLabel1] = useState();
    const [label2, setLabel2] = useState();
    const docWidth = document.documentElement.clientWidth;
    const docHeight = document.documentElement.clientHeight;

    useEffect(() => {
        fetch('data.json')
        .then(res => {
            if(!res.ok){        //error throwing
                throw Error('could not fetch the data for that resource');
              }
              console.log("fetch has been triggered");
              return  res.json();
        })
        .then(data => {
            setData(data.technology);
            setLabel1(data.technology[0].name);
            setLabel2(data.technology[0].description);
        })
        .catch(err => {
            console.log(err.message);
        })

        //setting portrait or landscape
        if(docWidth >= 377) {
            setWinSize("portrait");
            
        } else {
            setWinSize("landscape");
        }
    }, [docWidth]);

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
                <div className="details">
                <div className="navNumDots">
                    <h2 id="launch-vehicle" tabIndex="0" onClick={call}>1</h2>
                    <h2 id="spaceport" tabIndex="1" onClick={call}>2</h2>
                    <h2 id="space-capsule" tabIndex="2" onClick={call}>3</h2>
                </div>
                <div className="sub-details">
                    <h1>THE TERMINOLOGY...</h1>
                    <h2>{label1}</h2>
                    <p className='descripTxt'>{label2}</p>
                    </div>
                </div>
            </div>

            <div className="right">
                <img src={require(`./assets/technology/image-${imagePrev}-${winSize}.jpg`)} alt='bright side of' className='preview'/>  
            </div>
        </div>
     );
}
 
export default Technology;