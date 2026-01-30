import { Wifi, PenTool, Box } from 'lucide-react';

export default function ProductShowcase() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Tecnología y Renovación
                    </h2>
                    <p className="text-lg text-gray-600">
                        Descubre las últimas soluciones Fermax que instalamos para modernizar tu hogar.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Kits */}
                    <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-fermax/10 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src="/img/kit-fermax.jpg"
                                alt="Kit Videoportero Fermax DUOX Renovación"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 bg-white relative z-20">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-fermax">
                                <Box className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Kits de Renovación</h3>
                            <p className="text-gray-600 text-sm">
                                Sustituimos tu viejo telefonillo por un videoportero de última generación sin cambiar el cableado. Opciones con WiFi incluido.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: App Blue */}
                    <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-fermax/10 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src="/img/blue-app.jpg"
                                alt="App Blue Fermax Desvío de Llamada a Móvil"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 bg-white relative z-20">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-fermax">
                                <Wifi className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Conectividad Total</h3>
                            <p className="text-gray-600 text-sm">
                                Contesta a la llamada de tu videoportero desde cualquier lugar del mundo con la App BLUE de Fermax. Seguridad en tu bolsillo.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Monitor Detail */}
                    <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-fermax/10 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src="/img/monitor-detail.jpg"
                                alt="Detalle Monitor Fermax VEO Alta Definición"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 bg-white relative z-20">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-fermax">
                                <PenTool className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Diseño y Calidad</h3>
                            <p className="text-gray-600 text-sm">
                                Monitores extraplanos con pantallas de alta resolución. Materiales duraderos y estética minimalista que encaja en cualquier vivienda.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
