import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show prompt after 5 seconds if not dismissed
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShowPrompt(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPrompt(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="floating-whatsapp-container">
      {/* Prompt Bubble */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute bottom-20 right-0 w-72 p-4 rounded-2xl bg-white shadow-2xl"
          >
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center hover:bg-zinc-300 transition-colors"
              data-testid="whatsapp-prompt-dismiss"
            >
              <X className="w-3 h-3 text-zinc-600" />
            </button>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="text-zinc-900 font-semibold text-sm">Need help scaling?</p>
                <p className="text-zinc-600 text-xs mt-1">
                  Chat with us now for a free growth consultation. We typically reply in minutes!
                </p>
              </div>
            </div>
            
            {/* Arrow pointing to button */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.a
        href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%27d%20like%20to%20discuss%20my%20growth%20goals."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-[#25D366] text-white font-semibold pl-5 pr-6 py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#1ebe5d] hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:scale-105"
        data-testid="floating-whatsapp-button"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setShowPrompt(false)}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full">
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        </span>
        
        <svg viewBox="0 0 24 24" className="w-6 h-6 relative z-10" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        
        <span className="relative z-10 text-sm whitespace-nowrap">Chat with us</span>
        
        {/* Online indicator */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full border-2 border-[#25D366]">
          <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse"></span>
        </span>
      </motion.a>
    </div>
  );
}
