import React from 'react'
import {connect} from 'react-redux'
const SingleProduct=({match,data})=> {
    console.log(match)
    return (
        <div>
           <h1>single</h1> 
        </div>
    )
}
const mapStateToProps=(state,{match})=>({
    data:state.shop.shopdata
    
  })
export default connect (mapStateToProps)(SingleProduct)
