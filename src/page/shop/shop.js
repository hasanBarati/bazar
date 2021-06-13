import React from 'react'
import './shop.style.css'
import { Link,Route } from 'react-router-dom'
import Fruit from '../../assests/svg/fruit.svg'

const Shop=()=>{
    return(
        <div className="row mb-4">
            <div className="col-md-9 mb-4">
                <div className="row m-4">
                    <div className="cardsection col-md-3   p-0 bg-white ">
                        <div className="view zoom z-depth-2 rounded">
                        <img className="w-100" src="https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/codfillet_u0mti1.jpg" />

                    </div>
                    <div className="info p-3">
                        <div className="prices d-flex justify-content-between">
                           <span className="d-flex justify-content-end">lemon</span>
                            <span className="d-flex justify-content-end">155 </span>
                            
                        </div>

                        <button className="buy btn btn-light mt-2"><span className="decrease d-none">-</span>   افزودن به سبد خرید   <span className="increase">+</span></button>
                    </div>
                          
                    </div> 


                    <div className="cardsection col-md-3   p-0 bg-white ">
                        <div className="view zoom z-depth-2 rounded">
                        <img className="w-100" src="https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/codfillet_u0mti1.jpg" />

                    </div>
                    <div className="info p-3">
                        <div className="prices d-flex justify-content-between">
                           <span className="d-flex justify-content-end">lemon</span>
                            <span className="d-flex justify-content-end">155 </span>
                            
                        </div>

                        <button className="buy btn btn-light mt-2"><span className="decrease d-none">-</span>   افزودن به سبد خرید   <span className="increase">+</span></button>
                    </div>
                          
                    </div> 


                    <div className="cardsection col-md-3   p-0 bg-white ">
                        <div className="view zoom z-depth-2 rounded">
                        <img className="w-100" src="https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/codfillet_u0mti1.jpg" />

                    </div>
                    <div className="info p-3">
                        <div className="prices d-flex justify-content-between">
                           <span className="d-flex justify-content-end">lemon</span>
                            <span className="d-flex justify-content-end">155 </span>
                            
                        </div>

                        <button className="buy btn btn-light mt-2"><span className="decrease d-none">-</span>   افزودن به سبد خرید   <span className="increase">+</span></button>
                    </div>
                          
                    </div> 


                    <div className="cardsection col-md-3   p-0 bg-white ">
                        <div className="view zoom z-depth-2 rounded">
                        <img className="w-100" src="https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/codfillet_u0mti1.jpg" />

                    </div>
                    <div className="info p-3">
                        <div className="prices d-flex justify-content-between">
                           <span className="d-flex justify-content-end">lemon</span>
                            <span className="d-flex justify-content-end">155 </span>
                            
                        </div>

                        <button className="buy btn btn-light mt-2"><span className="decrease d-none">-</span>   افزودن به سبد خرید   <span className="increase">+</span></button>
                    </div>
                          
                    </div> 

                    

                </div>
                
                
            </div>
            <div className="col-md-3 mb-4">
                <div className="row m-4">
               
                    <div className="col-md-5 bg-white m-1 p-3">
                    <Link to="">
                            
                        
                        <div className="icon">
                        <img src={Fruit} width="100" height="50" /> 
                         
                        </div>
                        <p className="text-center mt-2">Fruit</p>
                    </Link>  
                    </div>
                  
                    <div className="col-md-5 bg-white m-1 p-3">
                        <div className="icon">
                        <img src={Fruit} width="100" height="50" /> 
                         
                        </div>
                        <p className="text-center mt-2">Fruit</p>
                    </div>
                    
                </div>
                    
            </div>
        </div>
    )
}

export default Shop