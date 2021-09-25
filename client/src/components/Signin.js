import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Signin = () => {
    const [user,setUser] = useState({
        email:"", password:""
    });
    const history = useHistory();

    const handleInputs = (e) =>{
        let x = e.target.name;
        let y = e.target.value;
        setUser({
            ...user,[x]:y
        })
    }
    const verifyData = async (e) =>{
        e.preventDefault();
        const {email, password} = user;
        const res = await fetch("/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email, password })
        })
        const data = await res.json
        if(res.status === 422 || !data){
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        } else {
            window.alert("Login Successful");
            console.log("Login Successful");
            history.push("/");
        }

    }

    return (
        <div className="container container_position bg-warning">
            <h1 className="text-center">Login page</h1>
            <hr />
            <form method="POST">
            <input name="email" value={user.email} placeholder="your email" onChange={handleInputs} />
            <hr />
            <input name="password" value={user.password} placeholder="your password" onChange={handleInputs} />
            <hr />
            <button type="submit" onClick={verifyData}>Login</button>
            </form>
        </div>
    )
}

export default Signin;
