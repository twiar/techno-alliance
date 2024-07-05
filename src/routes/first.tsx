import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import React from "react";

export default function First() {
  return (
    <div className="h-dvh">
      <Header isMainPage={false} />
      <div className="w-full h-40"></div>

      <section className="h-full-64 bg-primary flex justify-center items-end">
        <div className="text-center mb-16 relative z-20 text-white w-1/2">
          <h2 className="text-5xl mb-8 font-lt-superior font-bold text-white">Технологические линии и оборудование для получения мясокостной муки</h2>

          <div className="flex flex-col gap-2">
            <p className="text-xl">Собственное производство</p>
            <p className="text-xl">Индивидуальный подход к проектированию и изготовлению</p>
            <p className="text-xl">Многолетний опыт</p>
          </div>
        </div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-first-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"></div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
      </section>
      {/*<section className="blue down">*/}
      {/*  <div className="container">*/}
      {/*    <div className="production">*/}
      {/*      <h2>Продукция</h2>*/}

      {/*      <div className="product_box">*/}

      {/*        <a href="/products/#jak8">*/}
      {/*          <img alt="Здание решеток и КНС" width="579" height="410"*/}
      {/*               src="/wp-content/uploads/products_groups/8_1_small.jpg" border="0" />*/}

      {/*          <p>*/}
      {/*            <span>Здание решеток и КНС</span>*/}
      {/*          </p>*/}
      {/*        </a>*/}


      {/*        <a href="/products/#jak4">*/}
      {/*          <img alt="Песколовки" width="780" height="579" src="/wp-content/uploads/products_groups/4_1_small.jpg"*/}
      {/*               border="0" />*/}

      {/*          <p>*/}
      {/*            <span>Песколовки</span>*/}
      {/*          </p>*/}
      {/*        </a>*/}


      {/*        <a href="/products/#jak6">*/}
      {/*          <img alt="Водоподготовка и сепарация" width="280" height="180"*/}
      {/*               src="/wp-content/uploads/products_groups/6_1_small.jpg" border="0" />*/}

      {/*          <p>*/}
      {/*            <span>Водоподготовка и сепарация</span>*/}
      {/*          </p>*/}
      {/*        </a>*/}


      {/*        <a href="/products/#jak9">*/}
      {/*          <img alt="Щитовые затворы и запорная арматура" width="280" height="180"*/}
      {/*               src="/wp-content/uploads/products_groups/9_1_small.jpg" border="0" />*/}

      {/*          <p>*/}
      {/*            <span>Щитовые затворы и запорная арматура</span>*/}
      {/*          </p>*/}
      {/*        </a>*/}


      {/*        <a href="/products/#jak2">*/}
      {/*          <img alt="Оборудование <br>отстойников" width="800" height="533"*/}
      {/*               src="/wp-content/uploads/products_groups/2_1_small.jpg" border="0" />*/}

      {/*          <p>*/}
      {/*            <span>Оборудование <br />отстойников</span>*/}
      {/*          </p>*/}
      {/*        </a>*/}


      {/*        <a href="/products/#jak5">*/}
      {/*          <img alt="Обработка осадка" width="800" height="590"*/}
      {/*               src="/wp-content/uploads/products_groups/5_1_small.jpg" border="0" />*/}

      {/*          <p>*/}
      {/*            <span>Обработка осадка</span>*/}
      {/*          </p>*/}
      {/*        </a>*/}


      {/*        <a href="/products/#jak7">*/}
      {/*          <img alt="Тонкая очистка" width="280" height="180"*/}
      {/*               src="/wp-content/uploads/products_groups/7_1_small.jpg" border="0" />*/}

      {/*          <p>*/}
      {/*            <span>Тонкая очистка</span>*/}
      {/*          </p>*/}
      {/*        </a>*/}


      {/*        <a href="/products/#jak10">*/}
      {/*          <img alt="Модули отстаивания, флотации и очистки" width="299" height="238"*/}
      {/*               src="/wp-content/uploads/products_groups/10_1_small.jpg" border="0" />*/}

      {/*          <p>*/}
      {/*            <span>Модули отстаивания, флотации и очистки</span>*/}
      {/*          </p>*/}
      {/*        </a>*/}


      {/*        <a href="/products/#jak11">*/}
      {/*          <img alt="Перемешивающие устройства и подъемное оборудование" width="1931" height="1608"*/}
      {/*               src="/wp-content/uploads/products_groups/11_1_small.jpg" border="0" />*/}

      {/*          <p>*/}
      {/*            <span>Перемешивающие устройства и подъемное оборудование</span>*/}
      {/*          </p>*/}
      {/*        </a>*/}


      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      {/*<footer>*/}
      {/*  <div className="container">*/}
      {/*    <div className="footer_line">*/}
      {/*      <div className="foot_info">*/}
      {/*        <p>© «ТЕХНОАЛЬЯНС»</p>*/}


      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</footer>*/}
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}