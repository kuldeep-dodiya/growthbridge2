import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, Clock, Video, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const CALENDLY_URL = "https://calendly.com/growthbriidge/30min";

export default function CalendlyModal({ open, onOpenChange }) {
  // Load Calendly widget script
  useEffect(() => {
    if (open) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] bg-[#0A0A0C] border-white/10 text-white p-0 overflow-hidden max-h-[90vh]">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Book a Strategy Call
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <p className="text-zinc-400 mb-6">
              Schedule a free 30-minute call to discuss your growth goals and see if we're a good fit.
            </p>
            
            {/* Call Details */}
            <div className="grid grid-cols-3 gap-4 py-4 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-white font-medium">30 min</p>
                <p className="text-xs text-zinc-500">Duration</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-2">
                  <Video className="w-6 h-6" />
                </div>
                <p className="text-white font-medium">Video Call</p>
                <p className="text-xs text-zinc-500">Google Meet</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-6 h-6" />
                </div>
                <p className="text-white font-medium">Free</p>
                <p className="text-xs text-zinc-500">No obligation</p>
              </div>
            </div>

            {/* Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget rounded-xl overflow-hidden" 
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0a0a0c&text_color=ffffff&primary_color=3b82f6`}
              style={{ minWidth: '320px', height: '450px' }}
            />

            <p className="text-center text-xs text-zinc-500 mt-4">
              Or message us on{' '}
              <a 
                href="https://wa.me/919313070872" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline"
              >
                WhatsApp
              </a>
              {' '}for a quick response
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
