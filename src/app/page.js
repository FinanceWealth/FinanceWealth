"use client"

import Image from "next/image";
import Container from "./components/Container";
import Header from "./components/Header/Header";
//import Login from "./components/login/page";
import { useState } from 'react';
import DevContainer from './components/devmode/DevContainer';
import './styles/home.scss';
import Parallax from "./components/parallax/Parallax"

export default function Home() {
  const [devMode, setDevMode] = useState(true);
  const devContainers = [
    {
      path: '/pages/login',
      name: 'Página de login'
    },
    {
      path: 'pages/register',
      name: 'Página de registro'
    }
  ];

  return (
    <>
      <Header mode="landing" id="landingHeader" />
      {/* <main className="w-full h-full flex justify-center align-middle items-center">

      </main> */}
      <section className="text__box">
        <div className="banner">
          <Parallax />
        </div>
      </section>

        <div className="flex gap-3">
          {devMode ? devContainers.map((info) => {return <DevContainer path={info.path} name={info.name} />}) : false}
        </div>
    </>
  );
};
