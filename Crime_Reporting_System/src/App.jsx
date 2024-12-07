import Header from "./page_components/Header/Header";
import Footer from "./page_components/Footer/Footer";
import Sidebar from "./page_components/sidebar/Sidebar";

function App() {
  return(
    <>
      <Header/>
      <div className="content_area">
        <Sidebar/>
      </div>
      <Footer/>
    </>
  );
}

export default App
