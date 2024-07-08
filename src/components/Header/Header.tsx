import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SubmitForm from "../SubmitForm/SubmitForm";
import {Link} from "react-router-dom";

export default function Header({ isMainPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

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

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="h-16 md:h-24 bg-white flex justify-between items-center px-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-white">
              <img src={logo} alt="Logo" className="h-12 md:h-16" />
            </Link>
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
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 call-button hidden md:flex text-lg" onClick={handleOpen}>
              Заказать звонок
            </button>
            {isOpen && (
              <div className="fixed top-0 left-0 w-full h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className={`bg-white p-10 popup relative w-full h-dvh justify-center flex flex-col`}>
                  <h2 className="text-3xl font-bold mb-8 text-center">Заказать звонок</h2>
                  <SubmitForm />
                  <button
                    className="text-3xl absolute top-0 right-0 bg-white text-black hover:bg-white hover:text-orange-500 font-bold py-4 px-6"
                    onClick={handleClose}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            )}
            <button
              className="bg-transparent text-black font-bold text-2xl md:hidden"
              onClick={handleMenuClick}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        <div className={`products-menu relative h-16 bg-light justify-center items-center ${isMainPage ? 'hidden' : 'hidden md:flex'}`}>
          <div className='h-16 flex justify-center items-center font-bold px-4 transition duration-250 hover:bg-primary' onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <span className="uppercase">Продукция</span>
            <div className={`flex justify-center items-center bg-primary z-50 top-16 right-0 absolute w-full transition duration-250 ${productsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <div className="flex flex-row w-1/2 m-4 gap-2">
                <ul className="w-1/3">
                  <li><Link to="/product" className="text-gray-700 text-lg">Решетка
                    грабельная ГР</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Грабли
                    механические МГ</Link></li>
                  <li><Link to="/product"
                            className="text-gray-700 text-lg">Решетка механическая РМУ</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Решетка
                    ручной очистки</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Шнековый
                    пресс ШП</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Шнековый
                    транспортер ШТ</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Дробилка
                    отходов ДОТ</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Дробилка
                    отходов Д-3В</Link></li>
                  <li><Link to="/product"
                            className="text-gray-700 text-lg">Фильтрующая корзина с подъемным механизмом КПМ</Link></li>
                </ul>
                <ul className="w-1/3">
                  <li><Link to="/product"
                            className="text-gray-700 text-lg">Механизм скребковый МСПЦ</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Механизм
                    скребковый МСП</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Гидроэлеватор
                    ГЭ</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Барабанная
                    сетка</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Щитовые
                    затворы</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Шандорные
                    затворы</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Гаситель
                    ударов ГУП</Link></li>
                </ul>
                <ul className="w-1/3">
                  <li><Link to="/product" className="text-gray-700 text-lg">Илоскреб
                    радиальный</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Механизм
                    скребковый МСО</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Илосос
                    радиальный</Link></li>
                  <li><Link to="/product"
                            className="text-gray-700 text-lg">Илоуплотнитель</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Лотки
                    для отстойников</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Тележка
                    приводная</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Насос
                    плунжерный НП</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Микрофильтр</Link>
                  </li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Комбинированная
                    установка</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/suppliers" className='h-16 flex justify-center items-center font-bold px-4 transition duration-250 hover:bg-primary'>
            <span className="uppercase text-black">Поставщикам</span>
          </Link>
          <Link to="/about" className='h-16 flex justify-center items-center font-bold px-4 transition duration-250 hover:bg-primary'>
            <span className="uppercase text-black">О компании</span>
          </Link>
          <Link to="/contacts" className='h-16 flex justify-center items-center font-bold px-4 transition duration-250 hover:bg-primary'>
            <span className="uppercase text-black">Контакты</span>
          </Link>
        </div>
      </div>

      <nav className={`nav md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed top-0 left-0 w-full flex flex-col justify-start items-center h-screen bg-white z-50 overflow-scroll">
          <button
            className="absolute top-5 right-4 bg-transparent text-black font-bold text-2xl z-50"
            onClick={handleMenuClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className={`mobile-products-menu relative w-full mt-16 mb-8 bg-light flex flex-col justify-center items-center`}>
            <div className={`w-full h-16 flex flex-col justify-center items-center font-bold transition duration-250 hover:bg-primary ${isMainPage && 'hidden'}`} onClick={() => setProductsOpen(!productsOpen)}>
              <span className="text-black uppercase">Продукция</span>
            </div>
            <div className={`flex-col justify-center items-center bg-primary w-full transition duration-250 px-4 ${productsOpen ? 'flex' : 'hidden'}`}>
              <div className="flex flex-col w-full m-4 gap-2">
                <ul className="w-full">
                  <li><Link to="/product" className="text-gray-700 text-lg">Решетка
                    грабельная ГР</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Грабли
                    механические МГ</Link></li>
                  <li><Link to="/product"
                            className="text-gray-700 text-lg">Решетка механическая РМУ</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Решетка
                    ручной очистки</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Шнековый
                    пресс ШП</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Шнековый
                    транспортер ШТ</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Дробилка
                    отходов ДОТ</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Дробилка
                    отходов Д-3В</Link></li>
                  <li><Link to="/product"
                            className="text-gray-700 text-lg">Фильтрующая корзина с подъемным механизмом КПМ</Link></li>
                </ul>
                <ul className="w-full">
                  <li><Link to="/product"
                            className="text-gray-700 text-lg">Механизм скребковый МСПЦ</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Механизм
                    скребковый МСП</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Гидроэлеватор
                    ГЭ</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Барабанная
                    сетка</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Щитовые
                    затворы</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Шандорные
                    затворы</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Гаситель
                    ударов ГУП</Link></li>
                </ul>
                <ul className="w-full">
                  <li><Link to="/product" className="text-gray-700 text-lg">Илоскреб
                    радиальный</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Механизм
                    скребковый МСО</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Илосос
                    радиальный</Link></li>
                  <li><Link to="/product"
                            className="text-gray-700 text-lg">Илоуплотнитель</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Лотки
                    для отстойников</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Тележка
                    приводная</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Насос
                    плунжерный НП</Link></li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Микрофильтр</Link>
                  </li>
                  <li><Link to="/product" className="text-gray-700 text-lg">Комбинированная
                    установка</Link></li>
                </ul>
              </div>
            </div>
            <Link to="/suppliers" className='w-full h-16 flex justify-center items-center font-bold transition duration-250 hover:bg-primary'>
              <span className="uppercase text-black">Поставщикам</span>
            </Link>
            <Link to="/about" className='w-full h-16 flex justify-center items-center font-bold transition duration-250 hover:bg-primary'>
              <span className="uppercase text-black">О компании</span>
            </Link>
            <Link to="/contacts" className='w-full h-16 flex justify-center items-center font-bold transition duration-250 hover:bg-primary'>
              <span className="uppercase text-black">Контакты</span>
            </Link>
          </div>
          <ul className="menu w-full">
            <li><a href="tel:+7 (903) 650-47-60" className="mr-4 text-gray-900 hover:text-black text-xl">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2"/>
              <span>+7 (903) 650-47-60</span>
            </a></li>
            <li><a href="mailto:teh-al-zakaz@yandex.ru" className="mr-4 text-gray-900 hover:text-black text-xl">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
              <span>teh-al-zakaz@yandex.ru</span>
            </a></li>
            <li><button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 call-button text-xl" onClick={handleOpen}>Заказать звонок</button></li>
          </ul>
        </div>
      </nav>
    </>
  );
}