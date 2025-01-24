import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';

export default function SubmitForm() {
  const [blockSend, setBlockSend] = useState(false);

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Отправляем запрос....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2e741a2c-77a8-48de-bdc4-88cac31da934");
    formData.append("subject", "Запрос с сайта ТехноАльянс");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setBlockSend(true);
      setResult("Запрос отправлен успешно");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [url, setUrl] = useState(window.location.href);
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({
    phone: '',
    email: '',
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOrgChange = (event) => {
    setOrg(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!phone || phone.length < 18) {
      errors.phone = 'Введите корректный номер телефона';
    }

    if (email && !/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi.test(email)) {
      errors.email = 'Введите корректный E-mail';
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
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex lg:gap-4 w-full flex-col lg:flex-row">
          <input
            type="text"
            className="w-full p-2 text-lg text-gray-700 border-b focus-visible:outline-none focus-visible:border-orange-500 bg-transparent hidden"
            name="Страница, с которой сделан запрос:"
            value={url}
          />
          <label className="block mb-4 relative w-full">
            <span className={`text-gray-700 absolute ${name?.length && 'with-content'} top-0 left-0 p-2 text-lg transition-all duration-300 ease-in-out`}>
              Имя:
            </span>
            <input
              type="text"
              className="w-full p-2 text-lg text-gray-700 border-b focus-visible:outline-none focus-visible:border-orange-500 bg-transparent"
              name="Имя"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label className="block mb-4 relative w-full">
            <span className={`text-gray-700 absolute ${org?.length && 'with-content'} top-0 left-0 p-2 text-lg transition-all duration-300 ease-in-out`}>
              Организация:
            </span>
            <input
              type="text"
              className="w-full p-2 text-lg text-gray-700 border-b focus-visible:outline-none focus-visible:border-orange-500 bg-transparent"
              name="Организация"
              value={org}
              onChange={handleOrgChange}
            />
          </label>
        </div>
        <div className="flex lg:gap-4 w-full flex-col lg:flex-row">
          <label className="block mb-4 relative w-full">
            <span className={`text-gray-700 absolute ${phone?.length && 'with-content'} top-0 left-0 p-2 text-lg transition-all duration-300 ease-in-out`}>
              Телефон (обязательно):
            </span>
            <MaskedInput
              mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
              className="w-full p-2 text-lg text-gray-700 border-b focus-visible:outline-none focus-visible:border-orange-500 bg-transparent"
              name="Телефон"
              required
              value={phone}
              onChange={handlePhoneChange}
            />
            {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
          </label>
          <label className="block mb-4 relative w-full">
            <span className={`text-gray-700 absolute ${email?.length && 'with-content'} top-0 left-0 p-2 text-lg transition-all duration-300 ease-in-out`}>
              E-mail:
            </span>
            <input
              type="text"
              className="w-full p-2 text-lg text-gray-700 border-b focus-visible:outline-none focus-visible:border-orange-500 bg-transparent"
              name="E-mail"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </label>
        </div>
        <label className="block mb-4 relative w-full">
          <span className={`text-gray-700 absolute ${comment?.length && 'with-content'} top-0 left-0 p-2 text-lg transition-all duration-300 ease-in-out`}>
            Комментарий:
          </span>
          <textarea
            className="w-full p-2 text-lg text-gray-700 border-b focus-visible:outline-none focus-visible:border-orange-500 bg-transparent"
            name="Комментарий"
            value={comment}
            onChange={handleCommentChange}
          />
        </label>
        <button className="bg-orange-500 enabled:hover:bg-orange-700 text-white font-bold py-6 px-6 disabled:opacity-75 disabled:bg-gray-500 w-full lg:w-1/3 text-xl"
                type="submit" onClick={(e) => blockSend && e.preventDefault()} disabled={blockSend}>
          Отправить
        </button>
        <span className="block mt-2 text-sm">{result}</span>
      </form>
    </>
  );
}