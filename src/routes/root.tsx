import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask';
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Root() {
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

    formData.append("access_key", "9db50265-5212-4f8a-9d21-adadd28f6ef2");
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
      <div className="fixed top-0 left-0 w-full h-20 bg-white flex justify-between items-center px-4">
        <div className="flex items-center gap-8">
          <div className="text-white">
            <img src={logo} alt="Logo" className="h-16" />
          </div>
          <div className="text-gray-900 hidden md:flex">
            <span>Производство оборудования и спецтехники</span>
          </div>
        </div>
        <div className="flex justify-end md:flex md:justify-between">
          <div className="hidden md:flex md:items-center">
            <a href="tel:+7 (903) 650-47-60" className="mr-4 text-gray-900 hover:text-black text-sm">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2"/>
              <span>+7 (903) 650-47-60</span>
            </a>
            <a href="mailto:teh-al-zakaz@yandex.ru" className="mr-4 text-gray-900 hover:text-black text-sm">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
              <span>teh-al-zakaz@yandex.ru</span>
            </a>
            {/*<div className="mr-4 text-gray-900 hover:text-black text-sm">*/}
            {/*  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2"/>*/}
            {/*  <span>123 Main St, Anytown, USA</span>*/}
            {/*</div>*/}
          </div>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded call-button hidden md:flex" onClick={handleOpen}>
            Заказать звонок
          </button>
          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-gray-500 bg-opacity-50 flex justify-center items-center">
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

      <nav className={`nav md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="absolute top-0 left-0 w-full flex justify-center items-center h-screen bg-white">
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
            {/*<li><div className="mr-4 text-gray-900 hover:text-black text-sm">*/}
            {/*  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2"/>*/}
            {/*  <span>123 Main St, Anytown, USA</span>*/}
            {/*</div></li>*/}
            <li><button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded call-button" onClick={handleOpen}>Заказать звонок</button></li>
          </ul>
        </div>
      </nav>

      <div className="h-screen pt-16 flex flex-row flex-wrap md:flex-nowrap">
        <Link to="/first" className="w-full md:w-1/3 xl:w-1/3 bg-red-500 hover:bg-red-700 cursor-pointer">
          <div className="h-full flex flex-col justify-end">
            <h2 className="text-2xl text-white p-4 w-3/4">Технологические линии и оборудование для получения мясокостной муки</h2>
          </div>
        </Link>
        <Link to="/second" className="w-full md:w-1/3 xl:w-1/3 bg-blue-500 hover:bg-blue-700 cursor-pointer">
          <div className="h-full flex flex-col justify-end">
            <h2 className="text-2xl text-white p-4 w-3/4">Специальная техника для транспортировки биологического сырья</h2>
          </div>
        </Link>
        <Link to="/third" className="w-full md:w-1/3 xl:w-1/3 bg-green-500 hover:bg-green-700 cursor-pointer">
          <div className="h-full flex flex-col justify-end">
            <h2 className="text-2xl text-white p-4 w-3/4">Оборудование для механической очистки стоков</h2>
          </div>
        </Link>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}