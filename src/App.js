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
import Signup from "./admin/Signup";
import Signin from "./admin/Signin";
import Dashboard from "./admin/Dashboard";
import CreateBlog from "./admin/CreateBlog";
import UpdateBlog from "./admin/UpdateBlog";
import CreateProject from "./admin/CreateProject";
import UpdateProject from "./admin/UpdateProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToastifyComponent from "./context/ToastifyContext";
import UserComponent from "./context/UserContext";
import Toastify from "./components/Toastify";
import BlogComponent from "./context/BlogContext";

function App() {
  return (
    <UserComponent>
      <BlogComponent>
        <ToastifyComponent>
          <div style={{ position: "fixed", zIndex: "1000000" }}>
            <Toastify />
          </div>
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
                <Route path="/admin_signup" element={<Signup />} />
                <Route path="/admin_signin" element={<Signin />} />
                <Route path="/admin_dashboard" element={<Dashboard />} />
                <Route path="/admin_create_blog" element={<CreateBlog />} />
                <Route path="/admin_update_blog" element={<UpdateBlog />} />
                <Route
                  path="/admin_create_project"
                  element={<CreateProject />}
                />
                <Route
                  path="/admin_update_project"
                  element={<UpdateProject />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </ToastifyComponent>
      </BlogComponent>
    </UserComponent>
  );
}

export default App;
