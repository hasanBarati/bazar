import React,{useState} from 'react'
import Modal from '../modal/modal'
import {modal} from '../../../redux/checkout/checkout-action'
import {connect} from 'react-redux'
const  Address=({items,deleteitem,updatelist,modal,hidden})=> {
   
const [edititem,setedititem]=useState({id:null,value:''})
    const submitUpdate=value=>{

        updatelist(edititem.id,value);
        setedititem({
            id:null,
            value:''
        })
    }


    const edititemcall=(id,value)=>{
        console.log(value)

       // updatelist(id,value);
       setedititem({id,value})
       modal()
      // updatelist(id,value);
    }


return (
       <div>
        {items?  items.map(item=>(
            
            <div key={item.key} className="items col-md-5 mt-4 mx-2 p-2">
               {item.text}
        
                 <span className="mx-1" onClick={()=>deleteitem(item.key)}>x</span>
                 <span className="mx-1" onClick={()=>edititemcall(item.key,item.text)}>+</span>
            </div>
               
               
               )):<p>list empty</p>}
               
       )
   
       {!hidden? <Modal edititem={edititem} />:null}
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
