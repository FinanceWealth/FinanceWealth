import LoginForm from '../../components/User/login/LoginForm';
import { promises as fs } from 'fs';

async function Login() {
    const languageFile = await fs.readFile(process.cwd() + '/src/app/languages/english.json', 'utf8');
    const translation = JSON.parse(languageFile);

    return(
        <main>
            <section id="lateralSection">
                <img src="/images/LoginPageIcon.png" />
            </section>
            <section id="loginSection">
                <div className="internalLoginSection">
                    <h2>{translation.LoginSection.title}</h2>
                    <LoginForm />
                    <a href='/pages/register' className="createAccount">{translation.LoginSection.createAccount}</a>
                </div>
                <footer>
                    <span className="trademark">&copy; {translation.Footer.trademark}</span>
                </footer>
            </section>
        </main>
    );
};

export default Login;