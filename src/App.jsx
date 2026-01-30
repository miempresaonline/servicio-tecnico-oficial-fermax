import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEOHead';
import Hero from './components/Hero';
import SolutionsGrid from './components/SolutionsGrid';
import AuthoritySection from './components/AuthoritySection';
import LocalCoverage from './components/LocalCoverage';
import ProductShowcase from './components/ProductShowcase';
import StickyContactBar from './components/StickyContactBar';

function App() {
    return (
        <HelmetProvider>
            <div className="min-h-screen bg-white font-sans text-gray-900">
                <SEOHead />

                {/* Navigation placeholder could go here */}

                <main>
                    <Hero />
                    <SolutionsGrid />
                    <AuthoritySection />
                    <LocalCoverage />
                    <ProductShowcase />

                    {/* Simple Contact Footer Section */}
                    <section className="bg-fermax text-white py-16" id="contacto">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-3xl font-bold mb-8">¿Necesitas Reparación Urgente?</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto">
                                No dejes que una avería comprometa la seguridad de tu hogar o comunidad.
                            </p>
                            <a
                                href="https://wa.me/34659767258"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#25D366] text-white font-bold py-4 px-12 rounded-lg text-lg hover:bg-[#128C7E] transition-colors shadow-lg"
                            >
                                WhatsApp: 659 76 72 58
                            </a>
                            <p className="mt-8 text-sm text-gray-400">
                                Video Electric Valencia S.L.U. - C/ Mestre Ramírez 3, Picassent.
                            </p>
                        </div>
                    </section>
                </main>

                <StickyContactBar />
            </div>
        </HelmetProvider>
    );
}

export default App;
