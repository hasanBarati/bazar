import React from 'react'
import './delivery.style.css'
import DeliveryData from './deliverydata'
const Delivery=({toggleactiveDelivery,datas,active})=> {
  
    const handleactive=(id)=>{

  
        toggleactiveDelivery(id)
        
    }
    return (
       
  
        datas?  datas.map(data=>(
            <div className=" position-relative col-md-4" key={data.id}>
           <div key={data.id}  className={`${data.active?'activedelivery':'notactivedelivery'} addressitem items  mt-4  p-4`} 
               onClick={()=>handleactive({id:data.id})}>
              {data.time}
       
               
                {/* <span className="mx-1" onClick={()=>edititemcall(item.key,item.text)}>+</span> */}
           </div>
              
            
              </div>
              )):<p>list empty</p>
    )
}

export default Delivery
