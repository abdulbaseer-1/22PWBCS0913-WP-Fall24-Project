import setting_style from './Settings.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ContentBody from "../../components/content_body/ContentBody";
import Table from '../../components/Tables/Table_Demo/Table';

function App() {
  return(
    <>
      <Header/>
      <Hero/>
      <div className={setting_style.content_area}>
        <Sidebar className={setting_style.sidebar}/>
        <ContentBody className={setting_style.contentBody}><Table/></ContentBody> {/*i think the reason why this is not being affected by external css is that this is an abstract element which has been defined in a separate file , thus to make changes , we should make changes there */}
      </div>
      <Footer/>
    </>
  );
}

export default App;