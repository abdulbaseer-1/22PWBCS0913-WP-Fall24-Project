import React, { useState } from 'react';
import './Signinsignup.css'
const Signinsignup = () => {
    const [action,setAction] = useState("Sign Up");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
            <div className="inputs">
                <div className="input">
                    <h4>Username</h4>
                    <input type="text" placeholder='Name...'/>
                </div>
                
                {action=="Sign In"?<div></div>:<div className="input">
                    <h4>Email</h4>
                    <input type="email" placeholder='Email...' />
                </div>}
                <div className="input">
                    <h4>Password</h4>
                    <input type="password" placeholder='Password...'/>
                </div>
                {action=="Sign In"?<div></div>:<div className="input">
                    <h4>Confirm Password</h4>
                    <input type="password" placeholder='Confirm Password...'/>
                </div>}
            </div>
            {action=="Sign Up"?<div></div>:<div className="forgot-password">Forgot password? <span>Click here!</span></div>}
            <div className="submit-container">
            <div className="submit_form" onClick={()=>{"submit"}}>Submit</div>
        </div>
            <div className="submit-container">
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign In"?"submit gray":"submit"} onClick={()=>{setAction("Sign In")}}>Sign In</div>
            </div>
    </div>
  );
}

export default Signinsignup