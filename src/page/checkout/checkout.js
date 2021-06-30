import React,{useState} from 'react'
import {connect} from 'react-redux'
import Modal from './modal/modal'
import {modal} from '../../redux/checkout/checkout-action'
import Address from './address/adress'
import DeliveryData from './delivery/deliverydata'
import Delivery from './delivery/delivery'
import './checkout.style.css'
const Checkout=({modal,hidden,datad})=> {

    const [usercredintial,setcredintial]=useState([{text:' مثال تهران، میدان انقلاب،خیابان کارگر شمالی'}])
    const [active,setactive]=useState(false)
    const [delivery,setdelivery]=useState(DeliveryData)
    const addadress=(text)=>{
 
        setcredintial([
                ...usercredintial,
                {key:Date.now(),text}  
        ])
    }

const deleteitem=(key)=>{

    const newusercredintial= usercredintial.filter(item=>item.key !== key)
    setcredintial(newusercredintial)   
}

const updatelist=(key,newtext)=>{
  
  //const finitemtoedit=usercredintial.find(item=>item.key === key)
  

  setcredintial(prev =>prev.map(item=>(item.key === key? newtext:item)));

}

const toggleactive=(itemd)=>{


    let activate=usercredintial.map(item =>{
        if(item.isCompleted===true){
            item.isCompleted=false
        }
        if (item.key === itemd.id){
           
            item.isCompleted=true
        }
       return item 
    })
    setcredintial(activate)

    
}

const toggleactiveDelivery=(itemdelivery)=>{


  let deliveryactiv=delivery.map(item=>{
       if(item.active===true){
        item.active=false
       // setactive(false)
       }
       if (item.id === itemdelivery.id){
         // console.log(item.active)
      //   setactive(!active)
          item.active=!item.active
         //  setactive(!active)
       }
     return item
    })
  setdelivery(deliveryactiv)

}

// const updateTodo=(todoId,newValue)=>{
//     setTodo(prev =>prev.map(item=>(item.id === todoId ? newValue:item)));
// } 
   
    return (
        <div className="row checkout mx-auto mt-5 w-75">
          <div className="col-md-8">
            <div className="infobox  bg-white p-5 m-4 text-end">
               <div className="address">
                  <div className="header">
                       <h3 className="step d-flex"></h3>
                       <span className="additem" onClick={()=>modal()}>افزودن آدرس</span>
                  </div>

                    <div className="row">      
                      <Address  items={usercredintial}  toggleactive={toggleactive} deleteitem={deleteitem} updatelist={updatelist}/>
           
                  </div>
                  
               </div>
            </div>




            <div className="infobox  bg-white p-5 m-4 text-end">
            <div className="address">
                  <div className="header">
                       <h3 className="step d-flex"></h3>
                       
                  </div>
               
                    <div className="row">
                        <Delivery datas= {DeliveryData } active={active} toggleactiveDelivery={toggleactiveDelivery} />
                        <button class="checkoutbtn btn">پرداخت</button>
                  </div>
               </div>
            </div>


            </div>
            <div className="col-md-4">
                  
            </div>




            {!hidden? <Modal onSubmit={addadress}/>

            :null}

        </div>
    )
}



const mapStateToProps=state=>({
    hidden:state.checkout.hidden,
    cartItems:state.cart.cartItems
})

const mapDispatchToProps=dispatch=>({
    modal:()=>dispatch(modal())
})
export default connect(mapStateToProps,mapDispatchToProps)(Checkout)



































// import React,{useState} from 'react'
// import {connect} from 'react-redux'
// const Checkout=()=> {
//     const [usercredintial,setcredintial]=useState({username:'',tel:'',address:''})
//     const {username,tel,address}=usercredintial


//   const handleChange=e=>{
//     const {name,value}=e.target
//     setcredintial({...usercredintial,[name]:value})
//   }

//     return (
//         <div className="row">
//             <div className="col-md-6">
//                 <form >
//                     <input type="text" 
//                       className="form-control"
//                       name='username'
//                       value={username}
//                       onChange={handleChange}
//                       placeholder="نام و نام خانوادگی"
//                       />
//                       <input type="tel" 
//                       className="form-control"
//                       name="tel"
//                       value={tel}
//                       onChange={handleChange}
//                       placeholder="شماره تماس"
//                       />
//                       <input type="address" 
//                       className="form-control"
//                       name="address"
//                       value={address}
//                       onChange={handleChange}
//                       placeholder="آدرس"
//                       />
//                       <button className="checkoutbtn btn" type="submit">پرداخت</button>
//                 </form>
//             </div>
//             <div className="col-md-4">
                  
//             </div>
//         </div>
//     )
// }
// const mapStateToProps=state=>({
//     cartItems:state.cart.cartItems
// })
// export default connect(mapStateToProps)(Checkout)