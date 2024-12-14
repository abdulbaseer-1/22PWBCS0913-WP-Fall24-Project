import contact_style from './ContactUs.module.css';
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import Footer from "../../components/Footer/Footer";
import monkey from "../../assets/ContactUs/monkey.jpg";
import monkey2 from "../../assets/ContactUs/monkey2.jpg";
import monkey3 from "../../assets/ContactUs/monkey3.jpg";
import github_logo from "../../assets/icons/github.png";

function ContactUs() {
  return(
    <>
      <Header/>
      <Hero/>
      <Content className={contact_style.contentBody}>
        <div>
          <h1 className={contact_style.heading}>Contact Us</h1>
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
      </Content>
      <Footer/>
    </>
  );
}

export default ContactUs;