import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react-dom/client';

function UseEffect() {

    const [counter, setCounter] = useState(0);
    
    return (
        <>
           <Countable setcount = {setCounter} initial={counter} />
      
            
        </>
    );
}

export default UseEffect;

function Countable(props) {
    return (
        <>
            <div style={{width:'50%', margin:'Auto', marginTop:'10px',height:'100px',backgroundColor:'skyblue',textAlign:'center',paddingTop:'30px',marginTop:'30px'}}>

                <h1 id="countvalue">{props.initial}</h1>

                <button onClick={ () => props.setcount(props.initial + 1)} style={{padding:'6px',backgroundColor:'green',color:'white',border:'none',borderRadius:'15px'}}>
                Increment +
                </button>
                <button onClick={ () => props.setcount(props.initial - 1)} style={{padding:'6px', marginLeft:'15px', backgroundColor:'green',color:'white',border:'none',borderRadius:'15px'}}>
                Decrement +
                </button>
                </div>
        </>
    );
}

