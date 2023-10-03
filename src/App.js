import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <BrowserRouter className="app_main">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
