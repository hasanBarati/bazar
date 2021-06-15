import React from 'react'
import {connect} from 'react-redux'
import Card from '../../page/shop/card/card.component'
function CollectionOverview({isLoading,data}) {
    return (
        <div className="col-md-9 mb-4">
         <div className="row m-4">
            {data?data.map(({id,...otherprops})=>
            <Card  key={id} {...otherprops}/>
            ):null}
         </div>
        </div>
    )
}
const mapStateToProps=state=>({
    data:state.shop.shopdata? Object.keys(state.shop.shopdata).map(key=>state.shop.shopdata[key]):null
})
export default connect(mapStateToProps)(CollectionOverview)
