import report_crime_style from './Report_a_Crime.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ContentBody from "../../components/content_body/ContentBody";

function Report_a_Crime() {
  return(
    <>
      <Header/>
      <Hero/>
      <div className={report_crime_style.content_area}>
        <Sidebar className={report_crime_style.sidebar}/>
        <ContentBody className={report_crime_style.contentBody}></ContentBody> {/*i think the reason why this is not being affected by external css is that this is an abstract element which has been defined in a separate file , thus to make changes , we should make changes there */}
      </div>
      <Footer/>
    </>
  );
}

export default Report_a_Crime;