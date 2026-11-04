import React from "react";
import Slider from "react-slick";
import foto1 from "../assets/website/foto1.jpg";
import foto2 from "../assets/website/foto2.jpg";
import foto3 from "../assets/website/foto3.jpg";
import foto4 from "../assets/website/foto4.jpg";
import foto5 from "../assets/website/foto5.jpg";
import foto6 from "../assets/website/foto6.jpg";

const TestimonialData = [
    {
        id:1,
        name: "Гавриленко Дарья",
        text: "Удобный в навигации сайт, есть возможность ознакомиться с описанием книг и сделать заказ. Благодаря этому сайту книга Шарлотты Бронте Джен Эйр стала моей любимой!!!",
        img: foto1,
    },
    {
        id:2,
        name: "Калимуллина Лилия",
        text: "Самый удобный сайт,который я только могла найти!! Удобный интерфейс,много выбора для различного настроения! Заказала там неповторимую классику «Гарри Поттер» и осталась крайне довольна!",
        img: foto2,
    },
    {
        id:3,
        name: "Глухов Михаил",
        text: "Сайт просто супер! Всё устроено так логично, что нужная книга находится за пару кликов, а развёрнутые описания снимают все вопросы. Большое спасибо за топовый сервис и заряд читательского энтузиазма!",
        img: foto3,
    },
    {
        id:4,
        name: "Ермолаева Светлана",
        text: "Отличный сайт! Все интуитивно понятно, легко найти нужную книгу, а подробные описания помогают сделать правильный выбор. Спасибо за качественный сервис и вдохновение для чтения!",
        img: foto4,
    },
    {
        id:5,
        name: "Пресняков Андрей",
        text: "Этот сайт меня сразу зацепил, во-первых это дизайн. Очень приятная цветовая гамма, удобное расположение обложек книг. Во-вторых , могу отметить , что раздел с жанрами очень грамотно составлен, даже начинающему читателю будет реально что -то найти интересное. Видно, что создатель сайта постарался, ставлю 5 звезд",
        img: foto5,
    },
    {
        id:6,
        name: "Поздняков Никита",
        text: "Это настоящая находка для книголюба! Я в восторге от удобства и широты ассортимента этого онлайн-магазина. За последние несколько месяцев я совершил здесь уже несколько заказов и каждый раз оставался доволен",
        img: foto6,
    },
];
const Testimonial = () => {

    //slider config
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        //slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                },
            },
        ],
    };
  return (
    <div className="pb-10">
        <div id="Testimonial"
        className="container">
            {/* header */}
            <div 
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px]
            mx-auto">
                <p className="text-sm bg-clip-text text-transparent 
                bg-gradient-to-r from-primary to-secondary">
                    Что говорят Наши клиенты
                </p>
                <h1 className="text-3xl font-bold">Рекомендация
                </h1>
                <p className="text-xs text-gray-400">Книги, которые обнимают.</p>
            </div>
            {/* card section */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {TestimonialData.map((data) => (
                        <div className="my-6">
                           <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4
                           rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                <div>
                                    <img src={data.img} alt="" 
                                    className="h-[50px] w-[50px]
                                object-cover rounded-md "/>
                                </div>
                                <div>
                                    <div>
                                        <h1 className="text-xl font-bold text-black/80
                                        dark:text-white">{data.name}</h1>
                                        <p className="text-gray-500 text-sm">{data.text}</p>
                                    </div>
                                </div>
                                <p className="absolute text-black/20 z-10 top-0 right-0
                            font-serif text-9xl">,,</p>
                            </div>
                            
                        </div>
                    ))}
                    
                    
                </Slider>
            </div>
        </div>
    </div>
  );
};

export default Testimonial