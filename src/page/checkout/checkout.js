import React,{useState} from 'react'
import {connect} from 'react-redux'
const Checkout=()=> {
    const [usercredintial,setcredintial]=useState({username:'',tel:'',address:''})
    const {username,tel,address}=usercredintial


  const handleChange=e=>{
    const {name,value}=e.target
    setcredintial({...usercredintial,[name]:value})
  }

    return (
        <div className="row">
            <div className="col-md-6">
                <form >
                    <input type="text" 
                      className="form-control"
                      name='username'
                      value={username}
                      onChange={handleChange}
                      placeholder="نام و نام خانوادگی"
                      />
                      <input type="tel" 
                      className="form-control"
                      name="tel"
                      value={tel}
                      onChange={handleChange}
                      placeholder="شماره تماس"
                      />
                      <input type="address" 
                      className="form-control"
                      name="address"
                      value={address}
                      onChange={handleChange}
                      placeholder="آدرس"
                      />
                      <button className="checkoutbtn btn" type="submit">پرداخت</button>
                </form>
            </div>
            <div className="col-md-4">
            
            </div>
        </div>
    )
}
const mapStateToProps=state=>({
    cartItems:state.cart.cartItems
})
export default connect(mapStateToProps)(Checkout)
