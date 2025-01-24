import {Outlet, Link, useParams, useLocation} from "react-router-dom";
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
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../firebase";
import parse from 'html-react-parser';

export default function Product() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({});
  const outerParams = useParams();
  const location = useLocation();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const getProduct = async () => {
    const snapshot = await getDocs(query(collection(db, "products"), where("path", "==", outerParams?.productId)));
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return list[0];
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct();
      if (product?.images?.length) setImages(product.images.map((img) => ({ original: img, thumbnail: img })))
      setProduct(product);
    };
    fetchProduct();
  }, [location.pathname, outerParams.productId]);

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
      <div className="w-full h-16 lg:h-40"></div>

      <section className="h-24 lg:h-48 bg-primary flex justify-center items-end">
        {product && (
          <>
            <div className="text-left lg:text-center mb-4 lg:mb-16 relative z-20 text-white w-full lg:w-1/2 px-4 lg:px-0">
              <h2 className="text-2xl lg:text-5xl mb-0 lg:mb-8 font-bold text-white">{product?.title}</h2>
            </div>
            {product?.images && (
              <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full transition duration-500 group-hover/item:scale-105 z-10 top-0 left-0 opacity-70 group-hover/item:opacity-50"  style={{ backgroundImage: `url(${product?.images ? product?.images[0] : ''})` }}></div>
            )}
            <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full bg-black z-0 top-0 left-0"></div>
          </>
        )}
      </section>
      <section className="bg-white flex flex-col justify-center py-10 items-center">
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex justify-center gap-8 flex-col lg:flex-row px-4 lg:px-0">
            <div className="w-full lg:w-1/2 flex flex-col gap-2">
              {parse(String(product?.description))}
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-2 items-center">
              <ImageGallery
                items={images}
                showThumbnails={true}
                showFullscreenButton={true}
                useBrowserFullscreen={true}
              />
              <button className="w-1/2 text-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-4 call-button hidden lg:flex text-lg" onClick={handleOpen}>
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
          <div className="bg-gray-100 flex flex-col justify-center p-4 lg:p-10 mt-10">
            <p className="text-xl lg:text-3xl mb-4">Технические характеристики</p>
            <table>
              <tbody>
              <tr>
                <td className="py-1 pr-1"><strong>Наименование параметра</strong></td>
                <td><strong>Значение</strong></td>
              </tr>
              {product?.characteristics?.map((ch) => (
                <tr>
                  <td className="py-1 pr-1">{ch?.name}</td>
                  <td>{ch?.value}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/*<section className="bg-primary flex flex-col justify-center py-10 items-center z-0">*/}
      {/*  <h2 className="text-2xl lg:text-4xl font-bold text-black mt-4 mb-8">Сопутствующая продукция</h2>*/}
      {/*  <Carousel responsive={responsive} className="w-full lg:w-2/3 carousel mb-10">*/}
      {/*    <Link to="/product" className="block w-64 h-64 lg:h-96 lg:w-96 bg-white relative group/item overflow-hidden">*/}
      {/*      <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-64 h-64 lg:h-96 transition duration-500 group-hover/item:scale-105" />*/}
      {/*      <p className="absolute w-full bottom-0 left-0 h-12 lg:h-16 bg-white flex justify-center items-center">*/}
      {/*        <span className="text-base lg:text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>*/}
      {/*      </p>*/}
      {/*    </Link>*/}
      {/*    <Link to="/product" className="block w-64 h-64 lg:h-96 lg:w-96 bg-white relative group/item overflow-hidden">*/}
      {/*      <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-64 h-64 lg:h-96 transition duration-500 group-hover/item:scale-105" />*/}
      {/*      <p className="absolute w-full bottom-0 left-0 h-12 lg:h-16 bg-white flex justify-center items-center">*/}
      {/*        <span className="text-base lg:text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>*/}
      {/*      </p>*/}
      {/*    </Link>*/}
      {/*    <Link to="/product" className="block w-64 h-64 lg:h-96 lg:w-96 bg-white relative group/item overflow-hidden">*/}
      {/*      <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-64 h-64 lg:h-96 transition duration-500 group-hover/item:scale-105" />*/}
      {/*      <p className="absolute w-full bottom-0 left-0 h-12 lg:h-16 bg-white flex justify-center items-center">*/}
      {/*        <span className="text-base lg:text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>*/}
      {/*      </p>*/}
      {/*    </Link>*/}
      {/*    <Link to="/product" className="block w-64 h-64 lg:h-96 lg:w-96 bg-white relative group/item overflow-hidden">*/}
      {/*      <img alt="Здание решеток и КНС" src={thirdSectionImg} className="object-cover w-64 h-64 lg:h-96 transition duration-500 group-hover/item:scale-105" />*/}
      {/*      <p className="absolute w-full bottom-0 left-0 h-12 lg:h-16 bg-white flex justify-center items-center">*/}
      {/*        <span className="text-base lg:text-lg font-medium text-black transition duration-500 group-hover/item:text-orange-500">Здание решеток и КНС</span>*/}
      {/*      </p>*/}
      {/*    </Link>*/}
      {/*  </Carousel>*/}
      {/*</section>*/}
      <Footer />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}