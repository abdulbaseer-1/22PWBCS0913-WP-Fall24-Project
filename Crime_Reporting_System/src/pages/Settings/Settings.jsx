import setting_style from './Settings.module.css';
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import Footer from "../../components/Footer/Footer";

function Settings() {
  return(
    <>
      <Header/>
      <Hero/>
      <Content className={setting_style.contentBody}>
        <div>
          <a href="/Change_Password">Change Password</a><br />
          <a href="/User_Profile">Edit Profile</a><br />
          <a href="/Recovery_Options">Set Recovery options</a><br />
        </div>
      </Content>
      <Footer/>
    </>
  );
}

export default Settings;