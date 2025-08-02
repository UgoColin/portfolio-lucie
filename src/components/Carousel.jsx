import { useRef, useEffect, useState } from 'react';
import { carouselImages } from '../data/carousel.js';

const Carousel = () => {
    const carouselRef = useRef(null);
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            },
            { 
                threshold: 0.05,
                rootMargin: '50px'
            }
        );

        if (carouselRef.current) {
            observer.observe(carouselRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        containerRef.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div ref={carouselRef} className="opacity-0 mt-16 sm:mt-20">
            <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-warm-brown-800 mb-3 sm:mb-4">
                    Galerie
                </h3>
                <div className="w-16 h-1 bg-warm-brown-600 mx-auto mb-4 sm:mb-6"></div>
                <p className="text-base sm:text-lg text-warm-brown-600 max-w-xl mx-auto px-4 sm:px-0">
                    Découvrez une sélection étendue de mes créations
                </p>
            </div>

            <div 
                ref={containerRef}
                className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide cursor-grab select-none pb-4 px-4 sm:px-0"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitScrollbar: { display: 'none' }
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {carouselImages.map((image, index) => (
                    <div 
                        key={image.id}
                        className="flex-shrink-0 w-64 sm:w-80 h-48 sm:h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        style={{
                            background: 'linear-gradient(135deg, var(--beige-100) 0%, var(--cream-200) 100%)'
                        }}
                    >
                        <img 
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover pointer-events-none"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>

            <div className="text-center mt-6 sm:mt-8">
                <p className="text-xs sm:text-sm text-warm-brown-500 italic px-4 sm:px-0">
                    Glissez pour naviguer dans la galerie
                </p>
            </div>
        </div>
    );
};

export default Carousel;
