import React, { useContext, useState } from 'react';
import './Signinsignup.css'
import useUser from '../../components/contexts/userContext.jsx'; //my Context // default export imported
import { useNavigate } from 'react-router-dom'; // navigate to other page on some event // finally got what i was lookin for eh

const Signinsignup = () => {
    const [action,setAction] = useState("Sign Up");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //for checking userstate -> admin or mango people
    const [userstate, setUserstate] = useState('normal_user');
    // the brace suggest a named export, i.e. the setSignupDetals funcion of useUser itsself.
    const {setSignupDetails} = useUser(); // i dont need to use the useContext hook again b/c i used it in the context creatipon component, check it out.
    //setting uup navigator hook, is it a hook?
    const navigate = useNavigate();

    const handleUsername = (event) => { // if you use a callback in the setfunct() . The parent event and the child is diff, so this is the correct synatx
        if(action === "Sign Up") // only required where the field is used in both sign in and signup
        setUsername(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        if(action === "Sign Up")
        setPassword(event.target.value);
    };
    const handlePasswordConfirmation = (event) => {
        setConfirmPassword(event.target.value);
    }

    // login logic

    // admin vs normal user lgic !!!!!!!!!!!!!!!!!!!!!!! for admin and normal dashboard. put inside the handle submit at the end
    // const userState = () => {
    //     if(action === "Sign In") { // this will be tested on sign in , admins will have their own db where admins will be stored
    //         setUserstate(() => {
    //             //
    //         });
    //     }
    // }


    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(!username.trim()) {
            alert("username is required");  // if the username is empty after trimming whitespace
            return;
        }
        if(!email.trim()) {
            alert("email is required");
            return;
        }
        if(!password.trim()) {
            alert("password is required");
            return;
        }
        if(password !== confirmPassword) {
            alert("please confirm password");
            return;
        }

        setSignupDetails({username, email, password}); // a funct to change the sigupDetails inside the useUser.
        if(action === "Sign Up") {
        navigate("/User_Profile"); // takes routes not paths
        console.log("Navigate to profile page");
        }
    }

  return ( 
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
            <div className="inputs">
                <div className="input">
                    <h4>Username</h4>
                    <input type="text" placeholder='Name...' onChange={handleUsername} required/>
                </div>
                
                {action=="Sign In"?<div></div>:<div className="input">
                    <h4>Email</h4>
                    <input type="email" placeholder='Email...'  onChange={handleEmail} required/>
                </div>}
                <div className="input">
                    <h4>Password</h4>
                    <input type="password" placeholder='Password...' onChange={handlePassword} required/>
                </div>
                {action=="Sign In"?<div></div>:<div className="input">
                    <h4>Confirm Password</h4>
                    <input type="password" placeholder='Confirm Password...' required onChange={handlePasswordConfirmation}/>
                </div>}
            </div>
            {action=="Sign Up"?<div></div>:<div className="forgot-password">Forgot password? <span>Click here!</span></div>}
            <div className="submit-container">
            <div className="submit_form" onClick={handleSubmit}>Submit</div>
        </div>
            <div className="submit-container">
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign In"?"submit gray":"submit"} onClick={()=>{setAction("Sign In")}}>Sign In</div>
            </div>
    </div>
  );
}

export default Signinsignup;