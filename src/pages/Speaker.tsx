import { FooterSpeaker } from "../components/layout/FooterSpeaker";
import { Header } from "../components/layout/Header";
import speaker from "../assets/images/speaker.svg";
import bradesco from "../assets/images/bradesco.svg";
import itau from "../assets/images/itau.svg";
import santander from "../assets/images/santander.svg";
import prossegur from "../assets/images/prossegur.svg";
import unifacs from "../assets/images/unifacs.svg";
import "../styles/Speaker.css";

export const Speaker = () => {
    return (
        <>
            <Header />
            <div className="content">
                <div className="speaker-profile">
                    <div className="speaker">
                        <div className="img">
                            <img className="img-speaker" src={speaker} alt="speaker" />
                            <div className="img img-speaker-back"></div>
                        </div> 
                    </div>
                    <div className="vertical-line"></div>
                    <div className="speaker-content">
                        <h1 className="title-speaker">Conheça <b>Patrícia Braga Silva</b>, a nossa Representante Legal Oficial </h1> <br />
                        <p className="speaker-description">Patrícia Braga Silva é uma especialista em representação legal, atuando com excelência desde 2015. Sua vasta experiência inclui colaborações com grandes instituições bancárias como o Banco Itaú, Bradesco e Santander, além de ocupar cargos de confiança e liderança em ações estratégicas. 
                        Como mentora e fundadora do renomado curso CARP, Patrícia é apaixonada por capacitar e guiar representantes legais para o sucesso profissional. Conheça seu trabalho inspirador e transforme sua carreira com o curso CARP! </p>
                        <div className="companies">
                            <div className="more-companies">
                                <p>Mais Empresas:</p>
                            </div>
                            <div className="company-logos">
                                <div className="logo">
                                    <img src={prossegur} alt="prossegur" />
                                </div>
                                <div className="logo">
                                    <img src={santander} alt="santander" />
                                </div>
                                <div className="logo">
                                    <img className="itau" src={itau} alt="itau" />
                                </div>
                                <div className="logo">
                                    <img  src={unifacs} alt="unifacs" />
                                </div>
                                <div className="logo">
                                    <img className="bradesco" src={bradesco} alt="bradesco" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSpeaker />
        </>
    )
}