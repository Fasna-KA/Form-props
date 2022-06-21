import React from 'react'
import './styling.css'


function Back(props) {
  const { Name, Department, Rating } = props;

  return (
    <div>

        <div className='BOX' style={{display: "flex",justifyContent: "space-around",flexWrap: "wrap"}}>
         <div className='box'> Name:{Name} | Department:{Department} | Rating:{Rating} </div>
        </div>


    <button onClick={props.back} >Go Back</button>
    </div>
)
}


export default Back