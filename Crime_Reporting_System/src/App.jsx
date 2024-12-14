import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_in from "./pages/Sign_in/Sign_in";
import Sign_up from "./pages/Sign_up/Sign_up";
import Home from "./pages/Home/Home";
import Report_a_Crime from "./pages/Report_a_Crime/Report_a_Crime";
import Pending_Cases from "./pages/Pending_Cases/Pending_Cases";
import Closed_Cases from "./pages/Closed_Cases/Closed_Cases";
import Ongoing_Investigations from "./pages/Ongoing_Investigations/Ongoing_Investigations";
import Local_Felonies from "./pages/Local_Felonies/Local_Felonies";
import Teams from "./pages/Teams/Teams";
import Settings from "./pages/Settings/Settings";
import Contact_Us from "./pages/Contact_Us/ContactUs";
import NoPage from "./pages/NoPage/Nopage";
import User_Profile from "./pages/User_Profile/User_Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Sign_in" element={<Sign_in />} />
          <Route path="/Sign_up" element={<Sign_up />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Report_a_Crime" element={<Report_a_Crime />} />
          <Route path="/Pending_Cases" element={<Pending_Cases />} />
          <Route path="/Closed_Cases" element={<Closed_Cases />} />
          <Route path="/Ongoing_Investigations" element={<Ongoing_Investigations />} />
          <Route path="/Local_Felonies" element={<Local_Felonies />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Contact_Us" element={<Contact_Us />} />
          {/* <Route path="/User_Profile" element={<User_Profile />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


/*
in order to make multiple pages in react we use the npm react-router-dom package, which routes urls to their respective
components. No need to create separate pages as react is built for the purpose of creating single pages, not multiple.
to use this functionality, we muslt enclose our elements in both the router BrowserRouter and Router tags.
How it routes traffic? -> to check later .
*/