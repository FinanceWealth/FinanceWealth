"use client"

import Image from "next/image";
import Container from "../../components/Container";
import Header from "../../components/header/Header";
import Head from 'next/head';
import { useState } from 'react';
import DevContainer from '../../components/devmode/DevContainer'


export default function Home() {
  const [devMode, setDevMode] = useState(true);
  const devContainers = [
    {
      path: '/',
      name: 'Página inicial'
    },
    {
      path: '/pages/login',
      name: 'Página de login'
    },
    {
      path: '/pages/register',
      name: 'Página de registro'
    }
  ];

  return (
    <>
      <Header id="loggedHeader" />
      <main className="w-full h-full flex align-mid justify-center items-center">
        <div className="flex gap-3">
            {devMode ? devContainers.map((info) => {return <DevContainer path={info.path} name={info.name} />}) : false}
        </div>
      </main>
    </>
  );
};