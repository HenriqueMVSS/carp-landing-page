import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Home } from '../pages/Home';
import { About } from '../pages/About';

export const routes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
            </Routes>
        </Router>
    );
};