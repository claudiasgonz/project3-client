import "./App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import MuseumList from "./pages/MuseumList.jsx";
import MuseumDetails from "./pages/MuseumDetails.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import CreateMuseumPage from "./pages/CreateMuseumPage.jsx";
import Profile from "./pages/Profile.jsx";
import Error from "./pages/Error.jsx";
import { Toaster } from "react-hot-toast";


function App() {

  const isLoggedIn = () => {
    return localStorage.getItem("authToken") ? ( 
      <Outlet/> 
    ) : (
       <Navigate to="/login" />
    );
  };

  const IsNotLoggedIn = () => {
    return !localStorage.getItem("authToken") ? ( 
      <Outlet/> 
    ) : (
       <Navigate to="/" />
    );
  };

  return (
    <div className="app">
      <Navbar/>
      <Toaster />
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/museums" element={<MuseumList />}/>
        <Route path="/museums/:museumId" element={<MuseumDetails />}/>
        <Route path="/user/:userId" element={<Profile />}/>

      <Route element={<IsNotLoggedIn />}>
        <Route path="/login" element={<LoginPage  />}/>
        <Route path="/signup" element={<SignupPage />}/>
      </Route>

        <Route path="/museum/create" element={<CreateMuseumPage />}/>
        <Route path="/*" element={<Error />}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;