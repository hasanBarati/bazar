import React from 'react'
import HeaderSlider from './headerslider/headerslider'
import Content from './content/content'
import {connect} from 'react-redux'

const HomePage=({data})=>{
    return(
        <div>

             <HeaderSlider/>
             {data.map(({id,...otherdata})=>
              
              <Content key={id} {...otherdata}/>
              )}
           
        </div>
    )
}
const mapStateToProps=state=>({
  data:state.shop.shopdata? Object.keys(state.shop.shopdata).map(key=>state.shop.shopdata[key]):[]
  
})
export default connect(mapStateToProps)(HomePage)