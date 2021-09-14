import React from 'react';
import "./css/Register.css"

function Register() {
    return (
        <div className="register">
            <form >    
                <label>email</label>
                <br/>    
                <input type="text" name="email" id="email" placeholder="email"/>    
                <br/><br/>    
                <label>Password</label>    
                <input type="Password" name="Pass" id="Pass" placeholder="Password"/>    
                <br/><br/>
                <label>Repeat Password</label>    
                <input type="Password" name="Pass" id="Pass" placeholder="Password"/>    
                <br/><br/>     
                <input type="submit" name="log" id="log" value="Register"/>       
                <br/><br/>       
            </form>    
        </div>
    )
}

export default Register
