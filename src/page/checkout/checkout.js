import React,{useState} from 'react'
import {connect} from 'react-redux'
import Modal from './modal/modal'
import {modal} from '../../redux/checkout/checkout-action'
import Address from './address/adress'
import './checkout.style.css'
const Checkout=({modal,hidden,datad})=> {

    const [usercredintial,setcredintial]=useState([])


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
    console.log('excute')
  const finitemtoedit=usercredintial.find(item=>item.key === key)
  

  setcredintial(prev =>prev.map(item=>(item.key === key ? newtext:item)));

}



// const updateTodo=(todoId,newValue)=>{
//     setTodo(prev =>prev.map(item=>(item.id === todoId ? newValue:item)));
// } 
   
    return (
        <div className="row checkout mx-auto mt-5 w-75">
             
            <div className="infobox col-md-6 bg-white p-5 m-4 text-end">
               <div className="address">
                  <div className="header">
                       <h3 className="step d-flex">آدرس شما</h3>
                       <span className="additem" onClick={()=>modal()}>افزودن آدرس</span>
                  </div>
                
                  
                    <div className="row">
                      
                      <Address items={usercredintial} deleteitem={deleteitem} updatelist={updatelist}/>
                      {/* {usercredintial?usercredintial.map(item=>
                      <Address key={item.key}
                       item={item}
                       deleteitem={deleteitemlist}
                       />
                       
                       
                       
                      ):null} */}
                      

                        <div className="items col-md-5 mt-4 mx-2 p-2">
                            تهران،میدان انقلاب،خیابان کارگر شمالی 
                        </div>
                        <div className="items col-md-5 mt-4 mx-2 p-2">
                            تهران،میدان انقلاب،خیابان کارگر شمالی 
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