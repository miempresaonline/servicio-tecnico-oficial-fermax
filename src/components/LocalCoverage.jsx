import { MapPin } from 'lucide-react';

const coverageZones = [
    {
        name: "Provincia de Valencia",
        locations: ["Valencia Capital", "Picassent", "Torrent", "Paiporta", "Silla", "Alcàsser", "Catarroja", "Albal", "Beniparrell", "Poblaciones de toda la provincia"],
        color: "bg-blue-100 text-blue-800",
        borderColor: "border-blue-200"
    }
];

export default function LocalCoverage() {
    return (
        <section className="py-20 bg-gray-50" id="cobertura">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Zonas de Cobertura y Desplazamiento
                    </h2>
                    <p className="text-lg text-gray-600">
                        Prestamos servicio técnico oficial en toda la provincia de Valencia.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm">
                    <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-8 bg-fermax/10 text-fermax">
                        Provincia de Valencia
                    </div>

                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8">
                        {[
                            "Valencia Capital", "Picassent", "Torrent", "Paiporta",
                            "Silla", "Alcàsser", "Catarroja", "Albal",
                            "Beniparrell", "Alfafar", "Sedaví", "Massanassa",
                            "Benetússer", "Paterna", "Manises", "Xirivella",
                            "Mislata", "Aldaia", "Alaquàs", "Quart de Poblet",
                            "Burjassot", "Godella", "Rocafort", "Moncada",
                            "Alboraya", "Tavernes Blanques", "Almàssera", "Meliana"
                        ].map((loc, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                                <MapPin className="w-4 h-4 text-fermax/60 flex-shrink-0" />
                                <span>{loc}</span>
                            </li>
                        ))}
                        <li className="flex items-center gap-2 text-fermax font-semibold italic">
                            <MapPin className="w-4 h-4" />
                            <span>Y toda la provincia...</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
