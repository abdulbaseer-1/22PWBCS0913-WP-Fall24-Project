import contact_style from './ContactUs.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ContentBody from "../../components/content_body/ContentBody";
import student1 from "../../assets/ContactUs/Student-1.jpeg";
import student2 from "../../assets/ContactUs/Student-2.jpeg";
import student3 from "../../assets/ContactUs/Student-3.jpg";
import github_logo from "../../assets/icons/github.png";

function ContactUs() {
  return(
    <>
      <Header/>
      <Hero/>
      <div className={contact_style.content_area}>
        <Sidebar className={contact_style.sidebar}/>
        <ContentBody className={contact_style.contentBody}>
          <div>
            <h1>Contact Us</h1>
            <div className={contact_style.contact_container}>{/*flex with photos of me and my group members, description at the end */}
              <div className={contact_style.contact}>
                <img src={student1} alt="pic 1" />
                <h5>Meet : Abdul-Baseer ;)</h5>
                <p>A hardworking Computer Science student tasked with making this semester project</p>
                <a href="https://github.com/abdulbaseer-1" target="_blank"><img src={github_logo} alt="github"/></a>
              </div>
              <div className={contact_style.contact}>
              <img src={student2} alt="pic 2" />
                <h5>Meet : Zain-ul-Abideen ;)</h5>
                <p>A hardworking Computer Science student tasked with making this semester projectS</p>
                <a href="https://github.com/23pwbcs1019/23pwbcs1019-wp-f2024.git" target="_blank"><img src={github_logo} alt="github"/></a>
              </div>
              <div className={contact_style.contact}>
              <img src={student3} alt="pic 3" />
                <h5>Meet : Mudassir-Khan ;)</h5>
                <p>A hardworking Computer Science student tasked with making this semester project</p>
                <a href="https://github.com/abdulbaseer-1" target="_blank"><img src={github_logo} alt="github"/></a>
              </div>
            </div>
            <div className={contact_style.description}>
              <h3>Descrition:</h3>
              <p>Our team, Abdul-Baseer, Zain-uL-Abideen, and Mudasir-Khan, has developed this crime alert website that provides an easy-to-use platform for reporting crimes and staying informed. With expertise in frontend development, backend integration, and UI design, we’ve created a secure and efficient service. Data privacy and security remain our top priorities in offering a trusted platform for the community.</p>
            </div>
          </div>
        </ContentBody> {/*i think the reason why this is not being affected by external css is that this is an abstract element which has been defined in a separate file , thus to make changes , we should make changes there */}
      </div>
      <Footer/>
    </>
  );
}

export default ContactUs;