import { useState } from "react";

import Sidebar from "../sidebar/Sidebar";
import Hide_Button from "../hide_button/Hide_Button";
import ContentBody from "../content_body/ContentBody";

import content_style from "./Content.module.css";
function Content() {
    const [sidebarVisibility, setSidebarVisibility] = useState(true);

    const isVisible = () => {
        setSidebarVisibility((prevState) => !prevState);
    };

    return(
        <>
        { (sidebarVisibility) ? (
            <div className={content_style.content_area}>
                <Hide_Button className={content_style.switch_button} onClick = {isVisible}/>
                <Sidebar className={content_style.sidebar}/>
                <ContentBody className={content_style.contentBody}></ContentBody>
            </div>
        ) : (
            <div className={content_style.noSidebar}>
                <Hide_Button className={content_style.switch_button} onClick = {isVisible}/>
                <ContentBody className={content_style.contentBody}></ContentBody>
            </div>
        )
        }
        </>
    );   
};

export default Content;