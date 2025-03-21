import React, { useState } from 'react';

// Import book images
import book7 from '../assets/book7.jpeg';
import book8 from '../assets/book8.jpg';
import book9 from '../assets/book9.jpg';
import book10 from '../assets/book10.jpg';
import book11 from '../assets/book11.jpg';
import book12 from '../assets/book12.jpg';

const trendingBooks = [
    { id: 1, title: 'The Midnight Library', author: 'Matt Haig', price: '$10.99', cover: book7 },
    { id: 2, title: 'Project Hail Mary', author: 'Andy Weir', price: '$12.99', cover: book8 },
    { id: 3, title: 'The Invisible Life', author: 'V.E. Schwab', price: '$9.99', cover: book9 },
    { id: 4, title: 'Klara and the Sun', author: 'Kazuo Ishiguro', price: '$14.99', cover: book10 },
    { id: 5, title: 'The Four Winds', author: 'Kristin Hannah', price: '$11.99', cover: book11 },
    { id: 6, title: 'The Vanishing Half', author: 'Brit Bennett', price: '$13.99', cover: book12 },
];

const TrendingNowSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % trendingBooks.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + trendingBooks.length) % trendingBooks.length);
    };

    return (
        <section className="w-full min-h-screen bg-white flex flex-col justify-center items-center py-10 px-4 md:px-8 relative">
            <div className="max-w-7xl w-full mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Trending Now</h2>

                <div className="relative overflow-hidden">
                    {/* Carousel Slides */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${activeIndex * (100 / (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3))}%)`,
                        }}
                    >
                        {trendingBooks.map((book) => (
                            <div
                                key={book.id}
                                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                            >
                                <div className="bg-white rounded-lg shadow-md overflow-hidden h-[500px] flex flex-col">
                                    {/* Book Cover (Height-Dominant) */}
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
                                            <span className="text-lg md:text-xl font-bold text-blue-600">{book.price}</span>
                                            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-pink-400 text-white rounded-md transition-all duration-300 text-base md:text-lg">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-blue-600 hover:text-blue-800 transition-all duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-blue-600 hover:text-blue-800 transition-all duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrendingNowSection;