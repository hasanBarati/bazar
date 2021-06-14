import React from 'react'
import './shop.style.css'
import { Link,Route } from 'react-router-dom'
import Fruit from '../../assests/svg/fruit.svg'
import Card from './card/card.component'
import Category from './category/category.component'
import Data from '../../data'
const Shop=({match})=>{
    const viewdata= Object.keys(Data).map(key=>Data[key])
   
    return(
        <div className="row mb-4">
            <div className="col-md-9 mb-4">
                <div className="row m-4">
                    {viewdata.map(({id,...otherprops})=>
                        


                       <Route exact path={`${match.path}`} render={()=><Card key={id} {...otherprops}/>}  />




                        // <Card key={id} {...otherprops} />
                        
                        )}
                    

                </div>
                
                
            </div>
            <div className="col-md-3 mb-4">
                <div className="row m-4">
                {viewdata.map(({id,title})=>
                    <div className="col-md-5 bg-white m-1 p-3">
                    <Link to={`${match.path}/category/${title}`}>
                            
                        
                        <div className="icon">
                        <img src={Fruit} width="100" height="50" /> 
                         
                        </div>
                        <p className="text-center mt-2">{title}</p>
                    </Link>  
                    </div>
                    )}
           
                   
                    
                </div>
                    
            </div>
           
            
       
            <Route path={`${match.path}/:category/:title`} component={Category}/>
        </div>
        
    )
   
  
}

export default Shop