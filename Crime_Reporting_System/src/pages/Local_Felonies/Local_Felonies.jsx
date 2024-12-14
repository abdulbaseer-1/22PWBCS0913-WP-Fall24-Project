import local_felonies_style from './Local_Felonies.module.css';
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import Footer from "../../components/Footer/Footer";
import Local_Felonies_Table from '../../components/Tables/Local_Felonies_Table/Local_Felonies_Table';

function Local_Felonies() {
  return(
    <>
      <Header/>
      <Hero/>
      <Content className={local_felonies_style.contentBody}><Local_Felonies_Table/></Content>
      <Footer/>
    </>
  );
}

export default Local_Felonies;