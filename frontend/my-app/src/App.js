import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home1 from "./pages/Home1";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ProductPage from "./pages/beating";

function App() {
  return (
    <>
      <div style={{width:"100vw"}}>
        <BrowserRouter>
          {/* Header Section */}
          <header className="header">
            <div className="logo">
              <img src="/path-to-logo.png" alt="Government of India" />
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home1" element={<Home1 />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
