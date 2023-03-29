import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import reviews from './data';
import { FaBeer } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


function App() {
  const [index, setIndex] = useState(0);
  
  const  { name, job, image, text} = reviews[index];

  const checkNumber = (number) => {
    if(number > reviews.length - 1){
      return number == 0;
   }
   if(number < 0){
     return number == reviews.length - 1;
  }
    return number;
  }



  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;

      return checkNumber(newIndex);
    });
  };

   const prevPerson = () => {
     setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;

            return checkNumber(newIndex); 
     })
   }

   const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if(randomNumber == index){
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber))
   }

   // MODULUS METHOD
   const nextReview = () => {
     setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % reviews.length;
      return newIndex;
     });
   }

   const prevReview = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      return newIndex;
    })
   }

  return (
    <section className="App">
      <article className='review'>
       <div className='img-container'>
        <img className='round-img' src={image} alt={name}  />
        </div>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
       <h4 className='author'>{name}</h4>
       <p className='job'>{job}</p>
       <p className='info'>{text}</p> 
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
           <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
           <FaChevronRight />
          </button>
        </div>
    <button className='random-btn' onClick={randomPerson}> surprise me </button>    
      <h1>{name}</h1>  

      </article>

    </section>
  )
}

export default App;
