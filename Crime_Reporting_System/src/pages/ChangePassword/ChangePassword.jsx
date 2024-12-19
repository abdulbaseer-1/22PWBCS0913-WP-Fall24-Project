import React, { useState } from 'react';
import './ChangePassword.css'
const ChangePassword = () => {
    const [action,setAction] = useState("Change Password");
  return (
    <div className='container'>
    <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
    </div>
        <div className="inputs">
        <div className="input">
                <h4>Previous Password</h4>
                <input type="password" placeholder='Pevious Password...'/>
            </div>
            <div className="input">
                <h4>New Password</h4>
                <input type="password" placeholder='New Password...'/>
            </div>
            <div className="input">
                <h4>Confirm Password</h4>
                <input type="password" placeholder='Confirm Password...'/>
            </div>
        </div>
        <div className="submit-container">
            <div className="Change-Password" onClick={()=>{setAction("Change Password")}}>Change Password</div>
        </div>
</div>
  );
}

export default ChangePassword