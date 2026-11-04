import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Простая регулярка для проверки email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = () => {
    // Проверка email
    if (!validateEmail(email)) {
      setError("Пожалуйста, введите корректный Email.");
      return;
    }

    // Проверка адреса
    if (address.trim().length < 5) {
      setError("Адрес должен быть не короче 5 символов.");
      return;
    }

    // Всё прошло — сохраняем
    const userData = {
      name,
      email,
      address,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    setError("");
    setName("");
    setEmail("");
    setAddress("");
    handleOrderPopup(false);
    alert("Заказ успешно оформлен!");
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm bg-black/50">
          <div className="fixed top-1/2 left-1/2 bg-white dark:bg-gray-900 dark:text-white duration-200 p-4 rounded-md shadow-md w-[300px] transform -translate-x-1/2 -translate-y-1/2">
            {/* header */}
            <div className="flex items-center justify-between">
              <h1>Покупка книг</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => handleOrderPopup(false)}
              />
            </div>

            {/* Form */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 mb-4"
              />
              <input
                type="text"
                placeholder="Адрес"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 mb-4"
              />

              {error && (
                <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
              )}

              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="bg-primary text-white px-8 py-2 rounded-full"
                >
                  Заказать сейчас
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
