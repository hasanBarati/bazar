import React,{useEffect} from 'react'
import './shop.style.css'
import { Link,Route } from 'react-router-dom'
import Fruit from '../../assests/svg/fruit.svg'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching,selectIsCollectionsLoaded} from '../../redux/shop/shop-selector'
import Category from './category/category.component'
import {connect} from 'react-redux'
import Data from '../../data'
import {fetchStart} from '../../redux/shop/shop-actions'
import WithSpinner from '../../components/withspinner/whitspinner'
import CollectionOverview from '../../components/collectionoverview/collectionovervie'
const Collectionoverviewswithspinner= WithSpinner(CollectionOverview)
const Shop=({match,fetchStart,data,isCollectionsFetching})=>{
 
    /*useEffect(()=>{
        AddCollectionAndDoc ('collections',viewdata.map(({title,items})=>({title,items})))
       })*/

     useEffect(()=>{
       fetchStart()
  
     },[fetchStart] )
  const viewdata= Object.keys(Data).map(key=>Data[key])
    
    return(
       
             <div className="row mb-4">
               <div className="col-md-9 mb-4">
                 
                      <Route exact path={`${match.path}`} render={(props)=><Collectionoverviewswithspinner  isLoading={isCollectionsFetching} {...props}/>}  /> 
                      <Route path={`${match.path}/:category/:title`} component={Category}/>
               
                      
            </div>
            <div className="col-md-3 mb-4">
                <div className="row m-4">
                {data?data.map(({id,title})=>
                    <div className="col-md-5 bg-white m-1 p-3">
                    <Link to={`${match.path}/category/${title}`}>
                            
                        
                        <div className="icon">
                        <img src={Fruit} width="100" height="50" /> 
                         
                        </div>
                        <p className="text-center mt-2">{title}</p>
                    </Link>  
                    </div>
                    ):null}
           
                   
                    
                </div>
                    
            </div>
           
            
       
          
        </div>
        
    )
   
  
}


// const mapStateToProps=createStructuredSelector({
//     isCollectionsFetching:selectIsCollectionFetching
//    //isCollectionsLoaded:selectIsCollectionsLoaded
//   })
const mapStateToProps=state=>({
    data:state.shop.shopdata? Object.keys(state.shop.shopdata).map(key=>state.shop.shopdata[key]):[],
    isFetching:state.shop.isFetching
   
})
const mapDispatchToProps=dispatch=>({
    fetchStart:()=>dispatch(fetchStart())
})
export default connect (mapStateToProps,mapDispatchToProps)(Shop)