import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './header.style.css'
import {ReactComponent as Logo} from '../../assests/svg/bazar.svg'
const Header=()=>{
  const [show,setshow]=useState(false)

     const togglemenu=()=>{
       setshow(!show)
     }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container"> 
              
      
        
        <button onClick={togglemenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className={`${show? 'd-block w-100':'collapse navbar-collapse'}`} id="navbarNavDropdown">
            <ul className="navbar-nav ">
                       <li className="nav-item"><Link to="/" className="nav-link">خانه</Link></li>
                       <li className="nav-item"><Link to="/shop" className="nav-link">فروشگاه</Link></li>
                       <li className="nav-item"><Link to="/creativity" className="nav-link">تماس با ما</Link></li>
                 
            </ul>
          </div>
          <Link to='/'  className="navbar-brand float-end" href="#"><Logo/></Link>
         
        
          </div>
        </nav>
        
        
            )
           
}

export default Header