import React, { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask';
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header({ isMainPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [blockSend, setBlockSend] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setTimeout(() => {
      setResult('');
      setBlockSend(false);
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (isOpen && !event.target.closest('.popup') && !event.target.closest('.call-button')) {
        handleClose();
      }
    };

    if (isOpen) {
      if (menuOpen) setMenuOpen(false);
    }

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('touchstart', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('touchstart', handleDocumentClick);
    };
  }, [isOpen]);

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Создаем заявку на звонок....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2e741a2c-77a8-48de-bdc4-88cac31da934");
    formData.append("subject", "Заявка на звонок ТехноАльянс");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setBlockSend(true);
      setResult("Заявка отправлена успешно");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Введите имя';
    }

    if (!phone || phone.length < 18) {
      errors.phone = 'Введите корректный номер телефона';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      onSubmit(event);
    }
  };

  return (
    <>
      <div className="md:fixed top-0 left-0 w-full z-20">
        <div className="h-16 md:h-24 bg-white flex justify-between items-center px-4">
          <div className="flex items-center gap-8">
            <div className="text-white">
              <img src={logo} alt="Logo" className="h-12 md:h-16" />
            </div>
            <div className="text-gray-900 hidden md:flex text-lg">
              <span>Производство оборудования и спецтехники</span>
            </div>
          </div>
          <div className="flex justify-end md:flex md:justify-between">
            <div className="hidden md:flex md:items-center">
              <a href="tel:+7 (903) 650-47-60" className="mr-8 text-gray-900 hover:text-black text-lg">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2"/>
                <span>+7 (903) 650-47-60</span>
              </a>
              <a href="mailto:teh-al-zakaz@yandex.ru" className="mr-8 text-gray-900 hover:text-black text-lg">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
                <span>teh-al-zakaz@yandex.ru</span>
              </a>
            </div>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded call-button hidden md:flex text-lg" onClick={handleOpen}>
              Заказать звонок
            </button>
            {isOpen && (
              <div className="fixed top-0 left-0 w-full h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-10 rounded popup relative w-1/2">
                  <h2 className="text-lg font-bold mb-4">Заказать звонок</h2>
                  <form onSubmit={handleSubmit}>
                    <label className="block mb-4 relative">
                      <span className={`text-gray-700 absolute ${name?.length && 'with-content'} top-0 left-0 p-2 text-sm transition-all duration-300 ease-in-out`}>
                        Ваше имя:
                      </span>
                      <input
                        type="text"
                        className="w-full p-2 p-10 text-sm text-gray-700 border border-gray-300 focus:border-blue-600 focus:ring-blue-600 focus:ring-opacity-50"
                        name="Имя"
                        required
                        value={name}
                        onChange={handleNameChange}
                      />
                      {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    </label>
                    <label className="block mb-4 relative">
                      <span className={`text-gray-700 absolute ${phone?.length && 'with-content'} top-0 left-0 p-2 text-sm transition-all duration-300 ease-in-out`}>
                        Ваш телефон:
                      </span>
                      <MaskedInput
                        mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                        className="w-full p-2 p-10 text-sm text-gray-700 border border-gray-300 focus:border-blue-600 focus:ring-blue-600 focus:ring-opacity-50"
                        name="Телефон"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                      {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                    </label>
                    <label className="block mb-4 relative">
                      <span className={`text-gray-700 absolute ${comment?.length && 'with-content'} top-0 left-0 p-2 text-sm transition-all duration-300 ease-in-out`}>
                        Комментарий:
                      </span>
                      <textarea
                        className="w-full p-2 p-10 text-sm text-gray-700 border border-gray-300 focus:border-blue-600 focus:ring-blue-600 focus:ring-opacity-50"
                        name="Комментарий"
                        value={comment}
                        onChange={handleCommentChange}
                      />
                    </label>
                    <button className="bg-orange-500 enabled:hover:bg-orange-700 text-white font-bold py-2 px-4 rounded disabled:opacity-75 disabled:bg-gray-500 "
                            type="submit" onClick={(e) => blockSend && e.preventDefault()} disabled={blockSend}>
                      Отправить
                    </button>
                    <span className="block mt-2 text-sm">{result}</span>
                  </form>
                  <button
                    className="absolute top-0 right-0 bg-white text-black font-bold py-2 px-4 rounded"
                    onClick={handleClose}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            )}
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded md:hidden"
              onClick={handleMenuClick}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        <div className={`h-16 bg-light flex justify-center items-center px-4 ${isMainPage && 'hidden'}`}>
          <div className='h-16 flex justify-center items-center uppercase font-bold px-4 transition duration-250 hover:bg-primary'>
            <span>Продукция</span>
          </div>
          <div className='h-16 flex justify-center items-center uppercase font-bold px-4 transition duration-250 hover:bg-primary'>
            <span>Поставщикам</span>
          </div>
          <div className='h-16 flex justify-center items-center uppercase font-bold px-4 transition duration-250 hover:bg-primary'>
            <span>О компании</span>
          </div>
          <div className='h-16 flex justify-center items-center uppercase font-bold px-4 transition duration-250 hover:bg-primary'>
            <span>Контакты</span>
          </div>
        </div>
      </div>

      <nav className={`nav md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="absolute top-0 left-0 w-full flex justify-center items-center h-screen bg-white z-50">
          <button
            className="absolute top-5 right-4 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleMenuClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="menu">
            <li><a href="tel:+7 (903) 650-47-60" className="mr-4 text-gray-900 hover:text-black text-sm">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2"/>
              <span>+7 (903) 650-47-60</span>
            </a></li>
            <li><a href="mailto:teh-al-zakaz@yandex.ru" className="mr-4 text-gray-900 hover:text-black text-sm">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
              <span>teh-al-zakaz@yandex.ru</span>
            </a></li>
            <li><button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded call-button" onClick={handleOpen}>Заказать звонок</button></li>
          </ul>
        </div>
      </nav>

      {/*<header>*/}
      {/*  <div className="container">*/}
      {/*    <div className="head_menu">*/}
      {/*      <div className="logo">*/}
      {/*        <a href="/">*/}
      {/*          <img src={logo} />*/}
      {/*        </a>*/}
      {/*      </div>*/}

      {/*      <div className="menu-%d0%b2%d0%b5%d1%80%d1%85%d0%bd%d0%b5%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e-container">*/}
      {/*        <ul id="menu">*/}
      {/*          <li className="menu_line"><a href="http://naftaeco-water.ru/products/"*/}
      {/*                                       className="menu_item">Продукция</a>*/}
      {/*            <ul className="menu_box">*/}
      {/*              <li>*/}
      {/*                <ul className="menu_li">*/}
      {/*                  <li>*/}
      {/*                    <div className="column_box">*/}
      {/*                      <ul>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product-category/zdanie-reshetok-i-kns/"*/}
      {/*                               className="menu_link">Здание решеток и КНС</a></li>*/}

      {/*                        <li><a href="http://naftaeco-water.ru/product/reshetkadrobilka-rdk-1/" className="">Решетка-дробилка*/}
      {/*                          РДК</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/reshetkadrobilka-rd-1/" className="">Решетка-дробилка*/}
      {/*                          РД</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/reshetka-grabelnaya-gr-1/" className="">Решетка*/}
      {/*                          грабельная ГР</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/grabli-mehanicheskie-mg-1/" className="">Грабли*/}
      {/*                          механические МГ</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/reshetka-mehanicheskaya-rmu-1/"*/}
      {/*                               className="">Решетка механическая РМУ</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/reshetka-ruchnoy-ochistki/" className="">Решетка*/}
      {/*                          ручной очистки</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/reshetka-stupenchataya-rs/" className="">Решетка*/}
      {/*                          ступенчатая РС</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/shnekovaya-reshetka-shr/" className="">Шнековая*/}
      {/*                          решетка ШР</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/shnekoviy-press-shp-1/" className="">Шнековый*/}
      {/*                          пресс ШП</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/shnekoviy-transporter-sht/" className="">Шнековый*/}
      {/*                          транспортер ШТ</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/drobilka-othodov-dot-1/" className="">Дробилка*/}
      {/*                          отходов ДОТ</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/drobilka-othodov-d3v-1/" className="">Дробилка*/}
      {/*                          отходов Д-3В</a></li>*/}
      {/*                        <li><a*/}
      {/*                          href="http://naftaeco-water.ru/product/filtruyushaya-korzina-s-podemnim-mehanizmom/"*/}
      {/*                          className="">Фильтрующая корзина с подъемным механизмом КПМ</a></li>*/}
      {/*                      </ul>*/}
      {/*                      <ul>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product-category/peskolovki/"*/}
      {/*                               className="menu_link">Песколовки</a></li>*/}

      {/*                        <li><a href="http://naftaeco-water.ru/product/mehanizm-skrebkoviy-mspts-1/"*/}
      {/*                               className="">Механизм скребковый МСПЦ</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/mehanizm-skrebkoviy-msp/" className="">Механизм*/}
      {/*                          скребковый МСП</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/donniy-skrebkoviy-mehanizm/" className="">Донный*/}
      {/*                          скребковый механизм</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/peskolovka-tangentsialnaya/" className="">Песколовка*/}
      {/*                          тангенциальная</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/gidroelevator-ge-1/" className="">Гидроэлеватор*/}
      {/*                          ГЭ</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/peskovoy-bunker-1/" className="">Песковой*/}
      {/*                          бункер</a></li>*/}
      {/*                      </ul>*/}
      {/*                      <ul>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product-category/vodopodgotovka-i-separatsiya/"*/}
      {/*                               className="menu_link">Водоподготовка и сепарация</a></li>*/}

      {/*                        <li><a href="http://naftaeco-water.ru/product/separator/" className="">Сепаратор</a>*/}
      {/*                        </li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/barabannaya-setka-1/" className="">Барабанная*/}
      {/*                          сетка</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/setka-vodoochistnaya-beskarkasnaya-svb/"*/}
      {/*                               className="">Сетка водоочистная бескаркасная СВБ</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/press-pera-1/" className="">Пресс пера</a>*/}
      {/*                        </li>*/}
      {/*                      </ul>*/}
      {/*                      <ul>*/}
      {/*                        <li><a*/}
      {/*                          href="http://naftaeco-water.ru/product-category/shitovie-zatvori-i-zapornaya-armatura/"*/}
      {/*                          className="menu_link">Щитовые затворы и запорная арматура</a></li>*/}

      {/*                        <li><a href="http://naftaeco-water.ru/product/shitovie-zatvori/" className="">Щитовые*/}
      {/*                          затворы</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/shandornie-zatvori/" className="">Шандорные*/}
      {/*                          затворы</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/gasitel-udarov-gup-1/" className="">Гаситель*/}
      {/*                          ударов ГУП</a></li>*/}
      {/*                      </ul>*/}
      {/*                      <ul>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product-category/oborudovanie-brotstoynikov/"*/}
      {/*                               className="menu_link">Оборудование отстойников</a></li>*/}

      {/*                        <li><a href="http://naftaeco-water.ru/product/iloskreb-radialniy/" className="">Илоскреб*/}
      {/*                          радиальный</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/mehanizm-skrebkoviy-mso/" className="">Механизм*/}
      {/*                          скребковый МСО</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/ilosos-radialniy/" className="">Илосос*/}
      {/*                          радиальный</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/ilouplotnitel-1/"*/}
      {/*                               className="">Илоуплотнитель</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/lotki-dlya-otstoynikov/" className="">Лотки*/}
      {/*                          для отстойников</a></li>*/}
      {/*                        <li><a*/}
      {/*                          href="http://naftaeco-water.ru/product/perelivnie-kromki-dlya-radialnih-otstoynikov-1/"*/}
      {/*                          className="">Переливные кромки для радиальных отстойников</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/telezhka-privodnaya/" className="">Тележка*/}
      {/*                          приводная</a></li>*/}
      {/*                      </ul>*/}
      {/*                      <ul>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product-category/obrabotka-osadka/"*/}
      {/*                               className="menu_link">Обработка осадка</a></li>*/}

      {/*                        <li><a href="http://naftaeco-water.ru/product/nasos-plunzherniy-np/" className="">Насос*/}
      {/*                          плунжерный НП</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/lentochniy-filtrpress/" className="">Ленточный*/}
      {/*                          фильтр-пресс</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/dekanter/" className="">Декантер</a></li>*/}
      {/*                      </ul>*/}
      {/*                      <ul>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product-category/tonkaya-ochistka/"*/}
      {/*                               className="menu_link">Тонкая очистка</a></li>*/}

      {/*                        <li><a href="http://naftaeco-water.ru/product/mikrofiltr/" className="">Микрофильтр</a>*/}
      {/*                        </li>*/}
      {/*                      </ul>*/}
      {/*                      <ul>*/}
      {/*                        <li><a*/}
      {/*                          href="http://naftaeco-water.ru/product-category/moduli-otstaivaniya-flotatsii-i-ochistki/"*/}
      {/*                          className="menu_link">Модули отстаивания, флотации и очистки</a></li>*/}

      {/*                        <li><a href="http://naftaeco-water.ru/product/kompaktnaya-ustanovka-ku200/"*/}
      {/*                               className="">Компактная установка КУ-200</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/kombinirovannaya-ustanovka/" className="">Комбинированная*/}
      {/*                          установка</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/modul-mehanicheskoy-ochistki/"*/}
      {/*                               className="">Модуль механической очистки</a></li>*/}
      {/*                      </ul>*/}
      {/*                      <ul>*/}
      {/*                        <li><a*/}
      {/*                          href="http://naftaeco-water.ru/product-category/peremeshivayushie-ustroystva-i-podemnoe/"*/}
      {/*                          className="menu_link">Перемешивающие устройства и подъемное оборудование</a></li>*/}

      {/*                        <li><a href="http://naftaeco-water.ru/product/meshalka-ramnaya-pur/" className="">Мешалка*/}
      {/*                          рамная ПУР</a></li>*/}
      {/*                        <li><a href="http://naftaeco-water.ru/product/podemnoe-ustroystvo-dlya-pogruzhnih/"*/}
      {/*                               className="">Подъемное устройство для погружных мешалок и насосов</a></li>*/}
      {/*                      </ul>*/}
      {/*                    </div>*/}
      {/*                  </li>*/}
      {/*                </ul>*/}
      {/*              </li>*/}
      {/*            </ul>*/}
      {/*          </li>*/}
      {/*          <li className="menu_line"><a href="http://naftaeco-water.ru/questionnaires/" className="menu_item">Опросные*/}
      {/*            листы</a></li>*/}
      {/*          <li className="menu_line"><a href="http://naftaeco-water.ru/suppliers/"*/}
      {/*                                       className="menu_item">Поставщикам</a></li>*/}
      {/*          <li className="menu_line"><a href="http://naftaeco-water.ru/about/" className="menu_item">О компании</a>*/}
      {/*          </li>*/}
      {/*          <li className="menu_line"><a href="http://naftaeco-water.ru/contacts/"*/}
      {/*                                       className="menu_item">Контакты</a></li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</header>*/}
    </>
  );
}