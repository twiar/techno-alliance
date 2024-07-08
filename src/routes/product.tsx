import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import React, {useEffect, useState} from "react";
import Footer from "../components/Footer/Footer";
import ImageGallery from 'react-image-gallery';
import firstSectionImg from '../assets/1.webp';
import secondSectionImg from '../assets/2.webp';
import thirdSectionImg from '../assets/3.webp';
import SubmitForm from "../components/SubmitForm/SubmitForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-multi-carousel';

export default function Product() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const images = [
    {
      original: firstSectionImg,
      thumbnail: firstSectionImg,
    },
    {
      original: secondSectionImg,
      thumbnail: secondSectionImg,
    },
    {
      original: thirdSectionImg,
      thumbnail: thirdSectionImg,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
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
    <div className="h-dvh">
      <Header isMainPage={false} />
      <div className="w-full h-40"></div>

      <section className="h-40 bg-primary flex justify-center items-center">
        <div className="text-center relative z-20 text-white w-1/2">
          <span>Здание решеток и КНС &gt;</span>
          <h2 className="text-5xl font-bold text-white">Решетка-дробилка РДК</h2>
        </div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-first-section-img transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"></div>
        <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
      </section>
      <section className="bg-white flex flex-col justify-center py-10 items-center">
        <div className="w-1/2 flex flex-col">
          <div className="flex justify-center gap-8">
            <div className="w-1/2 flex flex-col gap-2">
              <p>Решетка-дробилка РДК предназначена для измельчения крупных плавающих отбросов в сточных водах.
                Решетка-дробилка РДК устанавливается в канализационных насосных станциях и в зданиях решеток.</p>
              <p>Материал исполнения: корпус – из нержавеющей стали, валы и фрезы – из инструментальной стали.</p>
              <p className="mt-4"><strong>Преимущества:</strong></p>
              <ul className="">
                <li>Высокая производительность и надежность работы</li>
                <li>Долгий срок эксплуатации</li>
                <li>Удобство обслуживания, монтажа и демонтажа благодаря особенностям конструкции (механизм дробления и
                  барабаны представляют собой отдельные модули; решетку можно извлечь из канала, не опустошая его)
                </li>
                <li>Использование решетки-дробилки РДК позволят сократить затраты на транспортировку отходов</li>
              </ul>
            </div>
            <div className="w-1/2 flex flex-col gap-2 items-center">
              <ImageGallery
                items={images}
                showThumbnails={true}
                showFullscreenButton={true}
                useBrowserFullscreen={true}
              />
              <button className="w-1/2 text-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-4 call-button hidden md:flex text-lg" onClick={handleOpen}>
                <span className="w-full">Отправить запрос</span>
              </button>
              {isOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-white p-10 popup relative w-1/2">
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
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col justify-center p-10 mt-10">
            <p className="text-3xl mb-4">Технические характеристики</p>
            <table>
              <tbody>
              <tr>
                <td><strong>Наименование параметра</strong></td>
                <td><strong>Значение</strong></td>
              </tr>
              <tr>
                <td>Пропускная способность по воде, м<sup>3</sup>/ч</td>
                <td>От 70 до 2500</td>
              </tr>
              <tr>
                <td>Минимальная ширина канала, мм</td>
                <td>От 500 до 1300</td>
              </tr>
              <tr>
                <td>Глубина канала, мм</td>
                <td>От 750 до 2500</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="bg-primary flex flex-col justify-center py-10 items-center z-0">
        <h2 className="text-4xl font-bold text-black mt-4 mb-8">Сопутствующая продукция</h2>
        <Carousel responsive={responsive} className="w-2/3 carousel mb-10">
          <Link to="/product" className="block h-96 w-96 bg-white relative group/item overflow-hidden">
            <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-full h-96 transition duration-500 group-hover/item:scale-105" />
            <p className="absolute w-full bottom-0 left-0 h-16 bg-white flex justify-center items-center">
              <span className="text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
            </p>
          </Link>
          <Link to="/product" className="block h-96 w-96 bg-white relative group/item overflow-hidden">
            <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-full h-96 transition duration-500 group-hover/item:scale-105" />
            <p className="absolute w-full bottom-0 left-0 h-16 bg-white flex justify-center items-center">
              <span className="text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
            </p>
          </Link>
          <Link to="/product" className="block h-96 w-96 bg-white relative group/item overflow-hidden">
            <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-full h-96 transition duration-500 group-hover/item:scale-105" />
            <p className="absolute w-full bottom-0 left-0 h-16 bg-white flex justify-center items-center">
              <span className="text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
            </p>
          </Link>
          <Link to="/product" className="block h-96 w-96 bg-white relative group/item overflow-hidden">
            <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-full h-96 transition duration-500 group-hover/item:scale-105" />
            <p className="absolute w-full bottom-0 left-0 h-16 bg-white flex justify-center items-center">
              <span className="text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>
            </p>
          </Link>
        </Carousel>
      </section>
      <Footer />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}