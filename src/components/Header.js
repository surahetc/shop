import React from 'react';
import {Link} from 'react-router-dom'
import "../css/Header.css"

function Header() {
    return (
       <header>
           <div className="logo">
               <h1><Link to ="/">Grocer</Link></h1>
           </div>

           <nav>
               <ul>
                   <li><Link to="/login">Login</Link></li>
                   <li><Link to="/register">Register</Link></li>
               </ul>
               <div className="cart-img">
                   <span>0</span>
                   <Link to="/cart">
                        <img src="./../../imgs/cart.png" alt="cart-img" width="20"></img>
                   </Link>
                   
               </div>
            </nav>
       </header>
    )
}

export default Header
