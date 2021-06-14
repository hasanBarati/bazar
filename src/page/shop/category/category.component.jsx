import React from 'react'
import { Link,Route } from 'react-router-dom'
import Data from '../../../data'
import Card from '../card/card.component'
function Category({match}) {
   
    
    const viewdata= Data[match.params.title].items;

   
    return (
        <div className="row mb-4">
            <div className="col-md-9 mb-4">
                <div className="row m-4">
                    {/* {viewdata.map(({id,...otherdata})=>
                       <Card key={id} {...otherdata}/>
                       
                   )}   */}
                
                       <Card  items={viewdata}/>
                       
                        


            

                </div>    
            </div> 
        </div>
    )
}

export default Category
