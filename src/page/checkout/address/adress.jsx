import React,{useState} from 'react'
import Modal from '../modal/modal'
import {modal} from '../../../redux/checkout/checkout-action'
import {connect} from 'react-redux'
import './address.style.css'
const  Address=({items,deleteitem,updatelist,modal,hidden,toggleactive})=> {
   



const [edititem,setedititem]=useState({id:null,value:''})
const [selcetaddress,setselcetaddress]=useState('')

    const submitUpdate=(value)=>{
    
       
       // modal()
        updatelist(edititem.id,value);
        setedititem({
            id:null,
            value:''
        })
       
       
    }
const handleactiveitem=(id,value,active)=>{

  
    toggleactive(id)
    
}

   const edititemcall=(id,value)=>{
      
       setedititem({id,value})
       modal()

   
    }


return (
      
        items?  items.map(item=>(
             <div className="address position-relative col-md-5" key={item.key}>
            <div key={item.key}  className={`${item.isCompleted?'actived':'notactive'} addressitem items  mt-4 mx-2 p-2`} onClick={()=>handleactiveitem({id:item.key,value:item.text,active:false})}>
               {item.text}
        
                
                 {/* <span className="mx-1" onClick={()=>edititemcall(item.key,item.text)}>+</span> */}
            </div>
               
               <span className="closebtn position-absolute  px-2 rounded-circle text-white bg-danger mx-1 cursor-pointer" onClick={()=>deleteitem(item.key)}>x</span>
               </div>
               )):<p>list empty</p>
               
       )
   
    //    {!hidden && edititem.id ? <Modal onSubmit={submitUpdate} />:null}
      


}
const mapStateToProps=state=>({
    hidden:state.checkout.hidden
})
const mapDispatchToProps=dispatch=>({
    modal:()=>dispatch(modal())
})
export default connect(mapStateToProps,mapDispatchToProps)(Address)