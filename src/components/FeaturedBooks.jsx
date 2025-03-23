import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// Import book images
import book1 from '../assets/book1.jpeg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import book4 from '../assets/book4.jpg';
import book5 from '../assets/book5.jpg';
import book6 from '../assets/book6.jpg';

const featuredBooks = [
    { id: 1, title: 'The Silent Echo', author: 'Maya Richards', price: '$12.99', cover: book1 },
    { id: 2, title: 'Beyond the Horizon', author: 'James Peterson', price: '$9.99', cover: book2 },
    { id: 3, title: 'Whispers in the Dark', author: 'Elena Cortez', price: '$14.99', cover: book3 },
    { id: 4, title: 'The Last Equation', author: 'Robert Chen', price: '$11.99', cover: book4 },
    { id: 5, title: 'Forgotten Realms', author: 'Thomas Wright', price: '$13.99', cover: book5 },
    { id: 6, title: 'Stellar Odyssey', author: 'Sarah Johnson', price: '$15.99', cover: book6 },
];

const FeaturedBooksSection = () => {
    return (
        <section className="relative w-full min-h-screen bg-blue-50 flex flex-col justify-center items-center py-10 px-4 md:px-8 overflow-hidden">


            <div className="max-w-7xl w-full mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Books</h2>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Autoplay, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true, el: '.custom-pagination' }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {featuredBooks.map(book => (
                        <SwiperSlide key={book.id}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden h-[500px] flex flex-col">
                                {/* Book Cover */}
                                <div className="flex-1 flex items-center justify-center p-4">
                                    <img
                                        src={book.cover}
                                        alt={book.title}
                                        className="h-[300px] w-auto object-cover"
                                    />
                                </div>
                                {/* Book Details */}
                                <div className="p-4">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2">{book.title}</h3>
                                    <p className="text-gray-600 mb-4 text-lg">by {book.author}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg md:text-xl font-bold text-blue-300">{book.price}</span>
                                        <button
                                            className="px-4 py-2 text-white rounded-md text-base md:text-lg"
                                            style={{
                                                background: 'radial-gradient(circle at 30% 30%, #90e0ef, #f5b6c9)',
                                                boxShadow: '0 4px 6px rgba(144, 224, 239, 0.2)',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom pagination container */}
                <div className="custom-pagination mt-6 w-full flex justify-center"></div>
            </div>
        </section>
    );
};


export default FeaturedBooksSection;