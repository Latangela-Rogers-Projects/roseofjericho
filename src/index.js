
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import './index.css';
import Media from './pages/Media';
import GloryHour from './pages/GloryHour';
import LandingPage from './pages/LandingPage';
import Comunity from './pages/Comunity';


function App() {
  const isDev = process.env.NODE_ENV === "development";
  return isDev ? <React_App_test /> : <WordPress_App_test />;
  // return <Comunity />;
}

function useCurrentPageSlug() {
  const location = useLocation();
  return location.pathname.replace(/^\/|\/$/g, "");
}

function WordPress_App_test() {
  const currentPageSlug = window.wpData?.slug || "home"; // Default to "home" if no slug is found

  let ComponentToRender;
  switch (currentPageSlug) {
    case 'comunity':
      ComponentToRender = <Comunity />;
      break;
    default:
      ComponentToRender = <LandingPage />;
  }

  return ComponentToRender
}

function WordPress_App() {
  const currentPageSlug = window.wpData?.slug || "home"; // Default to "home" if no slug is found

  let ComponentToRender;
  switch (currentPageSlug) {
    case 'home':
      ComponentToRender = <Home />;
      break;
    case 'about':
      ComponentToRender = <About />;
      break;
    case 'about-us':
      ComponentToRender = <About />;
      break;
    case 'programs':
      ComponentToRender = <Programs />;
      break;
    case 'events':
      ComponentToRender = <Events />;
      break;
    case 'resources':
      ComponentToRender = <Resources />;
      break;
    case 'media':
      ComponentToRender = <Media />;
      break;
    case 'glory-hour':
      ComponentToRender = <GloryHour />;
      break;
    case 'contact':
      ComponentToRender = <Contact />;
      break;
    default:
      ComponentToRender = <Home />;
  }

  return <Layout currentPageSlug={currentPageSlug}>{ComponentToRender}</Layout>
}


function React_App_test() {
  return (
   <Router>
      <React_App_Layout_test />
    </Router>
  );
}

function React_App_Layout_test() {

  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/comunity" element={<Comunity />} />
      </Routes>
  );
}

function React_App() {
  return (
    <Router>
      <React_App_Layout />
    </Router>
  );
}

function React_App_Layout() {
  const currentPageSlug = useCurrentPageSlug();

  return (
    <Layout currentPageSlug={currentPageSlug}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/media" element={<Media />} />
        <Route path="/glory-hour" element={<GloryHour />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
