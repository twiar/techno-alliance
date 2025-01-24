import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import React from "react";
import firstSectionImg from "../assets/1.webp";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <div className="h-dvh">
      <Header isMainPage={false} />
      <div className="w-full h-16 lg:h-40"></div>

      <section className="h-24 lg:h-32 bg-primary flex justify-center items-end">
        <div className="text-center mb-4 relative z-20 text-white w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-5xl mb-4 lg:mb-8 font-bold text-white">О компании</h2>
        </div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-first-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"></div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
      </section>
      {/*<div className={`relative h-32 lg:h-16 bg-light flex flex-col lg:flex-row justify-center items-center px-4`}>*/}
      {/*  <Link to="/suppliers" className='h-16 flex justify-center items-center font-bold px-4 transition duration-250 hover:bg-primary'>*/}
      {/*    <span className="uppercase text-black">Новости</span>*/}
      {/*  </Link>*/}
      {/*  <Link to="/about" className='h-16 flex justify-center items-center font-bold px-4 transition duration-250 hover:bg-primary'>*/}
      {/*    <span className="uppercase text-black">Отзывы клиентов</span>*/}
      {/*  </Link>*/}
      {/*  <Link to="/contacts" className='h-16 flex justify-center items-center font-bold px-4 transition duration-250 hover:bg-primary'>*/}
      {/*    <span className="uppercase text-black">Вакансии</span>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      <section className="bg-white flex justify-center py-10">
        <div className="flex justify-center flex-col px-4 lg:px-0 w-full lg:w-1/2">
          <div className="">
            <div className="flex flex-col gap-4">
              <p><strong>ООО «ТЕХНОАЛЬЯНС»</strong> — российский производитель технологических линий и оборудования для производства мясокостной муки, оборудования для механической очистки сточных вод, специальной техники для сбора и транспортировки отходов убоя и падежа птицы и животных.</p>
              <p>Компания «ТЕХНОАЛЬЯНС» обладает производственными мощностями, которые позволяют осуществить весь цикл
                работ производства оборудования для водоочистки.</p>
              <p>Наша компания обладает инженерными, производственными мощностями, обеспечивающие выпуск качественной продукции в необходимой срок.</p>
              <p>Специалисты компании «ТЕХНОАЛЬЯНС» всегда предоставляют грамотную консультацию и подбор оборудования, которые наилучшим образом решат поставленные вами задачи.</p>
              <p>Продукция компании «ТЕХНОАЛЬЯНС» успешно работает на предприятиях России и стран СНГ. Нашими клиентами являются крупные агрохолдинги, фермерские хозяйства, водоканалы, промышленные предприятия.</p>
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