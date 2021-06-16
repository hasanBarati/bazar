import React from 'react'
import {connect} from 'react-redux'
import Card from '../../page/shop/card/card.component'
function CollectionOverview({isLoading,data}) {
    console.log(isLoading)
    return (
       
         <div className="row m-4">
            {data?data.map(({id,...otherprops})=>
            <Card  key={id} {...otherprops}/>
            ):console.log('null')}
         </div>
        
    )
}
const mapStateToProps=state=>({
    data:state.shop.shopdata? Object.keys(state.shop.shopdata).map(key=>state.shop.shopdata[key]):[]
    
})
export default connect(mapStateToProps)(CollectionOverview)
