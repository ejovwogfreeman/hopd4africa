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
import CreateProject from "./admin/CreateProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToastifyComponent from "./context/ToastifyContext";
import UserComponent from "./context/UserContext";
import Toastify from "./components/Toastify";
import BlogDetails from "./pages/BlogDetails";
import EditBlog from "./admin/EditBlog";
import ProjectDetails from "./pages/ProjectDetails";
import EditProject from "./admin/EditProject";

function App() {
  return (
    <UserComponent>
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
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/edit_project/:id" element={<EditProject />} />
              <Route path="/contact" element={<ContactPg />} />
              <Route path="/blog" element={<News />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/edit_blog/:id" element={<EditBlog />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/admin_signup" element={<Signup />} />
              <Route path="/admin_signin" element={<Signin />} />
              <Route path="/admin_dashboard" element={<Dashboard />} />
              <Route path="/admin_create_blog" element={<CreateBlog />} />
              <Route path="/admin_create_project" element={<CreateProject />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ToastifyComponent>
    </UserComponent>
  );
}

export default App;
