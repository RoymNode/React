import React from 'react';
import './PersonCard.css';
function PersonCard(props:{fname: string, lname: string, pic: string}) {
  return (
    <div className='person-card'>
        <h1>{props.fname}</h1>
        <h2>{props.lname}</h2>
        <img src={props.pic} alt="Person Pic" />  
    </div>
  )
}

export default PersonCard