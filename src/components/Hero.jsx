import { motion } from 'framer-motion';
import { Phone, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative bg-fermax text-white overflow-hidden">
            {/* Background patterned overlay could go here */}
            <div className="absolute inset-0 bg-gradient-to-r from-fermax to-fermax-light opacity-90 z-0"></div>

            <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                        <ShieldCheck className="w-5 h-5 text-green-400" />
                        <span className="text-sm font-semibold tracking-wide">Asistencia Técnica Homologada</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                        Servicio Técnico Oficial <span className="text-pink-200">Fermax Valencia</span>
                    </h1>

                    <p className="text-lg md:text-xl text-pink-100 max-w-lg leading-relaxed">
                        ¿Problemas con tu videoportero? Realizamos reparaciones en el mismo día utilizando piezas genuinas.
                        Trato directo, sin intermediarios.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="https://wa.me/34659767258"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-lg transform transition-all hover:scale-105 shadow-lg shadow-green-900/20"
                        >
                            <Phone className="w-6 h-6" />
                            Comunícate por WhatsApp
                        </a>

                        <div className="flex items-center gap-3 text-sm font-medium bg-fermax-dark/50 px-6 py-4 rounded-lg border border-white/10">
                            <Clock className="w-5 h-5 text-yellow-400" />
                            <span>Contestamos en &lt; 1.5 horas</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Main Hero Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video bg-gray-100">
                        <img
                            src="/img/hero-app.jpg"
                            alt="Técnico oficial Video Electric reparando videoportero Fermax en Valencia"
                            className="w-full h-full object-cover"
                            fetchPriority="high"
                        />
                    </div>

                    {/* Float Element: 15 Years Experience */}
                    <div className="absolute -bottom-6 -left-6 bg-white text-fermax p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                        <p className="text-4xl font-bold mb-1">15+</p>
                        <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">Más de una década y media arreglando equipos Fermax</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
