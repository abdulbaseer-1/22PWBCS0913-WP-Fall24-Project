import User_Profile_Form from "../../components/User_Profile_Form/User_Profile_Form";
import user_profile_style from "./User_Profile.module.css"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ContentBody from "../../components/content_body/ContentBody";

import React from 'react'

function User_Profile() {
  return (
<>
      <Header/>
      <Hero/>
      <div className={user_profile_style.content_area}>
<Sidebar className={user_profile_style.sidebar}/>
<contentBody className={user_profile_style.ContentBody}><User_Profile_Form/></contentBody>
      </div>
<Footer/>
      </>
  )
}

export default User_Profile;

