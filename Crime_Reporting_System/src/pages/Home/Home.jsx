import home_style from './Home.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";

function Home() {
  return(
    <>
      <Header/>
      <Hero/>
      <Content className={home_style.contentBody}></Content> {/*i think the reason why this is not being affected by external css is that this is an abstract element which has been defined in a separate file , thus to make changes , we should make changes there */}
      <Footer/>
    </>
  );
}

export default Home;