import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [users,setUsers] = useState({
        name:"", work:"", phone:"", email:"", password:"", cpassword:""
    })

    const history = useHistory();

    const handleInputs = (e) => {
        let x = e.target.name;
        let y = e.target.value;
        setUsers({
            ...users, [x]:y
        })
    }
    const postData =async (e)=>{
        const {name, email, phone, work, password, cpassword} = users;
        const res = await fetch("/register", {
            method:"POST",
            headers:{
                "COntent-Type":"application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })     
        })
        const data = await res.json();
        if(res.status === 422 || !data){
            window.alert("Registration failed");
            console.log("Registration failed");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");
            history.push("/signin");
        }
    }

    return (
        <>
          <div className="container bg-warning container_position">
            <h1 className="text-center">Sign Up</h1>
            <hr />
            <input name="name" value={users.name} placeholder="your name" onChange={handleInputs}/>
            <hr />
            <input name="email" value={users.email} placeholder="your email" onChange={handleInputs}/>
            <hr />
            <input name="phone" value={users.phone} placeholder="your phone" onChange={handleInputs}/>
            <hr />
            <input name="work" value={users.work} placeholder="your work" onChange={handleInputs}/>
            <hr />
            <input name="password" value={users.password} placeholder="your password" onChange={handleInputs}/>
            <hr />
            <input name="cpassword" value={users.cpassword} placeholder="your cpassword" onChange={handleInputs}/>
            <hr />
            <button type="submit" onClick={postData}>Register</button>
            <hr />
          </div>
        </>
    )
}

export default Signup
