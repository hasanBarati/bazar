import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import { modal } from '../../../redux/checkout/checkout-action'
import Address from '../address/adress'
import Checkout from '../checkout'
const Modal=({modal,item,onSubmit,edititem})=> {
  
    const [items,setitem]=useState('')
    
  
   // const [usercredintial,setcredintial]=useState([])
  
    const handleSubmit=(e)=>{
        e.preventDefault();
     
       onSubmit(items)
    //    onSubmit({
    //     id:Date.now(),
    //     text:items
    // })
    }




    const  handleEdit=(e)=>{
        e.preventDefault();
     setitem(edititem.value)
      // onSubmit(items)
    //    onSubmit({
    //     id:Date.now(),
    //     text:items
    // })
    }

   
 
    
    const handleChange=e=>{
    setitem(e.target.value)

    }

   
    return (


            <div className="modal d-block" id="exampleModal" >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                <button type="button" className="btn-close" onClick={modal} aria-label="Close"></button>
                    <h5 className="modal-title" id="exampleModalLabel">افزودن آدرس</h5>
                   
                </div>
                <div className="modal-body">
                    
                 
                   
                    <textarea type="text" name='items' className="w-75" value={items} onChange={handleChange} />
                </div>
                <div className="modal-footer">
                   
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>افزودن</button>
             
                </div>
                </div>
            </div>
         
        </div>
        
     
     

    )
}
const mapDispatchToProps=dispatch=>({
    modal:()=>dispatch(modal())
})
export default connect(null,mapDispatchToProps)(Modal)
