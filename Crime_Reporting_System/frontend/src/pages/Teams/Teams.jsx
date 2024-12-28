import team_style from './Teams.module.css';
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import Footer from "../../components/Footer/Footer";
import Teams_Table from '../../components/Tables/Teams_Table/Teams_Table';

function Teams() {
  return(
    <>
      <Header/>
      <Hero/>
      <Content className={team_style.contentBody}><Teams_Table/></Content>
      <Footer/>
    </>
  );
}

export default Teams;