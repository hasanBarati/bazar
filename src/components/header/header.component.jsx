import React from 'react'
import {Link} from 'react-router-dom'
import './header.style.css'
const Header=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container"> 
        
        <div className="collapse navbar-collapse  flex-grow-0" id="navbarNav">
            <ul className="navbar-nav ">
                       <li className="nav-item"><Link to="/" className="nav-link">خانه</Link></li>
                       <li className="nav-item"><Link to="/shop" className="nav-link">فروشگاه</Link></li>
                       <li className="nav-item"><Link to="/creativity" className="nav-link">تماس با ما</Link></li>
                 
            </ul>
          </div>
          <Link to="/" className="navbar-brand" >logo</Link>
         
        
          </div>
        </nav>
        
        
            )
           
}

export default Header