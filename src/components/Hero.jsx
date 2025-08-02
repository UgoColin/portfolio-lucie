import { useEffect, useRef } from 'react';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-0">
            {/* Background avec motif subtil */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-beige-100">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-warm-brown-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-beige-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-cream-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            <div ref={heroRef} className="container mx-auto px-4 sm:px-6 text-center z-10 opacity-0">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-warm-brown-800 mb-4 sm:mb-6 leading-tight">
                        Lucie
                        <span className="block text-2xl sm:text-4xl md:text-5xl text-warm-brown-600 font-light mt-1 sm:mt-2">
                            Directrice Artistique
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-warm-brown-600 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4 sm:px-0">
                        Créatrice passionnée spécialisée dans l'identité visuelle,
                        <span className="hidden sm:inline"><br /></span> le design graphique et la communication.
                    </p>

                    <div className="flex justify-center px-4 sm:px-0">
                        <button
                            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-warm-brown-700 text-cream-50 rounded-full font-medium transition-all duration-300 hover:bg-warm-brown-800 hover:shadow-xl hover:scale-105 cursor-pointer flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base"
                        >
                            <span className="relative z-10">Découvrir mon travail</span>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-r from-warm-brown-600 to-warm-brown-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                </div>
            </div>
        </section>
    );
};

export default Hero;
