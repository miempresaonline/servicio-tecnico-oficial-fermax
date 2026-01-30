import { Helmet } from 'react-helmet-async';

export default function SEOHead() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Electrician", "ProfessionalService"],
        "name": "Video Electric Valencia - Asistencia Técnica Fermax Homologada",
        "image": "https://videoelectricvalencia.es/fermax-van.jpg", // Placeholder
        "telephone": "+34659767258",
        "url": "https://videoelectricvalencia.es",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Carrer del Mestre Ramírez, 3, local 2",
            "addressLocality": "Picassent",
            "addressRegion": "Valencia",
            "postalCode": "46220",
            "addressCountry": "ES"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.3626,
            "longitude": -0.4590
        },
        "areaServed": [
            { "@type": "City", "name": "Valencia" },
            { "@type": "City", "name": "Picassent" },
            { "@type": "City", "name": "Torrent" },
            { "@type": "City", "name": "Paiporta" },
            { "@type": "City", "name": "Silla" },
            { "@type": "City", "name": "Catarroja" },
            { "@type": "City", "name": "L'Horta Sud" }
        ],
        "priceRange": "€€",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59",
                "description": "Servicio de Urgencia 24h disponible bajo demanda"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios Fermax",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Arreglo de Videoporteros Fermax"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Montaje de Control de Accesos DUOX PLUS"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Conservación de Fincas"
                    }
                }
            ]
        }
    };

    return (
        <Helmet>
            <title>Asistencia Técnica Fermax Valencia | Video Electric | &lt; 1.5h</title>
            <meta name="description" content="¿Fallos en tu equipo Fermax? Asistencia Homologada en Valencia y Picassent. Arreglos diarios con piezas genuinas. ¡Contacta ahora! Cobertura 5 años." />
            <link rel="canonical" href="https://videoelectricvalencia.es/" />
            <meta name="robots" content="index, follow" />
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
}
