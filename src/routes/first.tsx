import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import React from "react";
import firstSectionImg from "../assets/1.webp";
import Footer from "../components/Footer/Footer";

export default function First() {
  return (
    <div className="h-dvh">
      <Header isMainPage={false} />
      <div className="w-full h-40"></div>

      <section className="h-full-64 bg-primary flex justify-center items-end">
        <div className="text-center mb-16 relative z-20 text-white w-1/2">
          <h2 className="text-5xl mb-8 font-bold text-white">Технологические линии и оборудование для получения мясокостной муки</h2>

          <div className="flex flex-col gap-2">
            <p className="text-xl">Собственное производство</p>
            <p className="text-xl">Индивидуальный подход к проектированию и изготовлению</p>
            <p className="text-xl">Многолетний опыт</p>
          </div>
        </div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-first-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"></div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
      </section>
      <section className="bg-primary flex justify-center py-10">
        <div className="flex justify-center flex-col">
            <h2 className="text-black text-5xl font-bold text-center mb-12">Продукция</h2>

            <div className="flex flex-col gap-8 mb-10">
              <div className="flex gap-8">
                <Link to="/product" className="block h-96 w-96 bg-white relative group/item overflow-hidden">
                  <img alt="Здание решеток и КНС" src={firstSectionImg} className="object-cover w-full h-96 transition duration-500 group-hover/item:scale-105" />
                  <p className="absolute w-full bottom-0 left-0 h-16 bg-white flex justify-center items-center">
                    <span className="text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
                  </p>
                </Link>
                <Link to="/product" className="block h-96 w-96 bg-white relative group/item overflow-hidden">
                  <img alt="Здание решеток и КНС" src={firstSectionImg} className="object-cover w-full h-96 transition duration-500 group-hover/item:scale-105" />
                  <p className="absolute w-full bottom-0 left-0 h-16 bg-white flex justify-center items-center">
                    <span className="text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
                  </p>
                </Link>
              </div>
              <div className="flex gap-8">
                <Link to="/product" className="block h-96 w-96 bg-white relative group/item overflow-hidden">
                  <img alt="Здание решеток и КНС" src={firstSectionImg} className="object-cover w-full h-96 transition duration-500 group-hover/item:scale-105" />
                  <p className="absolute w-full bottom-0 left-0 h-16 bg-white flex justify-center items-center">
                    <span className="text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
                  </p>
                </Link>
                <Link to="/product" className="block h-96 w-96 bg-white relative group/item overflow-hidden">
                  <img alt="Здание решеток и КНС" src={firstSectionImg} className="object-cover w-full h-96 transition duration-500 group-hover/item:scale-105" />
                  <p className="absolute w-full bottom-0 left-0 h-16 bg-white flex justify-center items-center">
                    <span className="text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
                  </p>
                </Link>
              </div>
            </div>
        </div>
      </section>
      <Footer />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}