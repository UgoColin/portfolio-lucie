const Footer = () => {
    return (
        <footer className="bg-warm-brown-800 text-cream-50 py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Lucie</h3>
                        <p className="text-cream-200 text-sm sm:text-base">Directrice Artistique</p>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
                        <a href="#accueil" className="text-cream-200 hover:text-cream-50 transition-colors duration-300 text-sm sm:text-base">
                            Accueil
                        </a>
                        <a href="#a-propos" className="text-cream-200 hover:text-cream-50 transition-colors duration-300 text-sm sm:text-base">
                            À propos
                        </a>
                        <a href="#portfolio" className="text-cream-200 hover:text-cream-50 transition-colors duration-300 text-sm sm:text-base">
                            Portfolio
                        </a>
                    </div>
                </div>

                <div className="border-t border-warm-brown-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
                    <p className="text-cream-200 text-xs sm:text-sm">
                        © 2025 Lucie. Tous droits réservés. | Créé avec ❤️ et React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
