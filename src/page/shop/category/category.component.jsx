import React from 'react'
import { Link,Route } from 'react-router-dom'
import Data from '../../../data'
import Card from '../card/card.component'
function Category({match}) {
   
    
    const viewdata= Data[match.params.title].items;

   
    return (
        <div className="row  m-4">
           
                    {/* {viewdata.map(({id,...otherdata})=>
                       <Card key={id} {...otherdata}/>
                       
                   )}   */}
                  
                   <Card  items={viewdata} match={match}/>
                  
                
                       
                       
                        


            

        
        </div>
    )
}

export default Category
