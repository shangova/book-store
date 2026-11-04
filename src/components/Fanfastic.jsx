import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Book18 from "../assets/website/book18.jpg";
import Book10 from "../assets/website/book10.jpg";
import Book17 from "../assets/website/book17.jpg";
import Book11 from "../assets/website/book11.jpg";
import Book15 from "../assets/website/book15.jpg";
import Book14 from "../assets/website/book14.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
    
     {
        id:1,
        img: Book10,
        title: "Франкенштейн",
        avtors: "Мэри Шелли",
        description: "История рассказывает о молодом ученом Викторе Франкенштейне, который создает живое существо из частей человеческих тел. Однако, столкнувшись с последствиями своего эксперимента, он отвергает свое творение, которое, в свою очередь, становится отвергнутым и изолированным от общества. Существо, страдая от одиночества и ненависти, решает отомстить своему создателю, что приводит к трагическим последствиям для обоих.",
    },
    {
        id:2,
        img: Book18,
        title: "Гарри Поттер и Тайная комната",
        avtors: "Джоан Роулинг",
        description: " Гарри возвращается на второй год обучения в Школу чародейства и волшебства Хогвартс. Вскоре в школе начинают происходить странные события: ученики оказываются превращёнными в статуи, а на стенах появляется угрожающая надпись, которая указывает на некую Тайную комнату.",
     },
    {
        id:3,
        img: Book17,
        title: "Хроники Нарнии",
        avtors: "Клайв Льюис",
        description: "Это серия из семи фэнтезийных романов, написанных Клайвом С. Льюисом, в которой рассказывается о волшебной стране Нарнии. В первой книге, Лев, колдунья и платяной шкаф, четверо детей — Питер, Сьюзан, Эдмунд и Люси — случайно оказываются в Нарнии, где встречают говорящих животных, волшебных существ и борьбу между силами добра и зла. Они помогают свергнуть злую Белую Колдунью и восстанавливают мир в Нарнии.",
 },
    {
        id: 5,
        img: Book11,
        title: "Одиссей",
        avtors: "Гомер",
        description: "Эпическая поэма Гомера, рассказывающая о приключениях царя Одиссея, который после Троянской войны десять лет скитается по морям, пытаясь вернуться домой. На пути его ждут встречи с мифологическими существами, гнев богов и тяжелые испытания. Тем временем в его доме жена Пенелопа и сын Телемах противостоят наглым женихам, желающим занять трон. Поэма исследует темы судьбы, мужества, хитрости и верности.",
    },
    {
        id: 4,
        img: Book15,
        title: "Гарри Поттер и Узник Азкабана",
        avtors: "Джоан Роулинг",
        description: "В этом году в Хогвартсе Гарри узнает о побеге опасного преступника Сириуса Блэка из волшебной тюрьмы Азкабан. Все уверены, что он охотится за Гарри, но правда оказывается гораздо сложнее. В школе появляются устрашающие стражи Азкабана — дементоры, а Гарри сталкивается с тайнами своего прошлого и неожиданными открытиями о своих родителях.",
    },
    {
        id: 6,
        img: Book14,
        title: "Питер Пэн",
        avtors: "Джеймс Барри",
        description: "Это фэнтезийная сказка с элементами приключенческого романа. Книга сочетает в себе волшебство, путешествия в другие миры и философские размышления о детстве, взрослении и мечтах. Она также относится к детской литературе, но её глубокие темы делают её интересной и для взрослых.",
    },
    
]

const BestBooks = ({handleOrderPopup}) => {
  return (
  <>
    <div className="py-10">
        <div id="Fanfastic" className="container">
            {/* Header section */}
            <div 
            data-aos="zoom-in"
            data-aos-once="true"
            className="text-center mb-20 max-w-[400px]
            mx-auto">
                <h1 className="text-3xl font-bold">
                Величайшие произведения фэнтези
                </h1>
                <p className="py-4 text-1xl text-gray-400 ">
                Магия начинается там, где заканчиваются границы реальности.                </p>
            </div>
            {/* card section */}
            <div className="grid grid-cols-1 
            sm:grid-cols-2 md:grid-cols-3 md:gap-5
            place-items-center">
{
    BooksData.map((book) => (
        <div 
        data-aos="zoom-in"
        className="py-4 rounded-2xl bg-white 
        dark:bg-gray-800 hover:bg-primary
        dark:hover:bg-primary hover:text-white
        relative shadow-xl duration-high group max-w-[300px]">
            <div className="h-[100px]">
                <img src={book.img} alt="" 
                className="max-w-[100px] block mx-auto
                transform -translate-y-14 group-hover:scale-105
                duration-300 shadow-md"/>
            </div>
            <div className="p-4 text-center">
               <div className="w-full flex items-center justify-center">
                <FaStar
                className="text-yellow-500" />
                <FaStar
                className="text-yellow-500" />
                <FaStar
                className="text-yellow-500" />
                <FaStar
                className="text-yellow-500" />
                </div> 
                <h1 className="text-xl font-bold">{book.title}</h1>
                <h1 className="text-sm font-bold">{book.avtors}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{book.description}</p>
                <button 
                onClick={handleOrderPopup}
                className=" from-primary to-secondary
                 text-white px-4 py-2 rounded-full mt-4
                hover:scale-105 duration-200 group-hover:bg-white
                group-hover:text-primary">Заказать сейчас</button>
            </div>
        </div>
    ))}

            </div>
        </div>
    </div>
   
    </>
  );
};

export default BestBooks