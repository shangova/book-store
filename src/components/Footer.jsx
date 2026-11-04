import React from "react";
import { FaLocationArrow, FaMobileAlt, FaTelegram, FaVk } from "react-icons/fa";

const FooterLinks = [
    {   
        id: 1,
        title: "Главная страница",
        link: "#Navbar",
    },
    {
        id: 3,
        title: "Романы",
        link: "#BestBooks",
    },
    {
        id: 4,
        title: "Детективы",
        link: "#Detectiv",
    },
    {
        id: 5,
        title: "Фэнтези",
        link: "#Fanfastic",
    },
    {
        title: "Все книги",
        link: "#AllBooks",
    },
];



const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
        <div className="container">
            <div className="grid md:grid-cols-3 py-5">
                {/* company details */}
                <div className="py-8 px-4">
                    <h1
                    className="sm:text-3xl text-xl font-bold
                    sm:text-left text-justify mb-3">Книжный магазин
                    </h1>
                    <p>Изысканные книги для изысканных умов.
                    </p>
                    <br />
                    {/* Социальные сети: */}
                    <div className="flex items-center gap-3">
                        <a href="https://yandex.ru/maps/51/samara/?ll=50.100199%2C53.195876&z=12">
                        <FaLocationArrow />
                        </a>
                        <p>Россия, г. Самара</p>
                        
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <FaMobileAlt />
                        <p>+7 937 809 00 20</p>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="https://vk.com/elena__shangova">
                            <FaVk className="text-3xl" />
                        </a>
                        <p>elena__shangova</p>
                        <a href="https://t.me/elenashangova">
                            <FaTelegram className="text-3xl" />
                        </a>
                        <p>@elenashangova</p>
                    </div>
                </div>
                {/* Links section */}
                <div className="grid grid-cols-2 sm:grid-cols-3
                col-span-2 md:pl-10">
                <div>
                    <div className="py-8 px-4">
                    <h1 className="text-xl font-bold
                    sm:text-left text-justify mb-3">
                        Ссылки:
                        </h1>
                        <ul className="flex flex-col gap-3">
                            {
                            FooterLinks.map((menu) => (
                                
                                    <li
                                    className="cursor-pointer hover:translate-x-1
                                    duration-300 hover:text-primary space-x-1
                                    text-gray-500">
                                          <a href={menu.link} className="flex h-10px items-center gap[2px]">
                                        <span>&#11162;</span>
                                        {menu.title}
                                        </a>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                </div>
                
                </div>

            </div>
            {/* copyright section */}
            <div>
                <div className="border-t-2 border-gray-300/50">
                    <p className="text-center py-10">
                        Шангова Елена Евгеньевна 2-ИАИТ-104 
                       
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer