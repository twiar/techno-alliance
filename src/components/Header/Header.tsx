import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SubmitForm from "../SubmitForm/SubmitForm";
import {Link, useLocation, useParams} from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase";

export default function Header({ isMainPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const [section, setSection] = useState({});
  const [menu, setMenu] = useState([]);
  const outerParams = useParams();

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

  const getSection = async () => {
    const collections = collection(db, 'sections');
    const q = query(collections, where('path', '==', outerParams?.sectionId));
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return list[0];
  };

  const getCategories = async (id) => {
    const snapshot = await getDocs(query(collection(db, "categories"), where("parentId", "==", id)));
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return list;
  };

  const getProducts = async (id) => {
    const snapshot = await getDocs(query(collection(db, "products"), where("parentId", "==", id)));
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return list;
  };

  useEffect(() => {
    const fetchAll = async () => {
      if (outerParams?.sectionId) {
        let menuApi = [];
        const section = await getSection();
        if (section[0]?.order) section.sort((a, b) => {
          if (a.order < b.order) {
            return -1;
          }
          if (a.order > b.order) {
            return 1;
          }
          return 0;
        });
        setSection(section);
        const cats = await getCategories(section.id);
        if (cats[0]?.order) cats.sort((a, b) => {
          if (a.order < b.order) {
            return -1;
          }
          if (a.order > b.order) {
            return 1;
          }
          return 0;
        });

        for (const cat of cats) {
          const prods = await getProducts(cat.id);
          let catChilds = [];
          if (prods[0]?.order) prods.sort((a, b) => {
            if (a.order < b.order) {
              return -1;
            }
            if (a.order > b.order) {
              return 1;
            }
            return 0;
          });
          for (const prod of prods) {
            catChilds.push({
              name: prod.title,
              link: `/sections/${section?.path}/categories/${cat?.path}/products/${prod?.path}`,
              className: 'text-gray-700 text-base mb-1 block hover:text-black',
            });
          }
          menuApi.push({
            category: {
              name: cat.title,
              link: `/sections/${section?.path}/categories/${cat?.path}`,
              classNameWrapper: 'w-full mb-4',
              classNameTitle: 'text-gray-700 text-xl !font-bold uppercase mb-2',
              children: catChilds
            }
          });
        }
        setMenu(menuApi);
      }
    };
    fetchAll();
  }, []);

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
            ${outerParams.sectionId ? '' : 'hidden'}
          `} onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <span className="uppercase">Продукция</span>
            <div className={`flex justify-center items-center bg-primary z-50 top-16 right-0 absolute w-full transition duration-250 ${productsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <div className={`
                flex flex-wrap w-2/3 m-4
              `}>
                  {
                    menu.map(
                      (ul, i) =>
                      <div className="flex flex-col w-1/3 px-4">
                        <ul className={ul.category.classNameWrapper} key={i}>
                          <li><Link to={ul.category.link} className={ul.category.classNameTitle}>{ul.category.name}</Link></li>
                          {ul.category.children.map((li, liKey) => <li key={liKey}><Link to={li.link} className={li.className}>{li.name}</Link></li>)}
                        </ul>
                      </div>
                    )
                  }

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
                  menu.map((ul, i) =>
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