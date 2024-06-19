import '../../styles/FooterAbout.css';
import footerAbout from '../../assets/images/footerAbout.png';

export const FooterAbout = () => {
    return (
        <footer className="footer-about">
            <img className='footer-img' src={footerAbout} alt="footer-image" />
        </footer>
    );
};
