import React,{useEffect} from 'react'
import HeaderSlider from './headerslider/headerslider'
import Content from './content/content'
import {connect} from 'react-redux'
import {fetchStart} from '../../redux/shop/shop-actions'
const HomePage=({data,fetchStart})=>{


  useEffect(()=>{
    fetchStart()

  },[fetchStart] )
  
    return(
        <div className="mt-5">

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
const mapDispatchToProps=dispatch=>({
  fetchStart:()=>dispatch(fetchStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)