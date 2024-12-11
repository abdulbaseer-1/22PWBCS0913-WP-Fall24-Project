import closed_cases_style from './Closed_Cases.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ContentBody from "../../components/content_body/ContentBody";
import Closed_Cases_Table from '../../components/Tables/Closed_Cases_Table/Closed_Cases_Table';

function Closed_Cases() {
  return(
    <>
      <Header/>
      <Hero/>
      <div className={closed_cases_style.content_area}>
        <Sidebar className={closed_cases_style.sidebar}/>
        <ContentBody className={closed_cases_style.contentBody}><Closed_Cases_Table/></ContentBody> {/*i think the reason why this is not being affected by external css is that this is an abstract element which has been defined in a separate file , thus to make changes , we should make changes there */}
      </div>
      <Footer/>
    </>
  );
}

export default Closed_Cases;