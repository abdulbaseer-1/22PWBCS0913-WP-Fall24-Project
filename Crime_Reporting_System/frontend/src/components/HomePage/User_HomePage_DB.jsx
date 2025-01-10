import React from 'react';
import User_homePage_style from './User_HomePage_DB.module.css';

function User_HomePage_DB() {
  return (
    <>
    <h2>DashBoard</h2>
      <div className={User_homePage_style.dashboard_container}>

        <div className={User_homePage_style.dashboard_components}>
          Pending Cases : 13
        </div>
        <div className={User_homePage_style.dashboard_components}>
          Total Cases : 32
        </div>
        <div className={User_homePage_style.dashboard_components}>
         Recent Report : 7
        </div>
        
      </div>
    </>
  );
}

export default User_HomePage_DB;
