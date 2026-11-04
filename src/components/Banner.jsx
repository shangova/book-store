import React from "react";
import LibraryImg from "../assets/website/lib.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return ( 
  <>
  <div className="py-10">
    <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 
        items-center gap-6">
            {/* image-section */}
            <div>
                <img 
                data-aos="zoom-in"
                src={LibraryImg} alt="" 
                className="mx-w-[400px] block mx-auto h-[350pxx]
                w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                object-cover"
                />
            </div>
            {/* text content section */}
            <div 
            data-aos="slide-up"
            className="flex flex-col justify-center
            gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">Библиотека у Вас под рукой!</h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                В нашей библиотеке Вы найдете не только книги, но и настоящее богатство знаний и вдохновения. Мы гордимся разнообразием коллекций, которые включают как классические произведения, так и современные бестселлеры. Здесь каждый найдет что-то для себя, будь то любитель приключений, историй о великих путешествиях или фэнтези.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <GrSecure 
                        className="text-4xl h-12 w-12
                        shadow-sm p-4 rounded-full bg-zamok
                        dark:bg-secondary"/>
                        <p>Качественные книги</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <IoFastFood 
                        className="text-4xl h-12 w-12
                        shadow-sm p-4 rounded-full bg-dostavka
                        dark:bg-Dostavka"/>
                        <p>Быстрая доставка</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <GiFoodTruck 
                        className="text-4xl h-12 w-12
                        shadow-sm p-4 rounded-full bg-sposob
                        dark:bg-Sposob"/>
                        <p>Простой способ оплаты</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <GiFoodTruck
                        className="text-4xl h-12 w-12
                        shadow-sm p-4 rounded-full bg-predl
                        dark:bg-Predl"/>
                        <p>Интересные предложения по книгам</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  </div>
  </>
  );
};

export default Banner