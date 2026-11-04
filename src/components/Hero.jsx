import React, { useState } from "react"
import Book1 from "../assets/website/book1.jpg"
import Book2 from "../assets/website/book2.jpg"
import Book3 from "../assets/website/book3.jpg"
import Vector from "../assets/website/fi.png"

const ImageList = [
    {
        id: 1, 
        img: Book1,
        title: "Грозовой перевал",
        avtors: "Эмили Бронте",
        description: "Это история роковой любви Хитклифа, приёмного сына владельца поместья «Грозовой Перевал», к дочери хозяина Кэтрин. Демоническая страсть двух сильных личностей, не желающих идти на уступки друг другу, из-за чего страдают и гибнут не только главные герои, но и окружающие их люди.",
    },
    {
        id: 2, 
        img: Book2,
        title: "Джен Эйр",
        avtors: "Шарлотта Бронте",
        description: " «Джейн Эйр» — история сильной и независимой женщины, которая, преодолевая жизненные трудности, находит любовь с мистером Рочестером, владельцем таинственного поместья. Тайны его прошлого и борьба за личное счастье Джейн приводят к драматичным поворотам, которые изменяют судьбы их обоих.",
    },
    {
        id: 3, 
        img: Book3,
        title: "Ребекка",
        avtors: "Дафна Дюморье",
        description: "Юная компаньонка становится женой английского аристократа Максимилиана де Уинтера и переезжает с ним в мрачное поместье Мэндерли. Здесь она сталкивается с загадочным прошлым первой жены мужа, Ребеккой, чье присутствие, кажется, все еще витает в воздухе. Странное поведение супруга и настороженность прислуги заставляют героиню искать скрываемую тайну, которая изменит ее жизнь.",
    },
]

const Hero = ({handleOrderPopup}) => {
    const [imageId , setImageId] = useState(Book1);
    const [title, setTitle] = useState("Грозовой перевал");
    const [avtors, setAvtors] = useState("Эмили Бронте")
    const [description, setDescription] = React.useState("Это история роковой любви Хитклифа, приёмного сына владельца поместья «Грозовой Перевал», к дочери хозяина Кэтрин. Демоническая страсть двух сильных личностей, не желающих идти на уступки друг другу, из-за чего страдают и гибнут не только главные герои, но и окружающие их люди.")
   

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSIze: "cover",
    widht: "100%",
  };

    return (
  <>
  <div className="min-h-[550px] sm:min-h-[720px]
  bg-gray-100 flex justify-center items-center
  dark:bg-gray-950 
  dark:text-white duration-200"
  style={bgImage}
  >
    <div id="Hero"
    className="container pb-8 sm:pb-0"></div>
        <div className="grid grid-cols-1
        sm:grid-cols-2">
           {/* text-content-section*/}
            <div className="flex flex-col
            justify-center gap-4 pt-12 sm:pt-0
            text-center sm:text-left order-2 
            sm:order-1">
                <h1 
                data-aos="zoom-out"
                data-aos-duration="500"
                className="text-5xl sm:text-6xl
                lg:text-7xl font-bold">
                    {title}
                    <p 
                    data-aos="slide-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="bg-clip-text
                    text-transparent bg-gradient-to-b
                    from-primary text-right text-sm 
                    to-secondary">{avtors}</p>
                    </h1>
            <p 
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
            className="text-sm">
                {description}
            </p>
            <div>
                <button
                onClick={handleOrderPopup}
                 data-aos="zoom-in"
                className="bg-gradient-to-r
                from-primary to-secondary
                text-white px-4 py-2 rounded-full
                mt-4 hover:scale-105 duration-200">
                    Заказать сейчас
                </button>
            </div>
            </div>
             {/* Image section*/}
            <div className="min-h-[450px] flex
            justify-center items-center relative 
            order-1 sm:order-2">
                {/* main image */}
                <div className="h-[300px] sm:h-[450px] 
                overflow-hidden flex justify-center
                items-center">
                    <img 
                     data-aos="zoom-in"
                     data-aos-once="true"
                    src={imageId} alt="" 
                    className="w-[300px] h-[300px] sm:[h-450]
                    sm:w-[450px] sm:scale-125
                    object-contain
                    mx-auto "
                    />

                </div>
                    {/* other image list */}
                    <div className="flex lg:flex-col lg:top-1/2
                    lg:-translate-y-1/2 lg:py-2
                    justify-center gap-4 absolute
                    -bottom-[40px] lg:-right-1
                    rounded-full">
                        {
                            ImageList.map((data) => (
                                <img 
                                data-aos="zoom-in"
                                data-aos-once="true"
                                src = {data.img}
                                className="max-w-[100px] h-[100px]
                                object-contain inline-block
                                hover:scale-110 duration-200"
                                onClick={() => {
                                        setImageId(data.id == 1 ?
                                            Book1 : data.id == 2 ?
                                            Book2 : Book3);
                                            setTitle(data.title);
                                            setAvtors(data.avtors);
                                            setDescription(data.description);
                                        }
                                   
                                }
                                />
                            ))
                        }
                    </div>

                
            </div>
        </div>
  </div >
  </>
  );
}

export default Hero