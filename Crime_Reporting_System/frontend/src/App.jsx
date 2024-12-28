import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_in_Sign_up from "./pages/Signinsignup/Signinsignup";
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
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Recovery_Options from "./pages/RecoveryPhone/RecoveryPhone";
import {UserProvider} from "./components/contexts/userContext"; // named import

function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Sign_in_Sign_up />} />
            <Route path="/Signin_Signup" element={<Sign_in_Sign_up/>} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Report_a_Crime" element={<Report_a_Crime />} />
            <Route path="/Pending_Cases" element={<Pending_Cases />} />
            <Route path="/Closed_Cases" element={<Closed_Cases />} />
            <Route path="/Ongoing_Investigations" element={<Ongoing_Investigations />} />
            <Route path="/Local_Felonies" element={<Local_Felonies />} />
            <Route path="/Teams" element={<Teams />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Contact_Us" element={<Contact_Us />} />
            <Route path="/User_Profile" element={<User_Profile />} />
            <Route path="/Recovery_Options" element={<Recovery_Options/>}></Route>
            <Route path="/Change_Password" element={<ChangePassword/>}></Route>

            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
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