import React from 'react'
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom'
const Login = ()=>{
    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    },[])
    const handlelogin= async ()=>{
        console.log("email,password",email,password)
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body :JSON.stringify({email,password}),
            headers:{'content-type':'application/json'}
        });
        result = await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/')
        }else{
            alert("please enter connect details")
        }

    }
    return(
        <div>

            <div className='login'>
                <h1>Login</h1>
                <input type="text" className='inputBox' placeholder='Enter Email'
                value = {email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" className='inputBox' placeholder='Enter password'
                value = {password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className='btn' type='button' onClick={handlelogin}>login</button>
            </div>
        </div>
    )
}
export default Login;