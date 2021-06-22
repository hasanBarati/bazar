import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart-action'
import './singleproduct.style.css'
const SingleProduct=({location,addItem,data})=> {

   //const location = useLocation()
    const {id,category,imgurl,name,price} =location.state;
    const findproduct=data[location.state.category].items.filter(item=>item.category==location.state.category).find(item=>item.name!=location.state.name)

    console.log(findproduct)
    return (
        <div className='row'>
            <div className="productinfo col-md-6 bg-white p-5 text-end">
                 <h4 className="name ">{name}</h4> 
                 <p className="price ">{price}</p>
                 <p className="discript">
                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                 </p>
                 <button className="buy btn btn-light mt-2 float-start" onClick={()=>addItem(location.state)}>
                  <span className="decrease d-none">-</span>   افزودن به سبد خرید   <span className="increase">+</span>
                 </button>
            </div>
            <div className="productimg col-md-6 bg-white">
                <img src={imgurl} />
                
             </div>
             

            {/* <div className="row">
            {findproduct.map(item=>
                 <p>{item.name}</p> 
                
                )}
            </div> */}
        </div>
    )
}
const mapStateToProps=state=>({
    data:state.shop.shopdata
})
const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})



  
export default connect (mapStateToProps,mapDispatchToProps)(SingleProduct)





