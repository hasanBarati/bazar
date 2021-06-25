import React,{useState} from 'react'
import Modal from '../modal/modal'
import {modal} from '../../../redux/checkout/checkout-action'
import {connect} from 'react-redux'
const  Address=({items,deleteitem,updatelist,modal,hidden})=> {
   
const [edititem,setedititem]=useState({id:null,value:''})
    const submitUpdate=value=>{
        console.log(value)
        updatelist(edititem.id,value);
        setedititem({
            id:null,
            value:''
        })
    }



return (
       <div>
        {items?  items.map(item=>(
            
            <div key={item.key} className="items col-md-5 mt-4 mx-2 p-2">
               {item.text}
        
                 <span className="mx-1" onClick={()=>deleteitem(item.key)}>x</span>
                 <span className="mx-1" onClick={()=>setedititem({id:item.key,value:item.text}),modal}>+</span>
            </div>
               
               
               )):<p>list empty</p>}
               
       )
   
       {!hidden? <Modal handleEdit={submitUpdate}/>:null}
       </div>

)
}
const mapStateToProps=state=>({
    hidden:state.checkout.hidden
})
const mapDispatchToProps=dispatch=>({
    modal:()=>dispatch(modal())
})
export default connect(mapStateToProps,mapDispatchToProps)(Address)
