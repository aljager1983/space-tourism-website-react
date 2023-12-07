import React, { useState, useEffect } from 'react';

const Crew = () => {
    const [data, setData] = useState();
    const [imagePrev, setImagePrev] = useState();
    const [label1, setLabel1] = useState();     //role
    const [label2, setLabel2] = useState();     //name
    const [label3, setLabel3] = useState();      //bio
    const [bgcolor, setBgColor] = useState();
    
    const call = (e) => {
       
    
    }
    useEffect(() => {
        fetch('http://localhost:8000/crew')
        .then(res => {
        if(!res.ok){        //error throwing
            throw Error('could not fetch the data for that resource');
          }
          console.log("fetch has been triggered");
          return  res.json();
          
        })
        .then(data => {
            console.log(data);
            setData(data);
            setLabel1(data[0].role);
            setLabel2(data[0].name);
            setLabel3(data[0].bio);
            
        })
        .catch(err => {
            console.log(err.message);
        })
    }, []);

    return ( 
        <div className="crew">
            <div className="crew-left">
            <h1>02 MEET YOUR CREW</h1>
            <h2>{label1}</h2>
            <h2>{label2}</h2>
            <p>{label3}</p>
            <div className='navDots'>
                <div onClick={call} id="0" tabIndex="1"></div>
                <div onClick={call} id="1" tabIndex="2"></div>
                <div onClick={call} id="2" tabIndex="3"></div>
                <div onClick={call} id="3" tabIndex="4"></div>
            </div>
            </div>
            <div className="crew-right">
            <img src={require(`./assets/crew/image-anousheh-ansari.png`)} alt={`bright side of`} />
            </div>
        </div>
     );
}
 
export default Crew;