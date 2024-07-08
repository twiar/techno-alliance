import { Outlet, Link } from "react-router-dom";
import thirdSectionImg from "../assets/3.webp";
import Header from "../components/Header/Header";
import React from "react";
import Footer from "../components/Footer/Footer";

export default function Third() {
  return (
    <div className="h-dvh">
      <Header isMainPage={false} />
      <div className="w-full h-16 md:h-40"></div>

      <section className="h-96 md:h-full-64 bg-primary flex justify-center items-end">
        <div className="text-center mb-4 md:mb-16 relative z-20 text-white w-full md:w-1/2">
          <h2 className="text-2xl md:text-5xl mb-4 md:mb-8 font-bold text-white">Оборудование для механической очистки стоков</h2>

          <div className="flex flex-col gap-1 md:gap-2">
            <p className="text-base md:text-xl">Собственное производство</p>
            <p className="text-base md:text-xl">Индивидуальный подход к проектированию и изготовлению</p>
            <p className="text-base md:text-xl">Многолетний опыт</p>
          </div>
        </div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-third-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"></div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
      </section>
      <section className="bg-primary flex justify-center py-10">
        <div className="flex justify-center flex-col">
          <h2 className="text-black text-2xl md:text-5xl font-bold text-center mb-12">Продукция</h2>

          <div className="flex flex-col gap-8 mb-10">
            <div className="flex gap-8 flex-col md:flex-row">
              <Link to="/product" className="block md:h-96 md:w-96 bg-white relative group/item overflow-hidden">
                <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-full h-64 md:h-96 transition duration-500 group-hover/item:scale-105" />
                <p className="absolute w-full bottom-0 left-0 h-12 md:h-16 bg-white flex justify-center items-center">
                  <span className="text-base md:text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
                </p>
              </Link>
              <Link to="/product" className="block md:h-96 md:w-96 bg-white relative group/item overflow-hidden">
                <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-full h-64 md:h-96 transition duration-500 group-hover/item:scale-105" />
                <p className="absolute w-full bottom-0 left-0 h-12 md:h-16 bg-white flex justify-center items-center">
                  <span className="text-base md:text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
                </p>
              </Link>
            </div>
            <div className="flex gap-8 flex-col md:flex-row">
              <Link to="/product" className="block md:h-96 md:w-96 bg-white relative group/item overflow-hidden">
                <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-full h-64 md:h-96 transition duration-500 group-hover/item:scale-105" />
                <p className="absolute w-full bottom-0 left-0 h-12 md:h-16 bg-white flex justify-center items-center">
                  <span className="text-base md:text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
                </p>
              </Link>
              <Link to="/product" className="block md:h-96 md:w-96 bg-white relative group/item overflow-hidden">
                <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-full h-64 md:h-96 transition duration-500 group-hover/item:scale-105" />
                <p className="absolute w-full bottom-0 left-0 h-12 md:h-16 bg-white flex justify-center items-center">
                  <span className="text-base md:text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
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