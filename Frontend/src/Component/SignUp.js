import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SingUp = ()=>{

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    },[])
    const collectData =  async() =>{
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify({name,email,Password}),
            headers:{
                'content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log( result);
        localStorage.setItem("user",JSON.stringify(result));
        if(result)
        {
            navigate('/')
        }
    
    }
    return(
        <div className="singup">
            <h1>Register</h1>
            <input className=" inputBox" type="text" value = { name } onChange={ (e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input className=" inputBox" type="text" value = { email } onChange={ (e)=>setEmail(e.target.value)}  placeholder="Enter Email"/>
            <input className=" inputBox" type="Password" value = { Password } onChange={ (e)=>setPassword(e.target.value)}  placeholder="Enter Password"/>
            <button className="btn" type="button" onClick={collectData}>Sing up</button>
        </div>
    )
}
export default SingUp;

// Video no--12
// keep usser data in localStorage
// make private Component
// handle signup page with localStorage
//  update navbar for with logout and signup menu