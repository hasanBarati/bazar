import React from 'react'
import  './with-spinner.style.css'

const WithSpinner=WrappedComponent=>{
    const spinner=({isLoading,...otherProps})=>{
    return isLoading?(
        < div className="SpinnerOverlay">
            <div className="SpinnerContainer " />
                
        </div>
    ):
    (
        <WrappedComponent  {...otherProps}/>
    )}
    return spinner
}

export default WithSpinner