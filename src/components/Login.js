import React from 'react'
import "./css/Login.css"

function Login() {
    return (
        <div className="login">
            <form >    
                <label>Email</label>  
                <br/>  
                <input type="text" name="email" id="email" placeholder="Email"/>    
                <br/><br/>    
                <label>Password</label>    
                <input type="Password" name="Pass" id="Pass" placeholder="Password"/>    
                <br/><br/>    
                <input type="submit" name="log" id="log" value="Log In Here"/>       
                <br/><br/>       
            </form>    
        </div>
    );
}

export default Login
