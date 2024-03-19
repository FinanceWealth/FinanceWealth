import RegisterForm from '../../components/User/register/RegisterForm';
import { promises as fs } from 'fs';
import '../../styles/registerPage.scss';

async function Register() {
    const languageFile = await fs.readFile(process.cwd() + '/src/app/languages/portuguesbr.json', 'utf8');
    const translation = JSON.parse(languageFile);

    return(
        <main id="registerPage">
            <section id="lateralSection">
                <img src="/images/LoginPageIcon.png" />
            </section>
            <section id="loginSection">
                <div className="internalLoginSection">
                    <h2>{translation.RegisterSection.title}</h2>
                    <RegisterForm />
                    <a href='/pages/login' className="createAccount">{translation.RegisterSection.alreadyHaveAccount}</a>
                </div>
                <footer>
                    <span className="trademark">&copy; {translation.Footer.trademark}</span>
                </footer>
            </section>
        </main>
    );
};

export default Register;