import { Phone, MessageCircle } from 'lucide-react';

export default function StickyContactBar() {
    return (
        <nav
            aria-label="Barra de contacto urgente"
            className="fixed bottom-0 left-0 w-full bg-[#25D366] text-white z-50 flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden h-[60px]"
        >
            <a
                href="https://wa.me/34659767258"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-colors"
                aria-label="Contactar por WhatsApp ahora"
            >
                <MessageCircle className="h-7 w-7" aria-hidden="true" />
                <span className="text-sm font-bold uppercase tracking-wide">Chatea por WhatsApp</span>
            </a>
        </nav>
    );
}
