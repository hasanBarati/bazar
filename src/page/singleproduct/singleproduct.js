import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart-action'
const SingleProduct=({location,addItem})=> {

   //const location = useLocation()
    const {id,category,imgurl,name,price} =location.state;


    console.log(location.state)
    return (
        <div className='row'>
            <div className="col-md-6 bg-white">
                 <p className="name">{name}</p> 
                 <p className="price">{price}</p>
                 <p className="discript">
                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                 </p>
                 <button className="buy btn btn-light mt-2" onClick={()=>addItem(location.state)}>
                  <span className="decrease d-none">-</span>   افزودن به سبد خرید   <span className="increase">+</span>
                 </button>
            </div>
            <div className="col-md-6 bg-white">
                <img src={imgurl} />
             </div>
           <h1>single</h1> 
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})



  
export default connect (null,mapDispatchToProps)(SingleProduct)





// import React,{useEffect} from 'react'
// import {connect} from 'react-redux'


// import {fetchStart} from '../../redux/shop/shop-actions'
// const SingleProduct=({match,data,fetchStart})=> {
//     console.log(match)
//     useEffect(()=>{
//         fetchStart()
   
//       },[fetchStart])
//     return (
//         <div>
//            <h1>single</h1> 
//         </div>
//     )
// }
// // const mapStateToProps=(state,{match})=>({
// //     data:state.shop.shopdata
    
// //   })


//   const mapStateToProps=state=>({
//     data:state.shop.shopdata? Object.keys(state.shop.shopdata).map(key=>state.shop.shopdata[key]):[],
//     isFetching:state.shop.isFetching
   
// })
// const mapDispatchToProps=dispatch=>({
//     fetchStart:()=>dispatch(fetchStart())
// })


  
// export default connect (mapStateToProps,mapDispatchToProps)(SingleProduct)





