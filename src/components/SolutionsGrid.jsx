import { AlertTriangle, Speaker, Lock, Zap } from 'lucide-react';

const problems = [
    {
        id: 1,
        title: "Pantalla Azul / Sin Imagen",
        description: "Diagnóstico preciso de módulos de cámara VEO y VEO-XS. Solucionamos fallos de señal de vídeo y alimentación.",
        icon: <Zap className="w-10 h-10 text-yellow-500" />,
    },
    {
        id: 2,
        title: "Fallo de Audio / Zumbidos",
        description: "Reparación de grupos fónicos, micrófonos y cableado deteriorado. Eliminamos ruidos de acople y distorsión.",
        icon: <Speaker className="w-10 h-10 text-blue-500" />,
    },
    {
        id: 3,
        title: "No Abre la Puerta",
        description: "Sustitución de abrepuertas y fuentes de alimentación (PSU). Verificación de caídas de tensión en la línea.",
        icon: <Lock className="w-10 h-10 text-red-500" />,
    },
    {
        id: 4,
        title: "Instalación Antigua",
        description: "Modernización de sistemas analógicos 4+N a tecnología digital DUOX PLUS 2 hilos. Aprovechando cableado existente.",
        icon: <AlertTriangle className="w-10 h-10 text-orange-500" />,
    }
];

export default function SolutionsGrid() {
    return (
        <section className="py-20 bg-gray-50" id="servicios">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <img
                        src="/img/logo-official.jpg"
                        alt="Servicio Técnico Oficial Fermax"
                        className="h-28 mx-auto mb-6 object-contain"
                    />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Diagnóstico Experto de Averías
                    </h2>
                    <p className="text-lg text-gray-600">
                        Identificamos el problema rápidamente utilizando terminología técnica precisa y herramientas de diagnóstico oficiales.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((problem) => (
                        <div key={problem.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center group">
                            <div className="mb-6 p-4 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
