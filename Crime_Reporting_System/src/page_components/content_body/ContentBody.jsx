import content_body_style from "./ContentBody.module.css";
import Table from "../Tables/Table_Demo/Table";
function ContentBody ({className}) { //prop
    return(
        <div className={`${content_body_style.content_body} ${className}`}>
            <button>ok</button>
        </div>
    );
}

export default ContentBody;