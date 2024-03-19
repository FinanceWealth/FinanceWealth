import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { promises as fs } from 'fs';
import ShowPass from '../ShowPass';
import '../../../styles/loginPage.scss';


async function Login() {
    const languageFile = await fs.readFile(process.cwd() + '/src/app/languages/english.json', 'utf8');
    const translation = JSON.parse(languageFile);

    return(
        <form method="POST">
            <div id="inputBox" className="flex flex-col">
                <div className="inputContainer">
                    <FontAwesomeIcon icon={faUser} />
                    <input type="email" id="email" name="email" className="login-email" placeholder={translation.LoginSection.emailplaceholder} />
                </div>
                <div className="inputContainer">
                    <FontAwesomeIcon icon={faLock} />
                    <ShowPass quote={translation.LoginSection.showPass} placeholder={translation.LoginSection.passwordplaceholder} />
                </div>
            </div>
            <div className="checkboxContainer">
                <input type="checkbox" name="keepLogin" id="keepLogin" />
                <label for="keepLogin">{translation.LoginSection.keepLogin}</label>
            </div>
            <input type="submit" value="Login" className="inputSubmit" />
        </form>
    );
};

/*
<div id="inputBox" className="flex flex-col">
    <div className="inputContainer">
        <FontAwesomeIcon icon={faUser} />
        <input type="email" id="email" name="email" className="input-email" placeholder="E-mail" />
    </div>
    <div className="inputContainer" onClick={mostrarlog}>
        <FontAwesomeIcon icon={faLock} />
        <ShowPass quote={JSON.stringify(translation.LoginSection.showPass)} />
    </div>
</div>
    <div className="checkboxContainer">
    <input type="checkbox" name="keepLogin" id="keepLogin" />
    <label for="keepLogin">{translation.LoginSection.keepLogin}</label>
</div>
*/

export default Login;