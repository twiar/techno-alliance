import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import React from "react";
import firstSectionImg from "../assets/1.webp";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <div className="h-dvh">
      <Header isMainPage={false} />
      <div className="w-full h-16 md:h-40"></div>

      <section className="h-24 md:h-32 bg-primary flex justify-center items-end">
        <div className="text-center mb-4 md:mb-16 relative z-20 text-white w-full md:w-1/2">
          <h2 className="text-2xl md:text-5xl mb-4 md:mb-8 font-bold text-white">О компании</h2>
        </div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-first-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"></div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
      </section>
      <div className={`relative h-32 md:h-16 bg-light flex flex-col md:flex-row justify-center items-center px-4`}>
        <Link to="/suppliers" className='h-16 flex justify-center items-center font-bold px-4 transition duration-250 hover:bg-primary'>
          <span className="uppercase text-black">Новости</span>
        </Link>
        <Link to="/about" className='h-16 flex justify-center items-center font-bold px-4 transition duration-250 hover:bg-primary'>
          <span className="uppercase text-black">Отзывы клиентов</span>
        </Link>
        <Link to="/contacts" className='h-16 flex justify-center items-center font-bold px-4 transition duration-250 hover:bg-primary'>
          <span className="uppercase text-black">Вакансии</span>
        </Link>
      </div>
      <section className="bg-white flex justify-center py-10">
        <div className="flex justify-center flex-col px-4 md:px-0 w-full md:w-1/2">
          <div className="">
            <div className="flex flex-col gap-4">
              <p><strong>ООО «ТЕХНОАЛЬЯНС»</strong> — российская инжиниринг-производственная
                компания, которая занимается проектированием, производством и реализацией оборудования для очистки
                сточных вод.</p>
              <p>Компания «ТЕХНОАЛЬЯНС» обладает производственными мощностями, которые позволяют осуществить весь цикл
                работ производства оборудования для водоочистки.</p>
              <p>С 2014 года «ТЕХНОАЛЬЯНС» работает на рынке данной отрасли в качестве поставщика совместно с крупными
                производителями.</p>
              <p>В 2015 году производство оборудования для водоочистки было полностью передано под контроль «НафтаЭКО
                ИК» для повышения качества производимой продукции и обеспечения гибкости в выполнении заказов. Компания
                стала полноправным «игроком» на рынке.</p>
              <p>Сегодня «ТЕХНОАЛЬЯНС» представляет собой стабильное предприятие по производству оборудования для
                очистки сточных вод. В арсенале компании находятся необходимые элементы инженерного и
                жизнеобеспечивающего хозяйства, мощный производственный потенциал, квалифицированный персонал,
                современные технологии.</p>
              <p>Компания «ТЕХНОАЛЬЯНС» зарекомендовала себя как надежный поставщик качественных и надежных решений,
                подобранных с учетом потребностей Заказчика.</p>
              <p>Оборудование для водоочистки «ТЕХНОАЛЬЯНС» успешно работает на промышленных и коммунальных очистных
                сооружениях России и стран СНГ.</p>
              <p>&nbsp;</p>
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