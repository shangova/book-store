import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Book4 from "../assets/website/book4.jpg";
import Book20 from "../assets/website/book20.jpg";
import Book6 from "../assets/website/book6.jpg";
import Book8 from "../assets/website/book8.jpg";
import Book12 from "../assets/website/book12.jpg";
import Book3 from "../assets/website/book3.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
    {
        id:1,
        img: Book4,
        title: "Гордость и предубеждение",
        avtors: "Джейн Остин",
        description: "Это классика английской литературы, рассказывающая о любви, гордости и социальных предрассудках. В центре сюжета — остроумная и независимая Элизабет Беннет, одна из пяти дочерей в семье, где мать мечтает выгодно выдать их замуж. Когда в их жизни появляется богатый, но высокомерный мистер Дарси, между ним и Элизабет возникает взаимное непонимание. Однако по мере развития событий их взгляды и чувства меняются, преодолевая гордость и предубеждения.",
     },
     {
        id:2,
        img: Book20,
        title: "Граф Монте-Кристо",
        avtors: "Александр Дюма",
        description: "Это захватывающая история о предательстве, мести и справедливости. Молодой моряк Эдмон Дантес становится жертвой заговора и несправедливо попадает в тюрьму. Проведя долгие годы в заключении, он узнает о сокровище на острове Монте-Кристо, бежит из тюрьмы и, обретя несметные богатства, возвращается под новым именем, чтобы отомстить своим обидчикам.",
    },
    {
        id:3,
        img: Book6,
        title: "Любовные письма и стихи Джона Китса",
        avtors: "Джон Китс",
        description: "Сборник объединяет проникновенные стихотворения и письма одного из величайших поэтов-романтиков. В этих строках — страсть, тоска, мечты о вечной любви и размышления о скоротечности жизни. Книга раскрывает тонкий мир чувств Китса и его стремление к красоте во всем.",
 },
    {
        id: 4,
        img: Book8,
        title: "Великий Гэтсби",
        avtors: "Френсис Скотт Фицджеральд",
        description: "Это история о любви, мечтах и иллюзиях, разворачивающаяся на фоне «ревущих двадцатых» в Америке. Молодой и богатый Джей Гэтсби устраивает роскошные вечеринки в надежде вновь завоевать сердце своей возлюбленной Дейзи Бьюкенен, с которой его разлучила война и социальное неравенство. Через рассказчика, Ника Каррауэя, читатель становится свидетелем трагедии Гэтсби, его веры в американскую мечту и столкновения с безжалостной реальностью. Этот роман — тонкая критика общества, одержимого богатством и статусом, а также размышление о недостижимости прошлого.",
    },
    {
        id: 5,
        img: Book3,
        title: "Ребекка",
        avtors: "Дафна Дюморье",
        description: "Юная компаньонка становится женой английского аристократа Максимилиана де Уинтера и переезжает с ним в мрачное поместье Мэндерли. Здесь она сталкивается с загадочным прошлым первой жены мужа, Ребеккой, чье присутствие, кажется, все еще витает в воздухе. Странное поведение супруга и настороженность прислуги заставляют героиню искать скрываемую тайну, которая изменит ее жизнь.",
    },
    {
        id: 6,
        img: Book12,
        title: "Ромео и Джульетта",
        avtors: "Уильям Шекспир",
        description: "Это история о юной любви, столкнувшейся с непримиримой враждой двух знатных семей, Монтекки и Капулетти. Ромео и Джульетта, несмотря на запреты и опасности, обретают друг в друге смысл жизни, но их судьба оказывается трагически предрешенной. Ошибки, случайности и жестокие обстоятельства приводят к гибели влюбленных, что становится роковым уроком для их родных. Эта пьеса — вечный символ страсти, жертвы и трагедии любви, неподвластной предрассудкам.",
    },
    
]

const BestBooks = ({handleOrderPopup}) => {
  return (
  <>
    <div className="py-10">
        <div id="BestBooks" className="container">
            {/* Header section */}
            <div 
            data-aos="zoom-in"
            data-aos-once="true"
            className="text-center mb-20 max-w-[400px]
            mx-auto">
                <h1 className="text-3xl font-bold">
                    Лучшая литература о любви
                </h1>
                <p className="py-4 text-1xl text-gray-400 ">
                Если жизнь закручена похлеще романа, во что превращается роман?                </p>
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