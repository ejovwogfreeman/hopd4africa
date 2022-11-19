import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import ContactPg from "./pages/ContactPg";
import News from "./pages/News";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPg />} />
          <Route path="/blog" element={<News />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
