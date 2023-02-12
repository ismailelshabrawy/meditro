import React, { useState } from "react";



const FormContact = ()=>{
    const [name , setname] = useState("");
    const[show , setshow] = useState(true);

    const changename = (event)=>{
        setname(event.target.value)
    }
    const FormHandler = (event) =>{
        event.preventDefault();
        // validation here
        if(name.length == ""){
            setshow(false);
            return;
        }
        console.log(name);
        setshow(true);
    }
    return(
        <form onSubmit={FormHandler}>
        <div className="form-control">
            <input placeholder="Your Name" onChange={changename} />
            {!show && <p>not empty</p>}
        </div>
        <div className="form-control">
            <input placeholder="Your Email">

            </input>
        </div>
        <div className="form-control">
        <input placeholder="Phone Numbers"> 
        </input>

        </div>
        <select>
            <option>Select Department</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
        <div className="form-control">
            <textarea placeholder="Message"></textarea>
        </div>
        <button>Submit</button>
    </form>

    )
}


export default FormContact;