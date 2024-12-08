import Header from "./page_components/Header/Header";
import Footer from "./page_components/Footer/Footer";
import Sidebar from "./page_components/sidebar/Sidebar";
import Hero from "./page_components/Hero/Hero";

function App() {
  return(
    <>
      <Header/>
      <Hero/>
      <div className="content_area">
        <Sidebar/>
      </div>
      <Footer/>
    </>
  );
}

export default App
