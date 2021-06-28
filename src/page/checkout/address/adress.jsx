import React,{useState} from 'react'
import Modal from '../modal/modal'
import {modal} from '../../../redux/checkout/checkout-action'
import {connect} from 'react-redux'
const  Address=({items,deleteitem,updatelist,modal,hidden,toggleactive})=> {
   



const [edititem,setedititem]=useState({id:null,value:''})
const [selcetaddress,setselcetaddress]=useState('')
const [toggle,settoggle]=useState(false)
    const submitUpdate=(value)=>{
    
       
       // modal()
        updatelist(edititem.id,value);
        setedititem({
            id:null,
            value:''
        })
       
       
    }
const handleactiveitem=(id,value,active)=>{

    settoggle(!toggle)
    



    toggleactive(id)


      //  console.log(updat)


    //const finditems=items.find(item=>item.key===id)

  //  setselcetaddress({id:id,value:value,active:!toggle})
  
    
}

   const edititemcall=(id,value)=>{
      
       setedititem({id,value})
       modal()

   
    }


return (
       <div>
        {items?  items.map(item=>(
            
            <div key={item.key}  className={`${selcetaddress.active?'':'actived'} items col-md-5 mt-4 mx-2 p-2`} onClick={()=>handleactiveitem({id:item.key,value:item.text,active:false})}>
               {item.text}
        
                 <span className="mx-1" onClick={()=>deleteitem(item.key)}>x</span>
                 {/* <span className="mx-1" onClick={()=>edititemcall(item.key,item.text)}>+</span> */}
            </div>
               
               
               )):<p>list empty</p>}
               
       )
   
       {!hidden && edititem.id ? <Modal onSubmit={submitUpdate} />:null}
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