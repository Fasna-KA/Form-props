import React, { useState } from "react";
import "./styling.css";
import Back from './back'

function FormDisplay() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");
  const [List, setList] = useState([]);
  const [show, setShow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, department, rating);
    const data = { name, department, rating };
    // const b = document.createElement("div");

    if (name && department && rating) {
      setList((ls) => [...ls, data]);
      setName("");
      setDepartment("");
      setRating("");
      setShow(!show)

    } else {
      alert("Fill all details");
    }
  };

  const GoBack = () => {
    setShow(!show)
  };

  return (
    <div>
      {show ? (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="label">
                <label>Name : </label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' required></input>

                <label>Department : </label>
                <input type='text' value={department} onChange={(e)=>setDepartment(e.target.value)} placeholder='Department' ></input>

                <label>Rating : </label>
                <input type='number' value={rating} onChange={(e)=>setRating(e.target.value)} placeholder='Rating' required></input>

                <label>Submit</label>
                <input style={{backgroundColor:'yellow',width:'20vw' , cursor:'pointer'}} type='submit'></input>
            </div>
          </form>
        </div>
      ) : (
        // <Back feedback={List} back={GoBack} />
        <div className="BOX" style={{display: "flex",justifyContent: "space-around",flexWrap: "wrap"}}>
        {List.map((a)=> {
         return (<div className='box' > <Back Name={a.name}  Department={a.department}  Rating={a.rating} back={GoBack} /> </div>)
        })}
</div>




      )}

      {/* style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}} */}
    </div>
  );
}

export default FormDisplay;
