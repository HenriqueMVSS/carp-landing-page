import { useNavigate } from 'react-router-dom';
import '../../styles/Signup.css';

export const Signup = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/ministrante#footer');
    };

    return (
        <button 
        onClick={handleClick}
        className="signup">
            INSCREVER-SE
        </button>
    );
};
