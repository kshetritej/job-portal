import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from './pages/dashboard';
import Profile from "./pages/profile";
import Header from "./pages/header";
import MayshowHeader from "./pages/mayshowheader";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./pages/footer";
import Jobapplication from "./pages/jobapplication";
function App() {
  return (
    <BrowserRouter>
      <MayshowHeader>
          <Header/>
      </MayshowHeader>  
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/jobapply" element={<Jobapplication/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
