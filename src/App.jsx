import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import { LoadingProvider, useLoading } from './contexts/LoadingContext.jsx';
import Loading from './components/Loading.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact.jsx';
import Namebar from './components/Namebar.jsx';

const AppContent = () => {
  const location = useLocation();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust this timeout as needed
    };

    handleRouteChange();
  }, [location, setLoading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path="/blog" element={<SingleBlog />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
};

const App = () => (
  <LoadingProvider>
    <Router>
      <AppContent />
    </Router>
  </LoadingProvider>
);

export default App;
