import home_style from './Home.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ContentBody from "../../components/content_body/ContentBody";
import User_HomePage_DB from '../../components/HomePage/User_HomePage_DB';

function Home() {
  return(
    <>
      <Header/>
      <Hero/>
      <div className={home_style.content_area}>
        <Sidebar className={home_style.sidebar}/>
        <ContentBody className={home_style.contentBody}><User_HomePage_DB/></ContentBody> {/*i think the reason why this is not being affected by external css is that this is an abstract element which has been defined in a separate file , thus to make changes , we should make changes there */}
      </div>
      <Footer/>
    </>
  );
}

export default Home;