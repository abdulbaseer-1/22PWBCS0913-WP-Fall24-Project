import ongoing_investigation_style from './Ongoing_Investigations.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ContentBody from "../../components/content_body/ContentBody";
import Ongoing_Investigations_Table from '../../components/Tables/Ongoing_Investigations_Table/Ongoing_Investigations_Table';

function Ongoing_Investigations() {
  return(
    <>
      <Header/>
      <Hero/>
      <div className={ongoing_investigation_style.content_area}>
        <Sidebar className={ongoing_investigation_style.sidebar}/>
        <ContentBody className={ongoing_investigation_style.contentBody}><Ongoing_Investigations_Table/></ContentBody> {/*i think the reason why this is not being affected by external css is that this is an abstract element which has been defined in a separate file , thus to make changes , we should make changes there */}
      </div>
      <Footer/>
    </>
  );
}

export default Ongoing_Investigations;