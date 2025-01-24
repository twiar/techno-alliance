import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import React, {useState} from "react";
import Footer from "../components/Footer/Footer";

export default function Suppliers() {
  const [col1, setCol1] = useState(false);
  const [col2, setCol2] = useState(false);
  const [col3, setCol3] = useState(false);
  const [col4, setCol4] = useState(false);
  const [col5, setCol5] = useState(false);
  const [col6, setCol6] = useState(false);
  const [col7, setCol7] = useState(false);
  const [col8, setCol8] = useState(false);
  const [col9, setCol9] = useState(false);
  const [col10, setCol10] = useState(false);
  const [col11, setCol11] = useState(false);

  return (
    <div className="h-dvh">
      <Header isMainPage={false} />
      <div className="w-full h-16 lg:h-40"></div>

      <section className="h-24 lg:h-32 bg-primary flex justify-center items-end">
        <div className="text-center mb-4 relative z-20 text-white w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-5xl mb-4 lg:mb-8 font-bold text-white">Поставщикам</h2>
        </div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-first-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"></div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
      </section>
      <section className="bg-white flex justify-center py-10">
        <div className="flex justify-center flex-col px-4 lg:px-0 w-full lg:w-1/2">
          <div className="">
            <div className="text-lg">
              <h2>Компания ООО «ТЕХНОАЛЬЯНС» ищет партнеров, которые готовы осуществить поставку
              следующих товаров:</h2>
              <div>
                <ul className="py-4">
                        <li>Металлопрокат из нержавеющих и углеродистых марок стали</li>
                        <li>Лакокрасочная продукция</li>
                        <li>Редукторы, мотор-редукторы, эл. двигатели</li>
                        <li>Подшипниковые узлы (подшипники, корпуса, манжеты), опорно-поворотные устройства</li>
                        <li>Муфты, шкивы (ременная-передача)</li>
                        <li>Комплектующие к гидравлической системе</li>
                      </ul>
                <p className="font-bold"><a href="mailto:teh-al-zakaz@yandex.ru">teh-al-zakaz@yandex.ru</a><br /><a href="tel:+7 (908) 135-39-85">+7 (908) 135-39-85</a></p>
              </div>
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