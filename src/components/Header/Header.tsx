import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SubmitForm from "../SubmitForm/SubmitForm";
import { Link, useLocation } from "react-router-dom";

export default function Header({ isMainPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

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

  const menuVoda = [
    {
      category: {
        name: 'РЕШЕТКИ ДЛЯ ОЧИСТКИ СТОЧНЫХ ВОД',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Решетка грабельная ГР',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Грабли механические МГ',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Решетка механическая РМУ',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Шнековая решетка ШР',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'ТРАНСПОРТЕРЫ И ОТЖИМНЫЕ ПРЕССА',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Шнековый пресс ШП',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Шнековый транспортер ШТ',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'КАНАЛИЗАЦИОННЫЕ ДРОБИЛКИ И ДРОБИЛКИ ОТХОДОВ',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Решетка-дробилка РДК',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Дробилка отходов ДОТ',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Дробилка отходов Д-3В',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Шнековая решетка ШР',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'ОБОРУДОВАНИЕ ПЕСКОЛОВОК',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Комбинированная установка УК',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Механизм скребковый МСПЦ (цепной)',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Механизм скребковый МСП',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Гидроэлеватор ГЭ',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Песковой бункер',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'ОБОРУДОВАНИЕ ОТСТОЙНИКОВ',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Илоскреб радиальный ИПР',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Механизм скребковый МСО',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Илосос радиальный ИВР',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Илоуплотнитель',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Илоскреб-илосос радиальный для сахарных заводов',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Лотки для отстойников и переливные кромки',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Тележка приводная',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'ОБОРУДОВАНИЕ ДООЧИСТКИ СТОЧНЫХ ВОД',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Барабанная сетка БСБ',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Микрофильтр МФМ',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'ЩИТОВЫЕ ЗАТВОРЫ',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Щитовые затворы',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'НАСОСЫ ПЛУНЖЕРНЫЕ НП',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Насос плунжерный НП-28 и НП-50',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'ГАСИТЕЛЬ ГИДРАВЛИЧЕСКИХ УДАРОВ ГУП',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Гаситель гидравлических ударов ГУП-200 и ГУП-350',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    }
  ];

  const menuLinii = [
    {
      category: {
        name: 'Технологические линии',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Линия переработки отходов убоя и падежа птицы в мясокостную муку',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Линия переработки отходов убоя и падежа свиней, КРС, МРС в мясокостную муку',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Линия по производству перьевой муки',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Линия по производству кровяной муки',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Линии petfood',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'Секция подготовки сырья',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Бункер-накопитель для отходов убоя и падежа с/х животных и птицы',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Дробилка туш животных, кости',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Измельчитель кости, мясокостного сырья (ДРК, ДКД)',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Дробилка замороженных блоков',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Сепаратор пера и кишок',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Пресс для пера',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Пресс щетины',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Дренирующий шнековый транспортер для обезвоживания свиных кишок',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'Секция термической обработки сырья',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Варочный котел без греющего ротора (вала)',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Варочный котел с греющим ротор (валом)',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Ротор (вал, мешалка) для котлов фирмы Haarslev, Dupps, Mavitec, Tremesa, Ercim',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Вакуумный котел КВ-4,6М, Ж4-ФПА',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Запчасти к вакуумным котлам КВ-4,6М, Ж4-ФПА, КП-5',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'Система конденсации соковых паров',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Система конденсации соковых паров (на основе водяных конденсаторов)',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Воздушный конденсатор соковых паров',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'Секция жира',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Бункер для мясокостной муки',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Пресс для отжима жира',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Центрифуга для отжима жира',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Ёмкость для сбора и фильтрации жира',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Резервуары для хранения и отстаивания животного жира',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'Секция муки',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Охладитель мясокостной муки',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Дробилка мясокостной муки молотковая',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
          {
            name: 'Дробилка мясокостной муки роторная',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    },
    {
      category: {
        name: 'Вспомогательное оборудование',
        link: '',
        classNameWrapper: 'w-full mb-4',
        classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
        children: [
          {
            name: 'Шнековые транспортеры мясокостной муки, мясокостного сырья',
            link: '',
            className: 'text-gray-700 text-base mb-1 block hover:text-black',
          },
        ]
      }
    }
  ];

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
              Отправить запрос
            </button>
            {isOpen && (
              <div className="fixed top-0 left-0 w-full h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className={`bg-white p-10 popup relative w-full h-dvh justify-center flex flex-col`}>
                  <h2 className="text-3xl font-bold mb-8 text-center">Отправить запрос</h2>
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
          <div className={`
            h-16 flex justify-center items-center font-bold px-4 transition duration-250 hover:bg-primary
            ${['/voda', '/linii', '/transport'].includes(location.pathname) ? '' : 'hidden'}
          `} onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <span className="uppercase">Продукция</span>
            <div className={`flex justify-center items-center bg-primary z-50 top-16 right-0 absolute w-full transition duration-250 ${productsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <div className={`
                flex flex-row w-2/3 m-4 gap-6
                ${location.pathname === '/voda' ? '' : 'hidden'}
              `}>
                <div className="flex flex-col w-1/3">
                  {
                    (
                      location.pathname === '/voda'
                        ? menuVoda
                        : location.pathname === '/linii'
                          ? menuLinii
                          : []).filter((val, i) => i < 3).map((ul, i) =>
                      <ul className={ul.category.classNameWrapper} key={i}>
                        <li><Link to={ul.category.link} className={ul.category.classNameTitle}>{ul.category.name}</Link></li>
                        {ul.category.children.map((li, liKey) => <li key={liKey}><Link to={li.link} className={li.className}>{li.name}</Link></li>)}
                      </ul>)
                  }
                </div>
                <div className="flex flex-col w-1/3">
                  {
                    menuVoda.filter((val, i) => i >= 3 && i < 5).map((ul, i) =>
                      <ul className={ul.category.classNameWrapper} key={i}>
                        <li><Link to={ul.category.link} className={ul.category.classNameTitle}>{ul.category.name}</Link></li>
                        {ul.category.children.map((li, liKey) => <li key={liKey}><Link to={li.link} className={li.className}>{li.name}</Link></li>)}
                      </ul>)
                  }
                </div>
                <div className="flex flex-col w-1/3">
                  {
                    menuVoda.filter((val, i) => i >= 5 && i < 9).map((ul, i) =>
                      <ul className={ul.category.classNameWrapper} key={i}>
                        <li><Link to={ul.category.link} className={ul.category.classNameTitle}>{ul.category.name}</Link></li>
                        {ul.category.children.map((li, liKey) => <li key={liKey}><Link to={li.link} className={li.className}>{li.name}</Link></li>)}
                      </ul>)
                  }
                </div>
              </div>
              <div className={`
                flex flex-row w-2/3 m-4 gap-6
                ${location.pathname === '/linii' ? '' : 'hidden'}
              `}>
                <div className="flex flex-col w-1/3">
                  {
                    (
                      location.pathname === '/voda'
                        ? menuVoda
                        : location.pathname === '/linii'
                          ? menuLinii
                          : []).filter((val, i) => i < 2).map((ul, i) =>
                      <ul className={ul.category.classNameWrapper} key={i}>
                        <li><Link to={ul.category.link} className={ul.category.classNameTitle}>{ul.category.name}</Link></li>
                        {ul.category.children.map((li, liKey) => <li key={liKey}><Link to={li.link} className={li.className}>{li.name}</Link></li>)}
                      </ul>)
                  }
                </div>
                <div className="flex flex-col w-1/3">
                  {
                    menuVoda.filter((val, i) => i >= 2 && i < 5).map((ul, i) =>
                      <ul className={ul.category.classNameWrapper} key={i}>
                        <li><Link to={ul.category.link} className={ul.category.classNameTitle}>{ul.category.name}</Link></li>
                        {ul.category.children.map((li, liKey) => <li key={liKey}><Link to={li.link} className={li.className}>{li.name}</Link></li>)}
                      </ul>)
                  }
                </div>
                <div className="flex flex-col w-1/3">
                  {
                    menuVoda.filter((val, i) => i >= 5 && i < 9).map((ul, i) =>
                      <ul className={ul.category.classNameWrapper} key={i}>
                        <li><Link to={ul.category.link} className={ul.category.classNameTitle}>{ul.category.name}</Link></li>
                        {ul.category.children.map((li, liKey) => <li key={liKey}><Link to={li.link} className={li.className}>{li.name}</Link></li>)}
                      </ul>)
                  }
                </div>
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
                {
                  (
                    location.pathname === '/voda'
                    ? menuVoda
                    : location.pathname === '/linii'
                      ? menuLinii
                      : []).map((ul, i) =>
                    <ul className={ul.category.classNameWrapper} key={i}>
                      <li><Link to={ul.category.link} className={ul.category.classNameTitle}>{ul.category.name}</Link></li>
                      {ul.category.children.map((li, liKey) => <li key={liKey}><Link to={li.link} className={li.className}>{li.name}</Link></li>)}
                    </ul>
                  )
                }
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
            <li><button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 call-button text-xl" onClick={handleOpen}>Отправить запрос</button></li>
          </ul>
        </div>
      </nav>
    </>
  );
}