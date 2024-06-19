import { Signup } from '../components/buttons/Signup';
import logo from '../assets/images/logo.png';
import '../styles/Home.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const Home = () => {
    return (
        <>
            <Header />
            <main className="home">
                <div className='logo-home'>
                    <img className='logo-img' src={logo} alt="imagem logo" />
                </div>
                <div className='text-container'>
                    <div className='title'>
                        <b>CARP, o curso que vai te capacitar para atuar como Representante Legal.</b>
                    </div>
                    <div className='description'>
                        <p>Inscreva-se no botão abaixo e receba um e-book exclusivo sobre essa profissão que não exige diploma.</p>
                    </div>
                    <div className='signup'>
                        <Signup />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}