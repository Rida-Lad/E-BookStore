import React, { useState, useEffect } from 'react';
import {
    FaBook, // Fiction
    FaGraduationCap, // Non-Fiction
    FaRocket, // Science Fiction
    FaMagic, // Fantasy
    FaSearch, // Mystery
    FaHeart, // Romance
    FaUser, // Biography
    FaClock, // History
    FaLightbulb, // Self-Help
    FaFlask, // Science
    FaBriefcase, // Business
} from 'react-icons/fa';

// Sample images for each category (replace with your own images)
import fictionImage from '../assets/FictionImage.jpg';
import nonFictionImage from '../assets/non-fiction.jpg';
import sciFiImage from '../assets/sci-fi.jpg';
import fantasyImage from '../assets/fantasy.jpg';
import mysteryImage from '../assets/mystery.jpg';
import romanceImage from '../assets/romance.jpg';
import biographyImage from '../assets/biography.jpg';
import historyImage from '../assets/history.jpg';
import selfHelpImage from '../assets/self-help.jpg';
import scienceImage from '../assets/science.jpg';
import businessImage from '../assets/business.jpg';

const categories = [
    'Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery',
    'Romance', 'Biography', 'History', 'Self-Help', 'Science', 'Business'
];

const categoryIcons = {
    'Fiction': <FaBook className="w-8 h-8" />,
    'Non-Fiction': <FaGraduationCap className="w-8 h-8" />,
    'Science Fiction': <FaRocket className="w-8 h-8" />,
    'Fantasy': <FaMagic className="w-8 h-8" />,
    'Mystery': <FaSearch className="w-8 h-8" />,
    'Romance': <FaHeart className="w-8 h-8" />,
    'Biography': <FaUser className="w-8 h-8" />,
    'History': <FaClock className="w-8 h-8" />,
    'Self-Help': <FaLightbulb className="w-8 h-8" />,
    'Science': <FaFlask className="w-8 h-8" />,
    'Business': <FaBriefcase className="w-8 h-8" />,
};

const categoryData = {
    'Fiction': {
        description: 'Fiction books encompass a wide range of imaginative and creative stories, often exploring complex characters and intricate plots.',
        stats: 'Over 100,000 titles',
        image: fictionImage,
    },
    'Non-Fiction': {
        description: 'Non-Fiction books are based on real events, facts, and information, providing insights into various subjects and topics.',
        stats: 'Over 75,000 titles',
        image: nonFictionImage,
    },
    'Science Fiction': {
        description: 'Science Fiction books explore futuristic concepts, advanced technology, space exploration, and often speculate on the future of humanity.',
        stats: 'Over 50,000 titles',
        image: sciFiImage,
    },
    'Fantasy': {
        description: 'Fantasy books transport readers to magical worlds filled with mythical creatures, epic quests, and enchanting adventures.',
        stats: 'Over 60,000 titles',
        image: fantasyImage,
    },
    'Mystery': {
        description: 'Mystery books are filled with suspense, intrigue, and puzzles that keep readers guessing until the very end.',
        stats: 'Over 40,000 titles',
        image: mysteryImage,
    },
    'Romance': {
        description: 'Romance books focus on love stories and relationships, often with a happy or emotionally satisfying ending.',
        stats: 'Over 80,000 titles',
        image: romanceImage,
    },
    'Biography': {
        description: 'Biography books provide detailed accounts of individuals\' lives, offering insights into their experiences, achievements, and challenges.',
        stats: 'Over 30,000 titles',
        image: biographyImage,
    },
    'History': {
        description: 'History books delve into past events, offering analysis and narratives that help us understand the world today.',
        stats: 'Over 35,000 titles',
        image: historyImage,
    },
    'Self-Help': {
        description: 'Self-Help books offer guidance and strategies for personal development, mental health, and achieving life goals.',
        stats: 'Over 25,000 titles',
        image: selfHelpImage,
    },
    'Science': {
        description: 'Science books cover a wide range of scientific topics, from biology and chemistry to physics and astronomy, often explaining complex concepts in an accessible way.',
        stats: 'Over 45,000 titles',
        image: scienceImage,
    },
    'Business': {
        description: 'Business books provide insights into the world of commerce, offering advice on management, entrepreneurship, finance, and more.',
        stats: 'Over 55,000 titles',
        image: businessImage,
    },
};

