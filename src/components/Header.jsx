import { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth'
        });
        setMobileMenuOpen(false); // Fermer le menu mobile après navigation
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-6">
                <nav className="py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo SVG à gauche */}
                        <div className="flex-shrink-0">
                            <svg 
                                className="w-10 h-10 sm:w-12 sm:h-12 text-warm-brown-700 hover:text-warm-brown-800 transition-colors duration-300 cursor-pointer" 
                                onClick={() => scrollToSection('accueil')}
                                viewBox="0 0 1856.08 1856.08" 
                                fill="currentColor"
                            >
                                <path d="M1459.13,928.04c-48.98,177.31-270.85,63.27-361.83,149.41-55.24,79.72,18.94,210.56,17.7,276.26-3.28,173.85-115.44,208.18-270.6,205.6-129.29-3.46-282.6,6.58-388.71-77.93-117.12-105.41-81.53-345.71-79.86-498.38,1.03-93.76-.27-188.07,1.02-281.39,1.59-68.08,7.24-160.55,76.55-191.01,30.84-13.27,131.35-18.24,168.31,20.31,82.92,86.48,27.99,304.06,25,445.54-2.27,107.46-23.67,270.99,39.49,344.2,47.97,58.2,119.6,22.75,149.66-39.43.74-1.54,1.51-3.21,2.28-4.97,12.75-29.19,18.67-60.84,19.33-92.68,2.51-121.3-4.28-243.2-2.08-364.77,9.22-286.69,131.06-524.32,333.55-522.13,79.59.86,153.13,41.22,202.59,103.57,65.94,83.13,134.68,284.95,67.6,527.81ZM1202.47,879.87c59.47-61.07,55.42-265.02,39.04-350.91-7.43-37.93-34.5-116.67-77.58-71.61-55.92,70.69-92.31,302.3-44.43,388.35,41.89,75.28,82.95,34.17,82.96,34.16Z"/>
                            </svg>
                        </div>

                        {/* Navigation desktop */}
                        <div className="hidden md:flex space-x-8">
                            <button onClick={() => scrollToSection('accueil')} className="nav-link whitespace-nowrap">Accueil</button>
                            <button onClick={() => scrollToSection('a-propos')} className="nav-link whitespace-nowrap">À propos</button>
                            <button onClick={() => scrollToSection('portfolio')} className="nav-link whitespace-nowrap">Portfolio</button>
                        </div>

                        {/* Menu mobile hamburger */}
                        <div className="md:hidden">
                            <button 
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-warm-brown-800 p-2 rounded-lg hover:bg-warm-brown-100 transition-colors duration-300"
                                aria-label="Menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Menu mobile déroulant */}
                    {mobileMenuOpen && (
                        <div className="md:hidden mt-4 py-4 border-t border-warm-brown-200">
                            <div className="flex flex-col space-y-4">
                                <button 
                                    onClick={() => scrollToSection('accueil')} 
                                    className="text-warm-brown-800 hover:text-warm-brown-600 transition-colors duration-300 text-left py-2"
                                >
                                    Accueil
                                </button>
                                <button 
                                    onClick={() => scrollToSection('a-propos')} 
                                    className="text-warm-brown-800 hover:text-warm-brown-600 transition-colors duration-300 text-left py-2"
                                >
                                    À propos
                                </button>
                                <button 
                                    onClick={() => scrollToSection('portfolio')} 
                                    className="text-warm-brown-800 hover:text-warm-brown-600 transition-colors duration-300 text-left py-2"
                                >
                                    Portfolio
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
