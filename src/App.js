
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Layout from "./Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";


const App = () => {
  return (
    <Router>
    <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bmi-calculator" element={<About />} />
            <Route path="/our-team" element={<About />} />
          
          </Route>
        </Routes>
        </Router>
  );
};

export default App;