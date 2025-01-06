import style from './Criminal_Profileview.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import CriminalProfile from '../../components/criminal_profileview/criminal_profileview';

function Criminal_Profile() {
  return(
    <>
      <Header/>
      
      <Content className={style.contentBody}><CriminalProfile/></Content>
      <Footer/>
    </>
  );
}

export default Criminal_Profile;