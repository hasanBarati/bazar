import React from 'react'
import { Link,Route } from 'react-router-dom'
function Category({match}) {
    
    return (
        <div>dd
               <Route path={`${match.path}/:category`} component={Category}/>
        </div>
    )
}

export default Category
