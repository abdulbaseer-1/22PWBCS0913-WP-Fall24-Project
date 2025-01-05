import setting_style from './Settings.module.css';
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import Footer from "../../components/Footer/Footer";
import axios from 'axios';

function Settings() {

  const logout = async () => {
    try {
        const response = await axios.post('https://localhost:8080/api/users/logout', {}, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        // Log response for debugging
        console.log('Logout response:', response.data);
        
        // Clear any client-side state/storage if you're using any
        localStorage.removeItem('user');
        sessionStorage.clear();
        
        // Optional: Wait a brief moment before redirecting
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Redirect to login page
        window.location.href = "/Signin_Signup";
    } catch (error) {
        console.error("Logout error:", error);
        // You might want to show an error message to the user
        alert("Logout failed. Please try again.");
    }
  };


  return(
    <>
      <Header/>
      <Hero/>
      <Content className={setting_style.contentBody}>
        <div>
          <a href="/Change_Password">Change Password</a><br />
          <a href="/User_Profile">Edit Profile</a><br />
          <a href="/Recovery_Options">Set Recovery options</a><br />
          <button onClick={logout}>logout</button>
        </div>
      </Content>
      <Footer/>
    </>
  );
}

export default Settings;