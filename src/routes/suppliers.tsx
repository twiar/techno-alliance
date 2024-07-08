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
      <div className="w-full h-40"></div>

      <section className="h-32 bg-primary flex justify-center items-center">
        <div className="text-center relative z-20 text-white w-1/2">
          <h2 className="text-5xl mb-8 font-bold text-white">Поставщикам</h2>
        </div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-first-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"></div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
      </section>
      <section className="bg-white flex justify-center py-10">
        <div className="flex justify-center flex-col w-1/2">
          <div className="">
            <div className="">
              <p>Компания ООО «ТЕХНОАЛЬЯНС» всегда готова рассматривать предложения о сотрудничестве с поставщиками
                товаров и услуг, проектными институтами и строительными организациями.</p>
              <div>
                <h2>Поставщикам материалов и комплектующих</h2>
                <div className="w-full flex gap-8 mb-4">
                  <div>
                    <h4 className="font-semibold underline cursor-pointer hover:no-underline" onClick={() => setCol1(!col1)}>Металлопрокат из нержавеющих<br />
                      и углеродистых марок стали</h4>
                    <div className={`${col1 ? 'block' : 'hidden'}`}>
                      <ul className="py-4">
                        <li>листы</li>
                        <li>трубы</li>
                        <li>круги</li>
                        <li>швеллеры</li>
                        <li>полосы</li>
                        <li>трубы</li>
                        <li>перфолисты</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold underline cursor-pointer hover:no-underline" onClick={() => setCol2(!col2)}>Полимерная продукция</h4>
                    <div className={`${col2 ? 'block' : 'hidden'}`}>
                      <ul className="py-4">
                        <li>листы</li>
                        <li>техпластины</li>
                        <li>трубы</li>
                        <li>рукава</li>
                        <li>ремни</li>
                      </ul>
                    </div>
                    <h4 className="font-semibold underline cursor-pointer hover:no-underline" onClick={() => setCol3(!col3)}>Лакокрасочная продукция</h4>
                    <div className={`${col3 ? 'block' : 'hidden'}`}>
                      <ul className="py-4">
                        <li>грунты</li>
                        <li>грунт-эмали, в т.ч. по нержавеющей стали</li>
                        <li>преобразователи ржавчины</li>
                        <li>цинкосодержащие смеси</li>
                        <li>герметики</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>Иван Иванов<br />
                  Специалист по снабжению<br />
                  +7 (473) 999-99-99 (доб. 1)</p>
                <hr className="my-4" />
                <h2>Комплектующие</h2>
                <div className="w-full flex gap-8 mb-4">
                  <div>
                    <h4 className="font-semibold underline cursor-pointer hover:no-underline" onClick={() => setCol4(!col4)}>Приводная часть</h4>
                    <div className={`${col4 ? 'block' : 'hidden'}`}>
                      <ul className="py-4">
                        <li>редукторы</li>
                        <li>мотор-редукторы</li>
                        <li>эл.двигатели</li>
                        <li>мотор-колеса</li>
                        <li>колеса и диски</li>
                      </ul>
                    </div>
                    <h4 className="font-semibold underline cursor-pointer hover:no-underline" onClick={() => setCol5(!col5)}>Узлы вращения</h4>
                    <div className={`${col5 ? 'block' : 'hidden'}`}>
                      <ul className="py-4">
                        <li>подшипниковые узлы: подшипники, корпуса, манжеты</li>
                        <li>опорно-поворотные устройства</li>
                        <li>муфты</li>
                        <li>звездочки и валы</li>
                        <li>шкивы (ременная-передача)</li>
                      </ul>
                    </div>
                    <h4 className="font-semibold underline cursor-pointer hover:no-underline" onClick={() => setCol6(!col6)}>Гидравлика</h4>
                    <div className={`${col6 ? 'block' : 'hidden'}`}>
                      <ul className="py-4">
                        <li>гидроцилиндры</li>
                        <li>гидроарматура : фитинги, крышки, клапаны и т.д RGS</li>
                        <li>рукава РВД</li>
                        <li>гидромоторы</li>
                        <li>гидростанции</li>
                        <li>гидронасосы</li>
                      </ul>
                    </div>
                    <h4 className="font-semibold underline cursor-pointer hover:no-underline" onClick={() => setCol7(!col7)}>Запорная арматура и измерительные приборы</h4>
                    <div className={`${col7 ? 'block' : 'hidden'}`}>
                      <ul className="py-4">
                        <li>краны, вентили</li>
                        <li>шиберные затворы</li>
                        <li>конденсатоотводчики</li>
                        <li>предохранительные клапаны</li>
                        <li>манометры</li>
                        <li>вакуумметры</li>
                        <li>датчики (всех типов)</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold underline cursor-pointer hover:no-underline" onClick={() => setCol8(!col8)}>Оборудование насосное</h4>
                    <div className={`${col8 ? 'block' : 'hidden'}`}>
                      <ul className="py-4">
                        <li>гидронасосы</li>
                        <li>коробки отбора мощности</li>
                        <li>винтовые насосы</li>
                        <li>мембранные насосы</li>
                        <li>и прочее насосное оборудование</li>
                      </ul>
                    </div>
                    <h4 className="font-semibold underline cursor-pointer hover:no-underline" onClick={() => setCol9(!col9)}>Комплектующие шнековых транспортеров</h4>
                    <div className={`${col9 ? 'block' : 'hidden'}`}>
                      <ul className="py-4">
                        <li>витки</li>
                        <li>спирали</li>
                        <li>шнековые валы</li>
                      </ul>
                    </div>
                    <h4 className="font-semibold underline cursor-pointer hover:no-underline" onClick={() => setCol10(!col10)}>Крепёжные элементы</h4>
                    <div className={`${col10 ? 'block' : 'hidden'}`}>
                      <ul className="py-4">
                        <li>метизы (болты, гайки, шайбы)</li>
                        <li>шплинты</li>
                        <li>рукоятки, стропы, талрепы</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p><a href="mailto:teh-al-zakaz@yandex.ru">teh-al-zakaz@yandex.ru</a><br />
                  +7 (473) 999-99-99 (доб. 1);</p>
                <hr className="my-4" />
                <h2>Поставщикам услуг (аутсорсинг)</h2>
                <div className="w-full flex gap-8 mb-4">
                  <div>
                    <h4 className="font-semibold underline cursor-pointer hover:no-underline" onClick={() => setCol11(!col11)}>Услуги</h4>
                    <div className={`${col11 ? 'block' : 'hidden'}`}>
                      <ul className="py-4">
                        <li>механическая обработка</li>
                        <li>литье стальное и чугунное, поковка</li>
                        <li>раскрой металла (гидроабразивная резка, лазерная резка)</li>
                        <li>сварочные работы по нержавеющей стали и алюминию</li>
                        <li>нанесение защитных лакокрасочных и специальных покрытий</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p><a href="mailto:teh-al-zakaz@yandex.ru">teh-al-zakaz@yandex.ru</a><br />
                  +7 (473) 999-99-99 (доб. 1)</p>
                <hr className="my-4" />
                <h2>Транспортным компаниям</h2>
                <p><a href="mailto:teh-al-zakaz@yandex.ru">teh-al-zakaz@yandex.ru</a><br />
                  +7 (473) 999-99-99 (доб. 1)</p>
                <hr className="my-4" />
                <h2>Проектным институтам, строительным и инжиниринговым организациям</h2>
                <p>Сфера переработки отходов и обработки бытовых и промышленных стоков<br />
                  +7 (473) 999-99-99</p>
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