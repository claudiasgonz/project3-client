import "./App.css";
import { Route, Routes } from "react-router-dom";
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
  return (
    <div className="app">
      <Navbar/>
      <Toaster />
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/museums" element={<MuseumList />}/>
        <Route path="/museums/:museumId" element={<MuseumDetails />}/>
        <Route path="/login" element={<LoginPage  />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/museum/create" element={<CreateMuseumPage />}/>
        <Route path="/*" element={<Error />}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;