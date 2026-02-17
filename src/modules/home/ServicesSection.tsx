import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
const services = [
    {
        icon: '/images/service1.png',
        title: (<>Identity & <br />Government Services</>),
        description: 'GED preparation and software assistance'
    },
    {
        icon: '/images/service2.png',
        title: 'Document & Administrative Support',
        description: 'GED preparation and software assistance'
    },
    {
        icon: '/images/service3.png',
        title: (<>Testing & <br />Credentials</>),
        description: 'GED preparation and software assistance'
    },
    {
        icon: '/images/service4.png',
        title: (<>Space & Facility <br />Rentals</>),
        description: 'GED preparation and software assistance'
    }
];
const ServicesSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    };

    const getVisibleSlides = () => {
        const slides = [];
        for (let i = 0; i < 4; i++) {
            slides.push(services[(currentSlide + i) % services.length]);
        }
        return slides;
    };
    return (
        <div className="bg-gradient-to-b from-[#f8cece] via-pink-200 to-pink-100 py-18 px-4">

            <h2 className="text-4xl  font-bold text-black text-center mb-12">
                Our Services
            </h2>

            <div className="relative flex items-center justify-between gap-6">
                <button
                    onClick={prevSlide}
                    className="absolute -left-6 md:left-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors shadow-lg"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="w-full px-15">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {getVisibleSlides().map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl px-4 py-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                            >
                                <Image
                                    src={service.icon}
                                    alt="Secure Payment"
                                    width={84}
                                    height={84}
                                    priority
                                />
                                <p className="text-xl font-bold text-black my-3 min-h-[70px] flex items-center justify-center">
                                    {service.title}
                                </p>
                                <p className="text-text text-lg mb-5 flex-grow">
                                    {service.description}
                                </p>
                                <a href="#" className="text-primary text-base font-medium flex items-center gap-1 ">
                                    Learn More
                                    <span className="text-lg">›</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute -right-6 md:right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors shadow-lg"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>


        </div>
    )
}

export default ServicesSection