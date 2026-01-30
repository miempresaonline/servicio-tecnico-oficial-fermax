import { CheckCircle2 } from 'lucide-react';

export default function AuthoritySection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    {/* Product/Stock Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-white flex items-center justify-center">
                        <img
                            src="/img/duox-product.jpg"
                            alt="Stock Repuestos Originales Fermax Valencia"
                            className="w-full h-full object-contain p-4"
                        />
                    </div>

                    <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg transform rotate-3">
                        <span className="block text-3xl font-bold">5 Años</span>
                        <span className="text-xs uppercase font-bold tracking-wider">de Cobertura en DUOX PLUS</span>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        ¿Motivos para seleccionar un Técnico Acreditado?
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle2 className="w-6 h-6 text-fermax" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Piezas Genuinas Aseguradas</h3>
                                <p className="text-gray-600">
                                    Únicamente empleamos componentes auténticos Fermax. Esto garantiza la total integración y prolonga la duración de su sistema.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle2 className="w-6 h-6 text-fermax" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Capacitación Técnica Reciente</h3>
                                <p className="text-gray-600">
                                    Dominamos a la perfección los sistemas más novedosos como DUOX PLUS y MEET. No improvisamos en su instalación, actuamos con certeza.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle2 className="w-6 h-6 text-fermax" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Formalidad y Seguridad</h3>
                                <p className="text-gray-600">
                                    Somos una compañía de Picassent con más de 15 años de historia. "Empresa Clasificada" y Socio Oficial.
                                </p>
                            </div>
                        </div>
                    </div>

                    <a href="#contacto" className="inline-block bg-fermax text-white font-bold py-3 px-8 rounded-lg hover:bg-fermax-light transition-colors shadow-md">
                        Solicitar Presupuesto Sin Compromiso
                    </a>
                </div>
            </div>
        </section>
    );
}
