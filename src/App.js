import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import ContactMe from './sections/ContactMe';
import Experience from './sections/Experience';
import Home from './sections/Home';
import ProjectsSection from './sections/ProjectsSection';
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Loader from './components/Loader';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },500);
    return () => clearTimeout(timer);
  },[location])
  return (
    <div
      style={{
        background:
          "linear-gradient(45deg, rgba(96, 250, 155, 0) 10.79%, rgba(96, 250, 170, 0.03) 40.92%, rgba(96, 250, 155, 0) 90.35%)",
      }}
      className="top-0 left-0 w-full h-full -z-1"
    >
      {loading && <Loader/>}
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }} // No slide effect, just opacity change
          animate={{ opacity: 1 }} // Fade in with full opacity
          exit={{ opacity: 0 }} // Fade out when leaving
          transition={{ duration: 0.35, ease: "easeInOut" }} // Faster transition (0.25 seconds)
          className="min-h-[85vh]"
        >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Experience />
                  <ProjectsSection />
                  <ContactMe />
                </>
              }
            />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
export default App;
