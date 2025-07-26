import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <Home />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="programs" element={<Programs />} />
    //       <Route path="events" element={<Events />} />
    //       <Route path="resources" element={<Resources />} />
    //       <Route path="contact" element={<Contact />} />
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;