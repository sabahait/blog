import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';
import OfferPage from './components/Pages/OfferPage/OfferPage';
import Vuepage from './components/Pages/vuePage/Vuepage';
import PagesSuneco from './components/Pages/PAGESUNECO/PAGESUNECO';
import PageSunPrime from './components/Pages/PAGESUNPRIME/PageSunPrime'
import PageGaranties from './components/Pages/PAGEGARANTIES/PageGaranties';
import PageContact from './components/Pages/PageContact/PageContact';
import AdminLogin from "../src/components/Pages/admin/adminLogin/AdminLogin";
import Dashboard from "../src/components/Pages/admin/dashboard/Dashboard";
import AllBlogs from "../src/components/Pages/allBlogs/AllBlogs";
import BlogInfo from "../src/components/Pages/blogInfo/BlogInfo";
import { Toaster } from "react-hot-toast";
import MyState from "./context/data/myState";
import CreateBlog from "../src/components/Pages/admin/createBlog/CreateBlog";
const App = () => {

  return (
    <MyState>
    <Router>
       
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../src/components/Pages/MainPage/MainPage';
import OfferPage from '../src/components/Pages/OfferPage/OfferPage';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import PagesSuneco from '../src/components/Pages/PAGESUNECO/PAGESUNECO';
import PageSunPrime from '../src/components/Pages/PAGESUNPRIME/PageSunPrime'
import PageGaranties from '../src/components/Pages/PAGEGARANTIES/PageGaranties';
import PageContact from '../src/components/Pages/PageContact/PageContact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/offers" element={<OfferPage />} />
          <Route path="/PagesSuneco" element={<PagesSuneco />} />
          <Route path="/PageSunPrime" element={<PageSunPrime />} />
          <Route path="/PageGaranties" element={<PageGaranties />} />
          <Route path="/PageContact" element={<PageContact />} />
<<<<<<< HEAD
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/Vuepage" element={<Vuepage />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/createblog" element={<ProtectedRouteForAdmin>
            <CreateBlog />
            </ProtectedRouteForAdmin>} />
          <Route path="/dashboard" element={<ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>} />
        </Routes>
      <Toaster/>
    </Router>
    </MyState>
=======
        </Routes>
        <Footer />
      </div>
    </Router>
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
  );
};

export default App;
<<<<<<< HEAD
export const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user?.user?.email === "sabahaitskik@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'}/>
  }
}

=======
>>>>>>> 9920cca23a65bcc125df87103e6f9eb544983ca6
