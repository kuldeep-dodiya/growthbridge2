import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MessageCircle, Calendar, ArrowRight, Clock, Phone, Sparkles } from 'lucide-react';
import CalendlyModal from '@/components/shared/CalendlyModal';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40 relative overflow-hidden" data-testid="cta-section">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-pink-600/10" />
        <div className="absolute inset-0 bg-[#050505]/80" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs uppercase tracking-[0.15em] font-medium text-red-400">
                Limited Client Slots Available
              </span>
            </div>
          </motion.div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
              Every Day You Wait,
              <br />
              <span className="gradient-text">Your Competitors Win.</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              While you're reading this, your competitors are running ads, capturing your customers, 
              and scaling their revenue. The question isn't whether you can afford to invest in growth—
              <span className="text-white font-semibold"> it's whether you can afford not to.</span>
            </p>
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-semibold text-yellow-400">Free Strategy Session</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get Your Custom Growth Roadmap
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Analyze your current marketing & identify gaps
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Show you exactly where you're losing money
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Give you a clear 90-day action plan
                  </li>
                </ul>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>30 minutes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>Video call</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%20want%20to%20book%20my%20free%20strategy%20session.%20Let%27s%20talk%20about%20scaling%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold px-8 py-5 rounded-2xl transition-all duration-300 hover:bg-[#1ebe5d] hover:shadow-[0_0_40px_rgba(37,211,102,0.3)]"
                  data-testid="cta-whatsapp-btn"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-lg">Chat Now on WhatsApp</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-[#0a0a0c] text-zinc-500 text-sm">or</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowCalendly(true)}
                  className="group w-full flex items-center justify-center gap-3 bg-white text-black font-bold px-8 py-5 rounded-2xl transition-all duration-300 hover:bg-gray-100"
                  data-testid="cta-book-call-btn"
                >
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg">Schedule via Calendly</span>
                </button>

                <p className="text-center text-xs text-zinc-500">
                  100% free. No obligation. We respond within 2 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Results in 30 Days or Less</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>10+ Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <CalendlyModal open={showCalendly} onOpenChange={setShowCalendly} />
    </section>
  );
}
