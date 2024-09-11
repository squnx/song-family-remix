import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Story from './pages/Story';
import Activity from './pages/Activity';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Journey from './pages/Journey';
import America from './pages/America';
import California from './pages/California';
import Korea from './pages/Korea';
import Mexico from './pages/Mexico';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* To ensure that the page scrolls to the top when navigating between routes */}
      <div id="top" className="App app-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home1" element={<Home1 />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />
            <Route path="/our-story" element={<Story />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/america" element={<America />} />
            <Route path="/california" element={<California />} />
            <Route path="/korea" element={<Korea />} />
            <Route path="/mexico" element={<Mexico />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
