import contact_style from './ContactUs.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ContentBody from "../../components/content_body/ContentBody";
import monkey from "../../assets/ContactUs/monkey.jpg";
import monkey2 from "../../assets/ContactUs/monkey2.jpg";
import monkey3 from "../../assets/ContactUs/monkey3.jpg";
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
                <img src={monkey} alt="pic 1" />
                <h5>Meet Monke;) A very talented wise monkey</h5>
                <p>A hardworking Computer Science student tasked with making this semester project</p>
                <a href="https://github.com/abdulbaseer-1" target="_blank"><img src={github_logo} alt="github"/></a>
              </div>
              <div className={contact_style.contact}>
              <img src={monkey2} alt="pic 2" />
                <h5>Meet Monke;)</h5>
                <p>A hardworking Computer Science student tasked with making this semester projectS</p>
                <a href="https://github.com/abdulbaseer-1" target="_blank"><img src={github_logo} alt="github"/></a>
              </div>
              <div className={contact_style.contact}>
              <img src={monkey3} alt="pic 3" />
                <h5>Meet Monke;)</h5>
                <p>A hardworking Computer Science student tasked with making this semester project</p>
                <a href="https://github.com/abdulbaseer-1" target="_blank"><img src={github_logo} alt="github"/></a>
              </div>
            </div>
            <div className={contact_style.description}>
              <h3>Descrition:</h3>
              <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quis debitis eligendi asperiores deserunt consequuntur perspiciatis ab, ducimus suscipit assumenda eos magnam quas temporibus aspernatur distinctio accusantium voluptatem libero accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos obcaecati minus facere autem inventore, doloremque nulla. Quo architecto nihil totam repudiandae natus deleniti, hic aliquam harum distinctio, cumque error? ipsum, dolor sit amet consectetur adipisicing elit. Quia, neque, enim aut laborum reprehenderit totam consequuntur facilis nulla, porro eius laudantium quisquam minus id dolorem incidunt culpa ipsam natus. Vitae.</p>
            </div>
          </div>
        </ContentBody> {/*i think the reason why this is not being affected by external css is that this is an abstract element which has been defined in a separate file , thus to make changes , we should make changes there */}
      </div>
      <Footer/>
    </>
  );
}

export default ContactUs;