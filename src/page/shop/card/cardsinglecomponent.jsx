import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../../../redux/cart/cart-action'
import { Route,Link,withRouter,Router } from 'react-router-dom'
import SingleProduct from '../../singleproduct/singleproduct'

const CardSingle=({item,addItem,match})=> {
    const {name,price,imgurl,id,category}=item
   
    return (
    

         
        <div  className="cardsection col-md-3   p-0 bg-white ">


            <Link to={{ 
            pathname: "/singleproduct", 
            state:item
            }}>



            
            {/* <Link to={`/singleproduct`}> */}
           <div className="view zoom z-depth-2 rounded">

                <img className="w-100" src={imgurl} />
  
           </div>
          <div className="info p-3">
            <div className="prices d-flex justify-content-between">
               <span className="d-flex justify-content-end">{name}</span>
                <span className="d-flex justify-content-end">{price} </span>
                
            </div>
            </div>
           </Link> 
              <button className="buy btn btn-light mt-2 mb-4" onClick={()=>addItem(item)}>
                  <span className="decrease d-none">-</span>   افزودن به سبد خرید   <span className="increase">+</span>
            </button>
           
     
        
      
           
          
        </div>  
       
      
    )
    
}

const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})
export default withRouter (connect(null,mapDispatchToProps)(CardSingle))
