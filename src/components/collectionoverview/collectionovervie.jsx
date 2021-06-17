import React from 'react'
import {connect} from 'react-redux'
import Card from '../../page/shop/card/card.component'
import {selectCollectionForOverview} from '../../redux/shop/shop-selector'
import {createStructuredSelector} from 'reselect'
const CollectionOverview=({isLoading,data})=> {
  
    return (
       
         <div className="row m-4">
            {data.map(({id,...otherprops})=>(
            <Card  key={id} {...otherprops}/>
            ))}
         </div>
        
    )
}
const mapStateToProps=state=>({
    data:state.shop.shopdata? Object.keys(state.shop.shopdata).map(key=>state.shop.shopdata[key]):[]
    
})
// const mapStateToProps=createStructuredSelector({
//     data: selectCollectionForOverview
// })
export default connect(mapStateToProps)(CollectionOverview)
