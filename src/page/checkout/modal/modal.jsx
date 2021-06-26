import React,{useState} from 'react'
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
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" onClick={modal} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    
                    <input type="text" name='items' value={items} onChange={handleChange}/>
                    <textarea />
                </div>
                <div className="modal-footer">
                   
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                <button type="button" className="btn btn-secondery" onClick={handleEdit}>edit</button>
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
