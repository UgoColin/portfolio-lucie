import { useEffect, useRef } from 'react';

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            },
            { threshold: 0.1 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skills = [
        "Identité visuelle", "Logo design", "Branding",
        "UI/UX design", "Print design", "Packaging",
        "Motion design", "Typographie", "Photographie", "Édition"
    ];

    return (
        <section id="a-propos" className="py-16 sm:py-20 bg-gradient-to-b from-cream-50 to-beige-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div ref={aboutRef} className="max-w-6xl mx-auto opacity-0">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-warm-brown-800 mb-4 sm:mb-6">
                            À propos
                        </h2>
                        <div className="w-24 h-1 bg-warm-brown-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
                        <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
                            <p className="text-lg text-warm-brown-700 leading-relaxed">
                                Depuis cinq ans, je me forme et j’explore le design graphique
                                sous toutes ses facettes, en développant une approche à la fois
                                créative et stratégique.
                            </p>

                            <p className="text-lg text-warm-brown-700 leading-relaxed">
                                Au fil de mes projets, j’ai affiné mon regard, <br />expérimenté différents
                                supports et appris à transformer <br />des idées en concepts visuels clairs et impactants.

                            </p>

                            <p className="text-lg text-warm-brown-700 leading-relaxed">
                                Aujourd’hui, je continue d’enrichir mon univers en alliant curiosité,
                                sensibilité esthétique et envie de collaborer <br />sur des projets qui ont du sens.
                            </p>
                        </div>

                        <div className="relative order-1 md:order-2">
                            {/* Photo de profil */}
                            <div className="w-64 sm:w-80 h-80 sm:h-96 bg-gradient-to-br from-warm-brown-200 to-beige-200 rounded-2xl mx-auto relative overflow-hidden shadow-2xl">
                                <div 
                                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                                    style={{ backgroundImage: 'url("pp.jpg")' }}
                                    role="img"
                                    aria-label="Lucie - Graphiste & Designer"
                                >
                                </div>
                                {/* Fallback placeholder */}
                                <div className="absolute inset-0 hidden items-center justify-center">
                                    <div className="text-center text-warm-brown-600">
                                        <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                        <p className="text-sm opacity-75">Photo de profil</p>
                                    </div>
                                </div>
                                {/* Effet de superposition décoratif */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-warm-brown-300 rounded-full opacity-20"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-beige-300 rounded-full opacity-20"></div>
                            </div>
                        </div>
                    </div>

                    {/* Compétences */}
                    <div className="mt-16 sm:mt-20">
                        <h3 className="text-2xl sm:text-3xl font-medium text-warm-brown-800 text-center mb-8 sm:mb-12">
                            Mes spécialités
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                            {skills.map((skill, index) => (
                                <span
                                    key={skill}
                                    className="px-4 sm:px-6 py-2 sm:py-3 bg-white/80 text-warm-brown-700 rounded-full text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
