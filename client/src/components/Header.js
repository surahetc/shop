import React from 'react';
import {Link} from 'react-router-dom'
import "./css/Header.css"

function Header(props) {
    return (
       <header>
           <div className="logo">
               <h1><Link to ="/">Grocer</Link></h1>
           </div>

           <nav>
               <ul>
                   <li><Link to="/login">Login</Link></li>
                   <li><Link to="/register">Register</Link></li>
                   <li><Link to="/products">Products</Link></li>
                   <li><Link to="/wishlist">Wishlist</Link></li>
                   <li><Link to="/cart"><span>0</span>Cart</Link></li>
               </ul>
            </nav>
       </header>
    )
}

export default Header