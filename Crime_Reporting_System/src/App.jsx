import './styles.css';
import Header from "./page_components/Header/Header";
import Footer from "./page_components/Footer/Footer";
import Sidebar from "./page_components/sidebar/Sidebar";
import Hero from "./page_components/Hero/Hero";
import ContentBody from "./page_components/content_body/ContentBody";
import Table from './page_components/Tables/Table_Demo/Table';

function App() {
  return(
    <>
      <Header/>
      <Hero/>
      <div className="content_area">
        <Sidebar className="sidebar"/>
        <ContentBody className="contentBody"><Table/></ContentBody> {/*i think the reason why this is not being affected by external css is that this is an abstract element which has been defined in a separate file , thus to make changes , we should make changes there */}
      </div>
      <Footer/>
    </>
  );
}

export default App
