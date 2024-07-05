import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Header from "../components/Header/Header";
import React from "react";

export default function Third() {
  return (
    <div className="h-dvh">
      <Header isMainPage={false} />
      <div className="w-full h-40"></div>

      <section className="h-full-64 bg-primary flex justify-center items-end">
        <div className="text-center mb-16 relative z-20 text-white w-1/2">
          <h2 className="text-5xl mb-8 font-lt-superior font-bold text-white">Оборудование для механической очистки стоков</h2>

          <div className="flex flex-col gap-2">
            <p className="text-xl">Собственное производство</p>
            <p className="text-xl">Индивидуальный подход к проектированию и изготовлению</p>
            <p className="text-xl">Многолетний опыт</p>
          </div>
        </div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-third-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"></div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
      </section>

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}