import '../styles/About.css';
import banner from '../assets/images/banner.png';
import { Header } from '../components/layout/Header';
import {FooterAbout} from '../components/layout/FooterAbout';

export const About = () => {
    return (
        <>
        <Header />
            <div className='about'>
                <div className="about-content">
                    <h1 className='title-about'>Sobre o curso</h1>
                    <p className='text'>Você sabia que a profissão de Representante Legal é uma das carreiras mais promissoras e desafiadoras nos dias de hoje? Com o curso de Representante Legal, você terá a oportunidade de aprender as habilidades essenciais e as estratégias mais inovadoras para se destacar nesse mercado em expansão. <br /><br />

                        Descubra como se tornar um especialista em representação legal, dominando as técnicas mais eficazes de comunicação e negociação, entendendo o papel fundamental de um representante legal nos processos jurídicos e construindo uma carreira sólida e recompensadora.<br /><br />

                        Ao se inscrever nessa página você receberá gratuitamente no seu e-mail um e-book exclusivo para conhecer mais sobre essa profissão, além de participar de uma lista vip que serão os primeiros a saberem a data de lançamento oficial do curso e muitas novidades.<br /><br />

                        Venha fazer parte desse universo de oportunidades e crescimento profissional!</p>
                    <div className="cards">
                        <div className="card">Oportunidade de emprego sem  necessidade de diploma </div>
                        <div className="card">Comunidade exclusiva no WhatsApp</div>
                        <div className="card">Certificado de conclusão</div>
                        <div className="card">Preparo para atuar em audiências trabalhistas e cíveis</div>
                        <div className="card">4H de aulas gravadas com uma profissional experiente</div>
                    </div>
                    <div className='banner'>
                        <img className="img-banner" src={banner} alt="banner" />
                    </div>
                </div>
                <div className="about-section">
                    <h1 className='title-section'>Esse curso é para você</h1>
                    <div className="cards-section">
                        <div className="card-section"> <h2>Estudantes de Direito</h2><br />
                        Para estudantes de direito ávidos por conhecimento e ansiosos para adquirir experiência prática, o curso de Representação Legal é uma porta de entrada para o emocionante e desafiador mundo jurídico.
                            Aprenda com profissionais renomados e destaque-se desde o início de sua carreira, garantindo um diferencial competitivo no mercado. 
                        </div>
                        <div className="card-section"> <h2>Pessoas com Afinidade na Área Jurídica</h2>
                        Se você possui afinidade com a área jurídica e busca expandir seu conhecimento, o curso de Representação Legal oferece uma oportunidade única para explorar novos horizontes profissionais e pessoais.
                        Aprofunde seus conhecimentos e descubra as diversas oportunidades de atuação neste campo dinâmico e desafiador.
                        </div>
                        <div className="card-section"><h2>Escritórios de Advocacia</h2>
                        O curso de Representação Legal é a solução perfeita para escritórios de advocacia que desejam oferecer treinamento personalizado e avançado para seus funcionários. 
                        Capacite seus profissionais com as habilidades necessárias para atender às demandas variadas de cada cliente, garantindo um serviço de excelência em todos os níveis.
                        </div>
                    </div>
                </div>
            </div>
            <FooterAbout />
        </>
    )

}