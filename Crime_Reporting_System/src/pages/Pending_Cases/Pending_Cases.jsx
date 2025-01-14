import pending_cases_style from './Pending_Cases.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ContentBody from "../../components/content_body/ContentBody";
import Pending_Cases_Table from "../../components/Tables/Pending_Cases_Table/Pending_Cases_Table";

function Pending_Cases() {
  return(
    <>
      <Header/>
      <Hero/>
      <div className={pending_cases_style.content_area}>
        <Sidebar className={pending_cases_style.sidebar}/>
        <ContentBody className={pending_cases_style.contentBody}><Pending_Cases_Table/></ContentBody> {/*i think the reason why this is not being affected by external css is that this is an abstract element which has been defined in a separate file , thus to make changes , we should make changes there */}
      </div>
      <Footer/>
    </>
  );
}

export default Pending_Cases;