import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import ContactMe from './sections/ContactMe';
import Experience from './sections/Experience';
import Home from './sections/Home';
import ProjectsSection from './sections/ProjectsSection';

function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(45deg, rgba(96, 250, 155, 0) 10.79%, rgba(96, 250, 170, 0.03) 40.92%, rgba(96, 250, 155, 0) 90.35%)",
      }}
      className=" top-0 left-0 w-full h-full -z-1"
    >
      <Header />
      <div className="min-h-[85vh]">
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <Experience/>
              <ProjectsSection/>
              <ContactMe/>
            </>
          }/>
          <Route path='/about' element={<AboutMe/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
