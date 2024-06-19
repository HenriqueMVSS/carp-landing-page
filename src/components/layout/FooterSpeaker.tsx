import { SignupSpeaker } from "../buttons/SignupSpeaker"
import footerImg from '../../assets/images/footerSpeaker.svg';
import '../../styles/FooterSpeaker.css';

export const FooterSpeaker = () => {
    return (
        <footer id="footer" className="footer-speaker">
            <div className="content-speaker">
                <div className="img-footer"><img className="speaker-img" src={footerImg} alt="footer-image" /></div>
                <div className="text-footer"> 
                    <h1 className="text-title">Descubra os Segredos da Representação Legal</h1>
                    <p className="description">Seja um dos primeiros a receber nosso e-book exclusivo e saia na frente na preparação para o lançamento 
                    do nosso inovador curso de Representação Legal.  Não perca tempo, garanta sua cópia gratuita e inicie sua jornada rumo ao sucesso profissional!</p>
                    <input type="text" placeholder="Digite seu nome" /><br />
                    <input type="email" placeholder="Digite seu email" /> <br />
                    <div className="signup-speaker">
                        <SignupSpeaker />
                    </div>
                </div>
            </div>
        </footer>
    )
}