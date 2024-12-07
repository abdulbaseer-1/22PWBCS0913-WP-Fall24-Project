import sidebar_style from "./Sidebar.module.css";
function Admin_Sidebar() {
    return(
        <ul className={sidebar_style.sidebar}>
            <li><a href="">Home</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Pending cases</a></li>
            <li><a href="">Closed Cases</a></li>
            <li><a href="">Ongoing Investigations</a></li>
            <li><a href="">Local Felonies</a></li>
            <li><a href="">Loose Suspects</a></li>
            <li><a href="">Teams</a></li>
            <li><a href="">Audit Logs</a></li>
            <li><a href="">settings</a></li>
        </ul>
    );
}

export default Admin_Sidebar;