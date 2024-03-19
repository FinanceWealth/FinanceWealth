'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/defaults.scss';
import '../styles/header.scss';

const Header = () => {
    const aparecerLista = () => {
        console.log("Aparecer lista de opções de usuário.");
    }

    return(
        <header className="flex absolute top-0 border-b border-slate-150 items-center px-6 h-6 text-xl font-bold justify-between">
            <a href="/home"><h1 className="text-2xl"><span>Finance</span> Wealth</h1></a>
            <div onClick={aparecerLista} className="loginContainer cursor-pointer">
                <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
    );
};

export default Header;