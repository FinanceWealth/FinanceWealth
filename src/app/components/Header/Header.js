"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGlobe } from "react-icons/fa";
import { faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'
import "../../styles/defaults.scss";
import "../../styles/header.scss";

const Header = ({mode, id}) => {
  return (
    <header id={id} className="flex static top-0 border-slate-150 items-center px-6 h-6 w-full text-xl font-bold justify-between">
      <a href="/" id="title">
        <h1 className="text-2xl select-none">
          <FontAwesomeIcon icon={faChartLine} />
          <span>Finance</span> Wealth
        </h1>
      </a>
      {mode == "landing" 

      ?

      <div className="header__rightside">
        <ul className="header__rightside__pages">
          <li><a href="./pages/login" className="option">Ações</a></li>
          <li><a href="./pages/login" className="option">Contato</a></li>
          <li><a href="./pages/login" className="option">Sobre nós</a></li>
          <li><a href="./pages/login" className="option">FAQ</a></li>
          <li><a href="./pages/login" className="option login">Entrar</a></li>
          <li className="create__account"><a href="./pages/register">Criar sua conta</a></li>
          <li>
            <FaGlobe className="language_section"/>
          </li>
        </ul>
      </div>

      :
      
      <div>
        <div className="loginContainer cursor-pointer">
          <span className="username">Username</span>
          <span className="icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </div>}
    </header>
  );
};

export default Header;