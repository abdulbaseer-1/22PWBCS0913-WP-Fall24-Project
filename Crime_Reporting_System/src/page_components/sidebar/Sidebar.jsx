import sidebar_style from "./Sidebar.module.css";
function Admin_Sidebar() {
    return(
        <div className={sidebar_style.sidebar}>
            <a href="">Home</a>
            <a href="">Contact us</a>
            <a href="">Pending cases</a>
            <a href="">Closed Cases</a>
            <a href="">Ongoing Investigations</a>
            <a href="">Local Felonies</a>
            <a href="">Loose Suspects</a>
            <a href="">Teams</a>
            <a href="">Audit Logs</a>
            <a href="">settings</a>
        </div>
    );
}

export default Admin_Sidebar;