import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from "./pages/About";
import { Home } from "./pages/Home";

import { Speaker } from "./pages/Speaker"


export const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/ministrante" element={<Speaker />} /> 
      </Routes>
    </Router>
  )
}

