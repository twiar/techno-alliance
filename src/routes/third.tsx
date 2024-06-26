import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Third() {
  return (
    <>
      <header>
        <div className="container">
          <div className="head_menu">
            <div className="logo">
              <a href="/">
                <img src={logo} />
              </a>
            </div>

            <div className="menu-%d0%b2%d0%b5%d1%80%d1%85%d0%bd%d0%b5%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e-container">
              <ul id="menu">
                <li className="menu_line"><a href="http://naftaeco-water.ru/products/"
                                             className="menu_item">Продукция</a>
                  <ul className="menu_box">
                    <li>
                      <ul className="menu_li">
                        <li>
                          <div className="column_box">
                            <ul>
                              <li><a href="http://naftaeco-water.ru/product-category/zdanie-reshetok-i-kns/"
                                     className="menu_link">Здание решеток и КНС</a></li>

                              <li><a href="http://naftaeco-water.ru/product/reshetkadrobilka-rdk-1/" className="">Решетка-дробилка
                                РДК</a></li>
                              <li><a href="http://naftaeco-water.ru/product/reshetkadrobilka-rd-1/" className="">Решетка-дробилка
                                РД</a></li>
                              <li><a href="http://naftaeco-water.ru/product/reshetka-grabelnaya-gr-1/" className="">Решетка
                                грабельная ГР</a></li>
                              <li><a href="http://naftaeco-water.ru/product/grabli-mehanicheskie-mg-1/" className="">Грабли
                                механические МГ</a></li>
                              <li><a href="http://naftaeco-water.ru/product/reshetka-mehanicheskaya-rmu-1/"
                                     className="">Решетка механическая РМУ</a></li>
                              <li><a href="http://naftaeco-water.ru/product/reshetka-ruchnoy-ochistki/" className="">Решетка
                                ручной очистки</a></li>
                              <li><a href="http://naftaeco-water.ru/product/reshetka-stupenchataya-rs/" className="">Решетка
                                ступенчатая РС</a></li>
                              <li><a href="http://naftaeco-water.ru/product/shnekovaya-reshetka-shr/" className="">Шнековая
                                решетка ШР</a></li>
                              <li><a href="http://naftaeco-water.ru/product/shnekoviy-press-shp-1/" className="">Шнековый
                                пресс ШП</a></li>
                              <li><a href="http://naftaeco-water.ru/product/shnekoviy-transporter-sht/" className="">Шнековый
                                транспортер ШТ</a></li>
                              <li><a href="http://naftaeco-water.ru/product/drobilka-othodov-dot-1/" className="">Дробилка
                                отходов ДОТ</a></li>
                              <li><a href="http://naftaeco-water.ru/product/drobilka-othodov-d3v-1/" className="">Дробилка
                                отходов Д-3В</a></li>
                              <li><a
                                href="http://naftaeco-water.ru/product/filtruyushaya-korzina-s-podemnim-mehanizmom/"
                                className="">Фильтрующая корзина с подъемным механизмом КПМ</a></li>
                            </ul>
                            <ul>
                              <li><a href="http://naftaeco-water.ru/product-category/peskolovki/"
                                     className="menu_link">Песколовки</a></li>

                              <li><a href="http://naftaeco-water.ru/product/mehanizm-skrebkoviy-mspts-1/"
                                     className="">Механизм скребковый МСПЦ</a></li>
                              <li><a href="http://naftaeco-water.ru/product/mehanizm-skrebkoviy-msp/" className="">Механизм
                                скребковый МСП</a></li>
                              <li><a href="http://naftaeco-water.ru/product/donniy-skrebkoviy-mehanizm/" className="">Донный
                                скребковый механизм</a></li>
                              <li><a href="http://naftaeco-water.ru/product/peskolovka-tangentsialnaya/" className="">Песколовка
                                тангенциальная</a></li>
                              <li><a href="http://naftaeco-water.ru/product/gidroelevator-ge-1/" className="">Гидроэлеватор
                                ГЭ</a></li>
                              <li><a href="http://naftaeco-water.ru/product/peskovoy-bunker-1/" className="">Песковой
                                бункер</a></li>
                            </ul>
                            <ul>
                              <li><a href="http://naftaeco-water.ru/product-category/vodopodgotovka-i-separatsiya/"
                                     className="menu_link">Водоподготовка и сепарация</a></li>

                              <li><a href="http://naftaeco-water.ru/product/separator/" className="">Сепаратор</a>
                              </li>
                              <li><a href="http://naftaeco-water.ru/product/barabannaya-setka-1/" className="">Барабанная
                                сетка</a></li>
                              <li><a href="http://naftaeco-water.ru/product/setka-vodoochistnaya-beskarkasnaya-svb/"
                                     className="">Сетка водоочистная бескаркасная СВБ</a></li>
                              <li><a href="http://naftaeco-water.ru/product/press-pera-1/" className="">Пресс пера</a>
                              </li>
                            </ul>
                            <ul>
                              <li><a
                                href="http://naftaeco-water.ru/product-category/shitovie-zatvori-i-zapornaya-armatura/"
                                className="menu_link">Щитовые затворы и запорная арматура</a></li>

                              <li><a href="http://naftaeco-water.ru/product/shitovie-zatvori/" className="">Щитовые
                                затворы</a></li>
                              <li><a href="http://naftaeco-water.ru/product/shandornie-zatvori/" className="">Шандорные
                                затворы</a></li>
                              <li><a href="http://naftaeco-water.ru/product/gasitel-udarov-gup-1/" className="">Гаситель
                                ударов ГУП</a></li>
                            </ul>
                            <ul>
                              <li><a href="http://naftaeco-water.ru/product-category/oborudovanie-brotstoynikov/"
                                     className="menu_link">Оборудование отстойников</a></li>

                              <li><a href="http://naftaeco-water.ru/product/iloskreb-radialniy/" className="">Илоскреб
                                радиальный</a></li>
                              <li><a href="http://naftaeco-water.ru/product/mehanizm-skrebkoviy-mso/" className="">Механизм
                                скребковый МСО</a></li>
                              <li><a href="http://naftaeco-water.ru/product/ilosos-radialniy/" className="">Илосос
                                радиальный</a></li>
                              <li><a href="http://naftaeco-water.ru/product/ilouplotnitel-1/"
                                     className="">Илоуплотнитель</a></li>
                              <li><a href="http://naftaeco-water.ru/product/lotki-dlya-otstoynikov/" className="">Лотки
                                для отстойников</a></li>
                              <li><a
                                href="http://naftaeco-water.ru/product/perelivnie-kromki-dlya-radialnih-otstoynikov-1/"
                                className="">Переливные кромки для радиальных отстойников</a></li>
                              <li><a href="http://naftaeco-water.ru/product/telezhka-privodnaya/" className="">Тележка
                                приводная</a></li>
                            </ul>
                            <ul>
                              <li><a href="http://naftaeco-water.ru/product-category/obrabotka-osadka/"
                                     className="menu_link">Обработка осадка</a></li>

                              <li><a href="http://naftaeco-water.ru/product/nasos-plunzherniy-np/" className="">Насос
                                плунжерный НП</a></li>
                              <li><a href="http://naftaeco-water.ru/product/lentochniy-filtrpress/" className="">Ленточный
                                фильтр-пресс</a></li>
                              <li><a href="http://naftaeco-water.ru/product/dekanter/" className="">Декантер</a></li>
                            </ul>
                            <ul>
                              <li><a href="http://naftaeco-water.ru/product-category/tonkaya-ochistka/"
                                     className="menu_link">Тонкая очистка</a></li>

                              <li><a href="http://naftaeco-water.ru/product/mikrofiltr/" className="">Микрофильтр</a>
                              </li>
                            </ul>
                            <ul>
                              <li><a
                                href="http://naftaeco-water.ru/product-category/moduli-otstaivaniya-flotatsii-i-ochistki/"
                                className="menu_link">Модули отстаивания, флотации и очистки</a></li>

                              <li><a href="http://naftaeco-water.ru/product/kompaktnaya-ustanovka-ku200/"
                                     className="">Компактная установка КУ-200</a></li>
                              <li><a href="http://naftaeco-water.ru/product/kombinirovannaya-ustanovka/" className="">Комбинированная
                                установка</a></li>
                              <li><a href="http://naftaeco-water.ru/product/modul-mehanicheskoy-ochistki/"
                                     className="">Модуль механической очистки</a></li>
                            </ul>
                            <ul>
                              <li><a
                                href="http://naftaeco-water.ru/product-category/peremeshivayushie-ustroystva-i-podemnoe/"
                                className="menu_link">Перемешивающие устройства и подъемное оборудование</a></li>

                              <li><a href="http://naftaeco-water.ru/product/meshalka-ramnaya-pur/" className="">Мешалка
                                рамная ПУР</a></li>
                              <li><a href="http://naftaeco-water.ru/product/podemnoe-ustroystvo-dlya-pogruzhnih/"
                                     className="">Подъемное устройство для погружных мешалок и насосов</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu_line"><a href="http://naftaeco-water.ru/questionnaires/" className="menu_item">Опросные
                  листы</a></li>
                <li className="menu_line"><a href="http://naftaeco-water.ru/suppliers/"
                                             className="menu_item">Поставщикам</a></li>
                <li className="menu_line"><a href="http://naftaeco-water.ru/about/" className="menu_item">О компании</a>
                </li>
                <li className="menu_line"><a href="http://naftaeco-water.ru/contacts/"
                                             className="menu_item">Контакты</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="image">
        <div className="container">
          <div className="info">
            <h2>Оборудование для водоочистки</h2>

            <div className="info_box">
              <p>Собственное производство</p>
              <p>Индивидуальный подход к проектированию и изготовлению</p>
              <p>Многолетний опыт</p>
            </div>
          </div>
        </div>
      </section>
      <section className="blue down">
        <div className="container">
          <div className="production">
            <h2>Продукция</h2>

            <div className="product_box">

              <a href="/products/#jak8">
                <img alt="Здание решеток и КНС" width="579" height="410"
                     src="/wp-content/uploads/products_groups/8_1_small.jpg" border="0" />

                <p>
                  <span>Здание решеток и КНС</span>
                </p>
              </a>


              <a href="/products/#jak4">
                <img alt="Песколовки" width="780" height="579" src="/wp-content/uploads/products_groups/4_1_small.jpg"
                     border="0" />

                <p>
                  <span>Песколовки</span>
                </p>
              </a>


              <a href="/products/#jak6">
                <img alt="Водоподготовка и сепарация" width="280" height="180"
                     src="/wp-content/uploads/products_groups/6_1_small.jpg" border="0" />

                <p>
                  <span>Водоподготовка и сепарация</span>
                </p>
              </a>


              <a href="/products/#jak9">
                <img alt="Щитовые затворы и запорная арматура" width="280" height="180"
                     src="/wp-content/uploads/products_groups/9_1_small.jpg" border="0" />

                <p>
                  <span>Щитовые затворы и запорная арматура</span>
                </p>
              </a>


              <a href="/products/#jak2">
                <img alt="Оборудование <br>отстойников" width="800" height="533"
                     src="/wp-content/uploads/products_groups/2_1_small.jpg" border="0" />

                <p>
                  <span>Оборудование <br />отстойников</span>
                </p>
              </a>


              <a href="/products/#jak5">
                <img alt="Обработка осадка" width="800" height="590"
                     src="/wp-content/uploads/products_groups/5_1_small.jpg" border="0" />

                <p>
                  <span>Обработка осадка</span>
                </p>
              </a>


              <a href="/products/#jak7">
                <img alt="Тонкая очистка" width="280" height="180"
                     src="/wp-content/uploads/products_groups/7_1_small.jpg" border="0" />

                <p>
                  <span>Тонкая очистка</span>
                </p>
              </a>


              <a href="/products/#jak10">
                <img alt="Модули отстаивания, флотации и очистки" width="299" height="238"
                     src="/wp-content/uploads/products_groups/10_1_small.jpg" border="0" />

                <p>
                  <span>Модули отстаивания, флотации и очистки</span>
                </p>
              </a>


              <a href="/products/#jak11">
                <img alt="Перемешивающие устройства и подъемное оборудование" width="1931" height="1608"
                     src="/wp-content/uploads/products_groups/11_1_small.jpg" border="0" />

                <p>
                  <span>Перемешивающие устройства и подъемное оборудование</span>
                </p>
              </a>


            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer_line">
            <div className="foot_info">
              <p>© «ТЕХНОАЛЬЯНС»</p>


            </div>
          </div>
        </div>
      </footer>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}