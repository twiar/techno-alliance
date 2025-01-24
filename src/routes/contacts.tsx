import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import React from "react";
import firstSectionImg from "../assets/1.webp";
import Footer from "../components/Footer/Footer";

export default function Contacts() {
  return (
    <div className="h-dvh">
      <Header isMainPage={false} />
      <div className="w-full h-16 lg:h-40"></div>

      <section className="h-24 lg:h-32 bg-primary flex justify-center items-end">
        <div className="text-center mb-4 relative z-20 text-white w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-5xl mb-4 lg:mb-8 font-bold text-white">Контакты</h2>
        </div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-first-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"></div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
      </section>
      <section className="w-full">
        <div className="flex flex-col justify-center items-center py-10 gap-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-between items-center">
            <div className="">
              <a href="tel:+79081353985">+7 (908) 135-39-85</a>
            </div>
            <div className="">
              <p></p>
              <p>394026, г. Воронеж, ул. Солнечная,
                д. 31А, офис 423/2</p>
            </div>
            <div className="">
              <a href="mailto:teh-al-zakaz@yandex.ru">teh-al-zakaz@yandex.ru</a></div>
          </div>
          {/*<div className="">*/}
          {/*  <div className="">*/}
          {/*    <p className="text-xl lg:text-3xl mb-4 text-center">Территориальные менеджеры по продажам</p>*/}
          {/*    <hr />*/}
          {/*  </div>*/}
          {/*  <div className="flex flex-col lg:flex-row gap-8 mt-4 px-4 lg:px-0">*/}
          {/*    <div className="">*/}
          {/*      <p>Руководитель отдела сбыта</p>*/}
          {/*      <p>+7 (908) 135-39-85</p>*/}
          {/*      <p><a href="mailto:teh-al-zakaz@yandex.ru">teh-al-zakaz@yandex.ru</a></p>*/}
          {/*    </div>*/}
          {/*    <div className="">*/}
          {/*      <p>ЦФО, ЮФО, СКФО, СЗФО, Беларусь</p>*/}
          {/*      <p>+7 (473) 999-99-99</p>*/}
          {/*      <p><a href="mailto:teh-al-zakaz@yandex.ru">teh-al-zakaz@yandex.ru</a></p>*/}
          {/*    </div>*/}
          {/*    <div className="">*/}
          {/*      <p>ЦФО, ПФО, СФО, ДФО, Казахстан</p>*/}
          {/*      <p>+7 (473) 999-99-99</p>*/}
          {/*      <p><a href="mailto:teh-al-zakaz@yandex.ru">teh-al-zakaz@yandex.ru</a></p>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </section>
      <section className="w-full lg:hidden">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Adfe8437ea8ad72431465114a75368e98ed19270de6db639f219736c690313a29&amp;source=constructor"
          width="100%" height="300" frameBorder="0"></iframe>
      </section>
      <section className="w-full hidden lg:block">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Adfe8437ea8ad72431465114a75368e98ed19270de6db639f219736c690313a29&amp;source=constructor"
          width="100%" height="600" frameBorder="0"></iframe>
      </section>
      <Footer />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}