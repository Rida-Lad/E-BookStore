import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import book13 from '../assets/book13.jpg';
import book14 from '../assets/book14.jpg';
import book15 from '../assets/book15.jpg';
import book16 from '../assets/book16.jpg';
import book17 from '../assets/book17.jpg';
import book18 from '../assets/book18.jpg';

const BestsellersCarousel = () => {
  // State to manage the current slide and mobile view detection
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // List of bestsellers with their details
  const bestsellers = [
    { id: 1, title: 'Atomic Habits', author: 'James Clear', price: '$15.99', cover: book13 },
    { id: 2, title: 'Educated', author: 'Tara Westover', price: '$14.99', cover: book14 },
    { id: 3, title: 'Where the Crawdads Sing', author: 'Delia Owens', price: '$12.99', cover: book15 },
    { id: 4, title: 'Becoming', author: 'Michelle Obama', price: '$16.99', cover: book16 },
    { id: 5, title: 'The Psychology of Money', author: 'Morgan Housel', price: '$13.99', cover: book17 },
    { id: 6, title: 'The Thursday Murder Club', author: 'Richard Osman', price: '$11.99', cover: book18 }
  ];

  // Effect to check for mobile view on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Constants for desktop view
  const itemsPerDesktopView = 4;
  const totalDesktopSlides = Math.ceil(bestsellers.length / itemsPerDesktopView);
  
  // Function to navigate to the next slide
  const nextSlide = () => {
    if (isMobile) {
      setCurrentSlide(current => (current + 1) % bestsellers.length);
    } else {
      setCurrentSlide(current => (current + 1) % totalDesktopSlides);
    }
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    if (isMobile) {
      setCurrentSlide(current => (current - 1 + bestsellers.length) % bestsellers.length);
    } else {
      setCurrentSlide(current => (current - 1 + totalDesktopSlides) % totalDesktopSlides);
    }
  };

  // Get visible books based on current slide and device
  const visibleBooks = isMobile 
    ? bestsellers 
    : bestsellers.slice(
        currentSlide * itemsPerDesktopView, 
        (currentSlide + 1) * itemsPerDesktopView
      );

  return (
    <section className="w-full h-screen bg-gray-50 flex items-center justify-center px-4 md:px-8 overflow-hidden relative">
      {/* Decorative pink shapes in corners */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-pink-100 rounded-br-full opacity-60"></div>
      <div className="absolute top-0 right-0 w-24 h-24 md:w-48 md:h-48 bg-pink-100 rounded-bl-full opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-pink-100 rounded-tr-full opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-pink-100 rounded-tl-full opacity-60"></div>
      
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Bestsellers</h2>
        
        {/* Navigation controls */}
        <div className="w-full mb-8 flex justify-center">
          <div className="flex items-center">
            <button 
              onClick={prevSlide} 
              className="w-10 h-10 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-200 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="mx-4 flex">
              {[...Array(isMobile ? bestsellers.length : totalDesktopSlides)].map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-8 text-sm font-medium mx-1 py-1 ${currentSlide === idx ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
            
            <button 
              onClick={nextSlide} 
              className="w-10 h-10 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-200 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Mobile carousel */}
        {isMobile ? (
          <div className="w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {bestsellers.map((book) => (
                <div key={book.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full max-w-xs mx-auto shadow-md relative" style={{ boxShadow: '0 8px 12px -1px rgba(255, 182, 193, 0.4)' }}>
                    {/* Book cover container */}
                    <div className="w-full px-4 pt-4">
                      <div className="relative pt-[120%] bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={book.cover} 
                          alt={book.title} 
                          className="absolute top-0 left-0 w-full h-full object-cover object-center" 
                        />
                      </div>
                    </div>
                    {/* Info section */}
                    <div className="p-4 flex flex-col">
                      <h3 className="text-sm font-bold mb-1">{book.title}</h3>
                      <p className="text-xs text-gray-600 mb-2">by {book.author}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-blue-300">{book.price}</span>
                        <button className="px-3 py-1 text-xs bg-blue-300 text-white rounded-md">
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Desktop grid view
          <div className="w-full grid grid-cols-4 gap-6">
            {visibleBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-lg overflow-hidden flex flex-col max-w-xs shadow-md relative" style={{ boxShadow: '0 8px 6px -1px rgba(255, 182, 193, 0.4)' }}>
                {/* Book cover container */}
                <div className="w-full px-3 pt-3">
                  <div className="relative pt-[120%] bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={book.cover} 
                      alt={book.title} 
                      className="absolute top-0 left-0 w-full h-full object-cover object-center" 
                    />
                  </div>
                </div>
                {/* Info section */}
                <div className="p-3 flex flex-col">
                  <h3 className="text-xs font-bold mb-1">{book.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">by {book.author}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-blue-300">{book.price}</span>
                    <button className="px-2 py-1 text-xs bg-blue-300 text-white rounded-md">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestsellersCarousel;