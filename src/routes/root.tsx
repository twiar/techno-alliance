import { Outlet, Link } from "react-router-dom";
import React from 'react';
import Header from '../components/Header/Header';

export default function Root() {
  return (
    <div className="h-dvh md:h-auto">
      <Header isMainPage />

      <div className="h-full-16 md:h-dvh md:pt-16 flex flex-column md:flex-row flex-wrap md:flex-nowrap overflow-hidden">
        <Link to="/first" className="group/item w-full md:w-1/3 xl:w-1/3 bg-cover bg-center bg-no-repeat h-1/3 md:h-full relative overflow-hidden">
          <div className="absolute top-0 h-full flex flex-col justify-end z-20 pointer-events-none transition duration-500 group-hover/item:-translate-y-1">
            <h2 className="text-base md:text-3xl text-white p-4 w-4/5 font-lt-superior font-bold">Технологические линии и оборудование для получения мясокостной муки</h2>
          </div>
          <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-first-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-90 group-hover/item:opacity-50"></div>
          <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
        </Link>
        <Link to="/second" className="group/item w-full md:w-1/3 xl:w-1/3 bg-cover bg-center bg-no-repeat h-1/3 md:h-full relative overflow-hidden">
          <div className="absolute top-0 h-full flex flex-col justify-end z-20 pointer-events-none transition duration-500 group-hover/item:-translate-y-1">
            <h2 className="text-base md:text-3xl text-white p-4 w-4/5 font-lt-superior font-bold">Специальная техника для транспортировки биологического сырья</h2>
          </div>
          <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-second-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-90 group-hover/item:opacity-50"></div>
          <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
        </Link>
        <Link to="/third" className="group/item w-full md:w-1/3 xl:w-1/3 bg-cover bg-center bg-no-repeat h-1/3 md:h-full relative overflow-hidden">
          <div className="absolute top-0 h-full flex flex-col justify-end z-20 pointer-events-none transition duration-500 group-hover/item:-translate-y-1">
            <h2 className="text-base md:text-3xl text-white p-4 w-4/5 font-lt-superior font-bold">Оборудование для механической очистки стоков</h2>
          </div>
          <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-third-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-90 group-hover/item:opacity-50"></div>
          <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
        </Link>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}