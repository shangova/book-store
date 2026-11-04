import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Book22 from "../assets/website/book22.jpg";
import Book21 from "../assets/website/book21.jpg";
import Book24 from "../assets/website/book24.jpg";
import Book26 from "../assets/website/book26.jpg";
import Book23 from "../assets/website/book23.jpg";
import Book25 from "../assets/website/book25.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
    
     {
        id:1,
        img: Book21,
        title: "Таящийся у порога",
        avtors: "Говард Лавкрафт",
        description: "Это мрачная и напряжённая история о человеке, который сталкивается с таинственными и сверхъестественными событиями, преследующими его в доме. Главный герой, Джоэл Мэттин, обнаруживает, что его дом стал местом страшных явлений — от неясных шумов до странных сущностей, которые будто бы наблюдают за ним. Ощущая неизбежную опасность и угрозу, Джоэл пытается разобраться в этих событиях, однако всё, что он находит, лишь подтверждает, что неведомые силы действительно таятся в тени, готовые захватить его.",
    },
    {
        id:2,
        img: Book22,
        title: "Лицо ее закройте",
        avtors: "Джеймс Грилис",
        description: "Главная героиня, Эмили, оказавшись в центре ужасной трагедии, сталкивается с последствиями своего прошлого и темными секретами, которые она пыталась скрыть. Когда она становится свидетелем ряда странных и пугающих событий, ей предстоит раскрыть тайны, окружающие её семью и личную жизнь. В процессе расследования Эмили понимает, что её собственное лицо и личность стали частью запутанного и опасного лабиринта, в котором скрыта правда, способная разрушить всё.",
     },
    {
        id:3,
        img: Book24,
        title: "Судьба и его палач",
        avtors: "Фридрих Дюрренматт",
        description: "В произведении главный герой, осуждённый на смерть, сталкивается с палачом, который в какой-то момент оказывается в роли самой судьбы. Дюрренматт рассматривает вопросы о человеческом выборе, фатализме и последствиях действий, создавая парадоксальную ситуацию, в которой судьба и преступление переплетаются. Пьеса наполнена абсурдизмом и философскими размышлениями о предопределённости жизни.",
 },
    {
        id: 5,
        img: Book23, 
        title: "Смерть под маской",
        avtors: "Кэролайн Грэм",
        description: "В маленьком английском городке, в котором готовится театральная премьера, происходит ужасное убийство — один из актёров найден мертвым в день своего выступления. Инспектор Барнаби приступает к расследованию и вскоре обнаруживает, что за этим преступлением стоят не только личные обиды и скрытые интриги, но и тёмные тайны самого театра. В ходе расследования Барнаби сталкивается с запутанными отношениями между актёрами, завистью, ревностью и лицемерием. Роман исследует человеческие страсти и социальные связи, приводя к неожиданному и захватывающему финалу.",
    },
    {
        id: 6,
        img: Book25,
        title: "Список гостей",
        avtors: "Люси Фоли",
        description: "Среди гостей — группа людей с разными тайнами и скрытыми мотивами. Когда вечером происходит убийство, каждый из присутствующих становится подозреваемым. На фоне этого расследования раскрываются старые обиды, личные секреты и скрытые связи между персонажами. Книга держит в напряжении, строя атмосферу недоверия и интриг, пока не приходит к неожиданному и захватывающему финалу.",
    },
    {
        id: 4,
        img: Book26,
        title: "Птицы, не позже полуночи",
        avtors: "Дафна Дюморье",
        description: "История начинается с того, что обычная жизнь главной героини, которая живет в доме у моря, нарушается странным поведением птиц. Сначала нападения кажутся случайными, но постепенно они становятся все более интенсивными и жестокими.",
    },
    
    
]

const BestBooks = ({handleOrderPopup}) => {
  return (
  <>
    <div className="py-10">
        <div id="Detectiv" className="container">
            {/* Header section */}
            <div 
            data-aos="zoom-in"
            data-aos-once="true"
            className="text-center mb-20 max-w-[400px]
            mx-auto">
                <h1 className="text-3xl font-bold">
                   Топ детективов по мнению читателей
                </h1>
                <p className="py-4 text-1xl text-gray-400 ">
                Один из самых удачных способов скрыть истину — выставить ее на всеобщее обозрение.                </p>
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