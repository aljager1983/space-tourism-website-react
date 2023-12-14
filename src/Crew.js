import React, { useState, useEffect } from 'react';

const Crew = () => {
    const [data, setData] = useState();
    const [imagePrev, setImagePrev] = useState("douglas-hurley");
    const [label1, setLabel1] = useState();     //role
    const [label2, setLabel2] = useState();     //name
    const [label3, setLabel3] = useState();      //bio
    
    
    const call = (e) => {
        const callId = e.target.id;
        const index = e.target.tabIndex;
        setImagePrev(callId);
        setLabel1(data[index].role);
        setLabel2(data[index].name);
        setLabel3(data[index].bio);
    
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
            // console.log(data);
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
            <div className="left">
            <h1 className="sml-txt">02 MEET YOUR CREW</h1>
            <h2 className='role'>{label1}</h2>
            <h2 className='name'>{label2}</h2>
            <p className='descripTxt'>{label3}</p>
            <div className='navDots'>
                <div onClick={call} id="douglas-hurley" tabIndex="0" ></div>
                <div onClick={call} id="mark-shuttleworth" tabIndex="1" ></div>
                <div onClick={call} id="victor-glover" tabIndex="2" ></div>
                <div onClick={call} id="anousheh-ansari" tabIndex="3" ></div>
            </div>
            </div>
            <div className="right">
            <img src={require(`./assets/crew/image-${imagePrev}.png`)} alt='bright side of' className='preview'/>  
            </div>
        </div>
     );
}
 
export default Crew;