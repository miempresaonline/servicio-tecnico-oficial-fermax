import { AlertTriangle, Speaker, Lock, Zap } from 'lucide-react';

const problems = [
    {
        id: 1,
        title: "Pantalla Azul / Ausencia de Imagen",
        description: "Análisis exacto de módulos de cámara VEO y VEO-XS. Corregimos errores de señal de vídeo y corriente.",
        icon: <Zap className="w-10 h-10 text-yellow-500" />,
    },
    {
        id: 2,
        title: "Problema de Sonido / Zumbidos",
        description: "Restauración de grupos fónicos, micrófonos y cableado en mal estado. Suprimimos ruidos de acople y distorsión.",
        icon: <Speaker className="w-10 h-10 text-blue-500" />,
    },
    {
        id: 3,
        title: "Fallo de Apertura",
        description: "Cambio de abrepuertas y fuentes de alimentación (PSU). Comprobación de bajadas de tensión en la red.",
        icon: <Lock className="w-10 h-10 text-red-500" />,
    },
    {
        id: 4,
        title: "Sistema Obsoleto",
        description: "Actualización de equipos analógicos 4+N a tecnología digital DUOX PLUS 2 hilos. Reutilizando el cableado actual.",
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
                        Evaluación Profesional de Fallos
                    </h2>
                    <p className="text-lg text-gray-600">
                        Detectamos la incidencia velozmente empleando vocabulario técnico exacto e instrumentos de análisis oficiales.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((problem) => (
                        <div key={problem.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center group">
                            <div className="mb-6 p-4 rounded-full bg-gray-50 group-hover:bg-pink-50 transition-colors">
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
