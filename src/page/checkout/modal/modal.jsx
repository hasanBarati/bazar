import React,{useState} from 'react'
import {connect} from 'react-redux'
import { modal } from '../../../redux/checkout/checkout-action'
const Modal=({modal})=> {
    const [usercredintial,setcredintial]=useState([])
    const [items,setitem]=useState('')

      const handleChange=e=>{
        const {name,value}=e.target
        setcredintial({...usercredintial,[name]:value})
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
                    <input type="text" />
                    <textarea />
                </div>
                <div className="modal-footer">
                   
                    <button type="button" className="btn btn-primary">Save changes</button>
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
