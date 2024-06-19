import { useNavigate } from 'react-router-dom';
import '../../styles/Signup.css';

export const SignupSpeaker = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <button 
        onClick={handleClick}
        className="signup">
            INSCREVER-SE
        </button>
    );
};
