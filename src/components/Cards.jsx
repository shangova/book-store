import React, { useState } from "react";

const Cards = ({ orderCards, handleOrderCards, selectedBook }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);

  if (!orderCards || !selectedBook) return null;

  const handleOrder = () => {
    if (!name || !email || !address) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    const orderInfo = {
      book: selectedBook.title,
      name,
      email,
      address,
    };

    localStorage.setItem("bookOrder", JSON.stringify(orderInfo));
    setSuccess(true);
    setName("");
    setEmail("");
    setAddress("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-[400px] w-full relative">
        <button
          onClick={() => handleOrderCards(null)}
          className="absolute top-4 right-4 text-sm text-gray-400 hover:text-red-500"
        >
          Закрыть
        </button>

        {/* Центрируем изображение */}
        <div className="flex justify-center mb-4">
          <img
            src={selectedBook.img}
            alt={selectedBook.title}
            className="h-[180px] w-auto rounded shadow-md"
          />
        </div>

        <h2 className="text-xl font-bold text-center">{selectedBook.title}</h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-2">
          {selectedBook.avtors}
        </p>
        <p className="text-sm text-justify text-gray-700 dark:text-gray-400 mb-2">
          {selectedBook.description}
        </p>

        <p className="text-center text-gray-500 dark:text-gray-300 mb-4">
          {selectedBook.zhanrizd}
        </p>

        {/* Заказ */}
        {success ? (
          <p className="text-green-600 text-center font-semibold">
            Заказ оформлен!
          </p>
        ) : (
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-800"
            />
            <input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-800"
            />
            <input
              type="text"
              placeholder="Ваш адрес"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 rounded border dark:border-gray-600 dark:bg-gray-800"
            />
            <button
              onClick={handleOrder}
              className="w-full bg-primary text-white py-2 rounded-full hover:bg-opacity-90"
            >
              Заказать книгу
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
