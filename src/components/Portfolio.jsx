import { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects.js';
import Carousel from './Carousel.jsx';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const portfolioRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            },
            { 
                threshold: 0.05, // Seuil plus bas pour fonctionner avec tous les zooms
                rootMargin: '50px' // Marge pour déclencher l'animation plus tôt
            }
        );

        if (portfolioRef.current) {
            observer.observe(portfolioRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Fermer la popup avec Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setSelectedProject(null);
            }
        };

        if (selectedProject) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <>
            <section id="portfolio" className="py-16 sm:py-20 bg-gradient-to-b from-beige-50 to-cream-100">
                <div className="container mx-auto px-4 sm:px-6">
                    <div ref={portfolioRef} className="opacity-0">
                        <div className="text-center mb-16 sm:mb-20">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-warm-brown-800 mb-4 sm:mb-6">
                                Portfolio
                            </h2>
                            <div className="w-24 h-1 bg-warm-brown-600 mx-auto mb-6 sm:mb-8"></div>
                            <p className="text-lg sm:text-xl text-warm-brown-600 max-w-2xl mx-auto px-4 sm:px-0">
                                Découvrez une sélection de mes réalisations :
                            </p>
                        </div>

                        {/* Projets en ligne alternée */}
                        <div className="max-w-8xl mx-auto space-y-20 sm:space-y-32">
                            {projects.map((project, index) => (
                                <ProjectRow
                                    key={project.id}
                                    project={project}
                                    index={index}
                                    isReversed={index % 2 !== 0}
                                    onImageClick={() => setSelectedProject(project)}
                                />
                            ))}
                        </div>

                        {/* Carrousel des réalisations */}
                        <Carousel />
                    </div>
                </div>
            </section>

            {/* Popup Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
};

const ProjectRow = ({ project, index, isReversed, onImageClick }) => {
    const rowRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Délai progressif pour un effet en cascade
                    setTimeout(() => {
                        entry.target.classList.add('animate-fade-in-up');
                    }, index * 100); // Délai de 100ms entre chaque projet
                }
            },
            { 
                threshold: 0.05, // Seuil plus bas pour fonctionner avec tous les zooms
                rootMargin: '100px' // Marge plus importante pour les projets individuels
            }
        );

        if (rowRef.current) {
            observer.observe(rowRef.current);
        }

        return () => observer.disconnect();
    }, [index]);

    return (
        <div
            ref={rowRef}
            className={`grid md:grid-cols-5 gap-8 sm:gap-12 md:gap-16 items-center opacity-0 ${isReversed ? 'md:grid-flow-col-dense' : ''
                }`}
        >
            {/* Image - 3 colonnes */}
            <div className={`md:col-span-3 ${isReversed ? 'md:col-start-3' : ''}`}>
                <div
                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                    onClick={onImageClick}
                >
                    {/* Image du projet ou placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-warm-brown-100 to-beige-200 flex items-center justify-center overflow-hidden">
                        {project.image && project.image !== "/projects/placeholder.jpg" ? (
                            <div
                                className="w-full h-full bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url("${project.image}")` }}
                                role="img"
                                aria-label={project.title}
                            >
                            </div>
                        ) : (
                            <div className="text-center text-warm-brown-500">
                                <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                </svg>
                                <p className="opacity-75">Image du projet</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Contenu texte - 2 colonnes */}
            <div className={`md:col-span-2 space-y-4 sm:space-y-6 ${isReversed ? 'md:col-start-1' : ''}`}>
                <div>
                    <div className="mb-2 sm:mb-3">
                        <span className="px-2 sm:px-3 py-1 bg-warm-brown-100 text-warm-brown-700 text-xs sm:text-sm font-medium rounded-full">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-warm-brown-800 mb-3 sm:mb-4 leading-tight">
                        {project.title}
                    </h3>
                    <div className="w-12 sm:w-16 h-1 bg-warm-brown-600 mb-4 sm:mb-6"></div>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-warm-brown-600 leading-relaxed">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-3 sm:pt-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 sm:px-4 py-1 sm:py-2 bg-beige-100 text-warm-brown-600 text-xs sm:text-sm font-medium rounded-full hover:bg-beige-200 transition-colors duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Bouton voir plus */}
                <div className="pt-4 sm:pt-6">
                    <button
                        onClick={onImageClick}
                        className="group inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-warm-brown-100 hover:bg-warm-brown-200 text-warm-brown-800 font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer text-sm sm:text-base"
                    >
                        <span>Voir le projet complet</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);
    
    // Créer le tableau de toutes les images (preview + additionnelles)
    const allImages = [project.image, ...(project.additionalImages || [])];
    const totalImages = allImages.length;

    // Navigation vers l'image précédente
    const goToPrevious = (e) => {
        e.stopPropagation();
        setImageLoading(true);
        setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
    };

    // Navigation vers l'image suivante
    const goToNext = (e) => {
        e.stopPropagation();
        setImageLoading(true);
        setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
    };

    // Gérer le chargement de l'image
    const handleImageLoad = () => {
        setImageLoading(false);
    };

    const handleImageError = () => {
        setImageLoading(false);
    };

    // Reset loading state when modal opens
    useEffect(() => {
        setImageLoading(true);
    }, [project]);

    // Reset loading state when image changes
    useEffect(() => {
        setImageLoading(true);
    }, [currentImageIndex]);

    // Navigation avec les touches du clavier
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                goToPrevious(e);
            } else if (e.key === 'ArrowRight') {
                goToNext(e);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const currentImage = allImages[currentImageIndex];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            {/* Backdrop - Clique pour fermer */}
            <div
                className="absolute inset-0 bg-black/90 cursor-pointer"
                onClick={onClose}
            ></div>

            {/* Conteneur principal avec contrôles externes */}
            <div className="relative w-full h-full max-w-6xl max-h-full flex flex-col items-center justify-center">
                {/* Bouton fermer - En haut à droite de la zone */}
                <button
                    onClick={onClose}
                    className="modal-control absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10 shadow-lg"
                    aria-label="Fermer"
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Container pour l'image et les flèches latérales */}
                <div className="flex items-center justify-center w-full flex-1 gap-2 sm:gap-4">
                    {/* Flèche gauche - à côté de l'image */}
                    {totalImages > 1 && (
                        <button
                            onClick={goToPrevious}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10 border border-black/30 flex-shrink-0 shadow-lg"
                            aria-label="Image précédente"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Image actuelle */}
                    <div className="relative flex items-center justify-center max-w-full max-h-full">
                        {/* Indicateur de chargement */}
                        {imageLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/20 backdrop-blur-sm rounded-lg z-20">
                                <div className="flex flex-col items-center">
                                    {/* Spinner de chargement */}
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white/70"></div>
                                    <p className="text-white/70 text-sm mt-3">Chargement...</p>
                                </div>
                            </div>
                        )}

                        {currentImage && currentImage !== "/projects/placeholder.jpg" ? (
                            <img
                                src={currentImage}
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                className={`max-w-[60vw] sm:max-w-[70vw] max-h-[60vh] sm:max-h-[70vh] object-contain transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                                onLoad={handleImageLoad}
                                onError={handleImageError}
                            />
                        ) : null}
                        
                        {/* Placeholder si image ne charge pas */}
                        <div className={`flex items-center justify-center w-48 h-48 sm:w-96 sm:h-96 text-center text-white/70 ${currentImage && currentImage !== "/projects/placeholder.jpg" ? 'hidden' : ''}`}>
                            <div>
                                <svg className="w-12 h-12 sm:w-24 sm:h-24 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                </svg>
                                <p className="opacity-75 text-sm sm:text-base">Image du projet</p>
                            </div>
                        </div>
                    </div>                    {/* Flèche droite - à côté de l'image */}
                    {totalImages > 1 && (
                        <button
                            onClick={goToNext}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10 border border-black/30 flex-shrink-0 shadow-lg"
                            aria-label="Image suivante"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Compteur d'images - en bas de la zone */}
                {totalImages > 1 && (
                    <div className="mt-3 sm:mt-4 bg-black/20 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm backdrop-blur-sm border border-black/30 shadow-lg">
                        {currentImageIndex + 1} / {totalImages}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