const FloatingShape = ({ color, size, animationDuration }) => {
    const [position, setPosition] = useState({
        x: Math.random() * 100,
        y: Math.random() * 100,
    });
    const [direction, setDirection] = useState({
        x: Math.random() * 2 - 1, // -1 to 1
        y: Math.random() * 2 - 1, // -1 to 1
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPosition(oldPosition => {
                let newX = oldPosition.x + direction.x * 0.1; // Adjust speed here
                let newY = oldPosition.y + direction.y * 0.1; // Adjust speed here

                // Bounce off the walls
                if (newX > 100 || newX < 0) {
                    setDirection(oldDirection => ({ ...oldDirection, x: -oldDirection.x }));
                    newX = Math.max(0, Math.min(100, newX)); // Keep within bounds
                }
                if (newY > 100 || newY < 0) {
                    setDirection(oldDirection => ({ ...oldDirection, y: -oldDirection.y }));
                    newY = Math.max(0, Math.min(100, newY)); // Keep within bounds
                }

                return { x: newX, y: newY };
            });
        }, 20); // Adjust interval for smoother animation

        return () => clearInterval(intervalId);
    }, [direction]);

    return (
        <div
            className="floating-shape"
            style={{
                position: 'absolute',
                top: `${position.y}%`,
                left: `${position.x}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                borderRadius: '50%',
                opacity: 0.6,
                animationDuration: `${animationDuration}s`,
            }}
        />
    );
};

const EBookstoreSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const numberOfShapes = 15;

    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-purple-200 flex flex-col justify-center items-center py-10 px-4 md:px-8 relative overflow-hidden">
            {/* Floating Shapes Background */}
            <div className="absolute inset-0 w-full h-full">
                {Array.from({ length: numberOfShapes }).map((_, index) => (
                    <FloatingShape
                        key={index}
                        color={`hsl(${Math.random() * 360}, 50%, 70%)`} // Random pastel colors
                        size={Math.random() * 30 + 10} // Random size
                        animationDuration={Math.random() * 5 + 5} // Random animation duration
                    />
                ))}
            </div>

            {/* Decorative Shapes on Borders */}
            {/* Make the border shapes less prominent or remove them */}
            {/*  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-100 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-50 rounded-full transform -translate-x-1/2 translate-y-1/2"></div> */}

            {/* SVG Shapes on Borders */}
            {/*  <svg className="absolute top-1/4 left-0 w-32 h-32 text-blue-200 opacity-50 transform -translate-x-1/2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
            <svg className="absolute bottom-1/4 right-0 w-32 h-32 text-purple-200 opacity-50 transform translate-x-1/2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
            <svg className="absolute top-1/3 right-0 w-24 h-24 text-pink-100 opacity-50 transform translate-x-1/2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
            <svg className="absolute bottom-1/3 left-0 w-24 h-24 text-purple-100 opacity-50 transform -translate-x-1/2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            </svg> */}

            <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Browse Categories</h2>
                <div className="overflow-x-auto md:overflow-visible pb-4 w-full">
                    <div className="flex md:flex-wrap md:justify-center gap-3 min-w-max md:min-w-0">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap text-base flex items-center gap-2 ${
                                    selectedCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-blue-50 hover:bg-blue-600 hover:text-white'
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {/* Conditionally set icon color */}
                                {React.cloneElement(categoryIcons[category], {
                                    className: `w-6 h-6 ${
                                        selectedCategory === category
                                            ? 'text-white'
                                            : 'text-blue-600'
                                    }`,
                                })}
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-8 w-full max-w-2xl">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg w-full text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-white rounded-full shadow-md">
                                {/* Keep the icon blue in the description card */}
                                {React.cloneElement(categoryIcons[selectedCategory], {
                                    className: 'w-6 h-6 text-blue-600',
                                })}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-blue-900">
                            {selectedCategory}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            {categoryData[selectedCategory].description}
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="text-base font-semibold text-blue-900">
                                📚 {categoryData[selectedCategory].stats}
                            </div>
                            <img
                                src={categoryData[selectedCategory].image}
                                alt={selectedCategory}
                                className="w-32 h-32 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EBookstoreSection;
