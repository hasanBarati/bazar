import React from 'react'

const Delivery=({toggleactive,items})=> {
    console.log(items)
    const handleactiveitem=(id)=>{

  
        toggleactive(id)
        
    }
    return (
       
  
        items?  items.map(item=>(
            <div className="address position-relative col-md-6">
           <div key={item.id}  className={`${item.isCompleted?'actived':'notactive'} addressitem items  mt-4 mx-2 p-4`} 
               onClick={()=>handleactiveitem({id:item.id})}>
              {item.time}
       
               
                {/* <span className="mx-1" onClick={()=>edititemcall(item.key,item.text)}>+</span> */}
           </div>
              
            
              </div>
              )):<p>list empty</p>
    )
}

export default Delivery
