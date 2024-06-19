import { Signup } from "../buttons/Signup";
import '../../styles/Header.css';
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";


export const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenuVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <header className="header">
            <div className="menu">
                <nav className="menu-nav">
                    <div className="mobile-menu-icon" onClick={toggleMenuVisibility}>
                        <IoMenu />
                    </div>
                    <div className={`desktop-menu ${isMenuVisible ? 'visible' : ''}`}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/sobre">Sobre o curso</Link>
                            </li>
                            <li>
                                <Link to="/ministrante">Ministrante</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>  
            { !isMenuVisible && <div className="signup-btn">
                <Signup />
                </div>}
        </header>
    );
};
