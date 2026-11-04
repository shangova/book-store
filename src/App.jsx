import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestBooks from './components/BestBooks';
import Detectiv from './components/Detectiv';
import Fanfastic from './components/Fanfastic';
import Banner from './components/Banner';
import AllBooks from './components/AllBooks';
import Cards from './components/Cards';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Popup from './components/Popup';


import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {

  const [orderPopup, setOrderPopup] = React.useState (false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

 
    const [orderCards, setOrderCards] = React.useState (true);
  
    const handleOrderCards = (book) => {
      setSelectedBook(book);       // сохраняем выбранную книгу
      setOrderCards(true);         // показываем Cards.jsx
    };

    const [selectedBook, setSelectedBook] = React.useState(null);

    
  

React.useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  });
AOS.refresh();
}, []);

  return (
   <>
   <div className="bg-white dark:bg-gray-900
   dark:text-white duration-200">
    <Navbar handleOrderPopup = {handleOrderPopup}/>
    <Hero handleOrderPopup = {handleOrderPopup}/>
    <BestBooks handleOrderPopup = {handleOrderPopup}/>
    <Detectiv handleOrderPopup={handleOrderPopup} />
    <Fanfastic handleOrderPopup={handleOrderPopup} />
    <Banner />
    <AllBooks handleOrderCards={handleOrderCards} />
    <Cards
  handleOrderCards={handleOrderCards}
  orderCards={orderCards}
  selectedBook={selectedBook} 
/>
    <Testimonial />
    <Footer />
    <Popup handleOrderPopup = {handleOrderPopup} orderPopup={orderPopup}/>
   </div>
   </>
  )
}



export default App