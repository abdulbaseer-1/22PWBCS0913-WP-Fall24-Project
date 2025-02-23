import team_style from './Teams.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import ContentBody from "../../components/content_body/ContentBody";
import Teams_Table from '../../components/Tables/Teams_Table/Teams_Table';

function Teams() {
  return(
    <>
      <Header/>
      <Hero/>
      <div className={team_style.content_area}>
        <Sidebar className={team_style.sidebar}/>
        <ContentBody className={team_style.contentBody}><Teams_Table/></ContentBody> {/*i think the reason why this is not being affected by external css is that this is an abstract element which has been defined in a separate file , thus to make changes , we should make changes there */}
      </div>
      <Footer/>
    </>
  );
}

export default Teams;