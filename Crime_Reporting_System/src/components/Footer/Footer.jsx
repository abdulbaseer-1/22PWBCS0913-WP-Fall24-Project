import footer_style from "./Footer.module.css";
import instagram_logo from "../../assets/icons/instagram.png";
import github_logo from "../../assets/icons/github.png";
import gmail_logo from "../../assets/icons/gmail.png";
function Footer({className}) {
    return(
        <div className={`${footer_style.footer} ${className}`}>
            <div className={footer_style.to_center}>
                <div className={footer_style.contact_grid}>
                    <div className={footer_style.website_summary}>
                        <h5>&copy; {new Date().getFullYear()} Crime Report. All rights reserved.</h5><br/>
                        <p>Crime Report is dedicated to fostering a safer community by enabling individuals to report incidents securely and anonymously. 
                        Please ensure all reports are truthful and accurate. False reporting is a serious offense and may have legal consequences.</p>
                    </div>
                    <div className={footer_style.contact_1}>
                        <a href="https://www.instagram.com/khanabdulbaseerkhanyousafzai/" target="_blank"><img src={instagram_logo} alt="instagram"/> <p>instagram</p></a>
                    </div>
                    <div className={footer_style.contact_2}>
                        <a href="https://github.com/abdulbaseer-1" target="_blank"><img src={github_logo} alt="github"/> <p>github</p></a>
                    </div>
                    <div className={footer_style.contact_3}>
                        <a href="mailto:abdulbaseer.s130@gmail.com" target="_blank"><img src={gmail_logo} alt="email"/> <p>gmail</p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;