import React from 'react';
import sidebar_style from "./Sidebar.module.css";

function Admin_Sidebar({ className }) {
    // Retrieve role from localStorage
    const role = localStorage.getItem('role');

    return (
        <div className={`${sidebar_style.sidebar} ${className}`}>
            <div><br /></div>
            <a href="/Home">Home</a>
            <a href="/Report_a_Crime">Report Crime</a> 
            <a href="/Pending_Cases">Pending cases</a>
            {role === "admin" && <a href="/Closed_Cases">Closed Cases</a>} {/* Show only for admin */}
            {role === "admin" && <a href="/Ongoing_Investigations">Ongoing Investigations</a>} {/* Show only for admin */}
            <a href="/Settings">settings</a>
            <a href="/Contact_Us">Contact us</a>
        </div>
    );
}

export default Admin_Sidebar;
