import React, { useState, useEffect, useRef } from 'react';
import './TrendingBooks.css'; // Import the CSS file
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
    const carouselRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setActiveIndex(0);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % trendingBooks.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + trendingBooks.length) % trendingBooks.length);
    };

    return (
        <section className="w-full min-h-screen bg-white flex flex-col justify-center items-center py-10 px-4 md:px-8 relative overflow-hidden">
            {/* Floating Shapes */}
            <div className="floating-shapes absolute inset-0 z-0 pointer-events-none">
                {/* Light Pink Shapes */}
                <div className="shape shape-circle light-pink"></div>
                <div className="shape shape-square light-pink"></div>
                <div className="shape shape-triangle light-pink"></div>
                <div className="shape shape-diamond light-pink"></div>
                <div className="shape shape-small-circle light-pink"></div>
                <div className="shape shape-ellipse light-pink"></div>
                <div className="shape shape-star light-pink"></div>

                {/* Light Blue Shapes */}
                <div className="shape shape-circle light-blue"></div>
                <div className="shape shape-square light-blue"></div>
                <div className="shape shape-triangle light-blue"></div>
                <div className="shape shape-diamond light-blue"></div>
                <div className="shape shape-small-circle light-blue"></div>
                <div className="shape shape-ellipse light-blue"></div>
                <div className="shape shape-star light-blue"></div>
            </div>

            {/* Content */}
            <div className="max-w-7xl w-full mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Trending Now</h2>
                <div className="relative overflow-hidden" ref={carouselRef}>
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {trendingBooks.map((book) => (
                            <div key={book.id} className="w-full flex-shrink-0 px-4">
                                <div className="transparent-card rounded-lg shadow-md overflow-hidden h-[500px] flex flex-col items-center text-center">
                                    <div className="flex-1 flex items-center justify-center p-4">
                                        <img src={book.cover} alt={book.title} className="h-[300px] w-auto object-cover" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">{book.title}</h3>
                                        <p className="text-gray-600 mb-4 text-lg">by {book.author}</p>
                                        <span className="text-lg md:text-xl font-bold text-blue-600">{book.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-blue-600 hover:text-blue-800 z-10"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-blue-600 hover:text-blue-800 z-10"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrendingNowSection;