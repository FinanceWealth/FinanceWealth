"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGlobe } from "react-icons/fa";
import "../styles/defaults.scss";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="flex static top-0 border-b border-slate-150 items-center px-6 h-6 text-xl font-bold justify-between">
      <a href="/home">
        <h1 className="text-2xl">
          <span>Finance</span> Wealth
        </h1>
      </a>
      <div className="header__righside">
        <ul  className="header__righside__pages">
          <li>
            <a href="./pages/login">Ações</a>
          </li>

          <li>
            <a href="./pages/login">Contato</a>
          </li>
          <li>
            <a href="./pages/login">Sobre nós</a>
          </li>

          <li>
            <a href="./pages/login">FAQ</a>
          </li>

          <li>
            <a href="./pages/login">Entrar</a>
          </li>
          <li className="create__account">
            <a href="./pages/register">Criar sua conta</a>
          </li>

          <li>
            <FaGlobe className="language_section"/>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
