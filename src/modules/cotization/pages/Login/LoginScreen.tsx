import FormComponent from '../../components/Form/FormComponent';
import './LoginScreen.css';

function LoginScreen() {
    return (
    <section className='container'>
            <header className='home'>
                    <img src="logo_Rimac.svg"/>
                    <div className='information'>
                        <p className='title'>¡Compra por este medio!</p>
                        <div className='telephonePrincipal'>
                            <img className="logo" src="GlTelephoneSolid.svg" />
                            <p className="number">(01) 411 6001</p>
                        </div>
                    </div>
            </header>
            <aside className='box'>
                    <div className='card'>
                        <div className='mask'>
                            <div className='rectangle'>
                            <img src='image_Home.svg'/>
                            </div>
                        </div>
                    </div>
            </aside>
            <main className='main'>
                <FormComponent/>
            </main>
            <footer className='footer'>
                <img src="logo_Rimac.svg" />
                <p className='footer__title'>© 2023 RIMAC Seguros y Reaseguros.</p>
            </footer>
    </section>
    );
}

export default LoginScreen;