import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Calendar,
  Shield,
  Zap,
  Award,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import CalendlyModal from "@/components/shared/CalendlyModal";

// Logo URL
const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_ai-growth-system-6/artifacts/xhhkl5ea_logo3.png";

const trustIndicators = [
  { icon: Shield, text: "100% Money-Back Guarantee" },
  { icon: Zap, text: "Results in 30 Days" },
  { icon: Award, text: "Trusted by 10+ Brands" },
];

export default function HeroSection() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 lg:pt-28 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.prod-images.emergentagent.com/jobs/8c4132bc-810e-4df6-9699-cde94efb21c2/images/2e935c0205ec77d47ab1ece18419a157c8c8ad597e8ce92dae893a5d3c03512c.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#050505]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[150px] animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[200px]" />

      <div className="container-custom mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <img
                src={LOGO_URL}
                alt="Growth Bridge"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 bg-blue-500/20 rounded-full blur-xl -z-10" />
            </div>
          </motion.div>

          {/* Overline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-300">
              Now Accepting New Clients
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05]"
          >
            Your Competitors Are
            <br />
            <span className="relative">
              <span className="gradient-text">Stealing Your Customers.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left"
              />
            </span>
            <br />
            <span className="text-zinc-400 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Let's Fix That.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We build{" "}
            <span className="text-white font-semibold">
              AI-powered growth systems
            </span>{" "}
            that generate qualified leads at{" "}
            <span className="text-green-400 font-semibold">₹50 - 300 CPL</span>
            —while your competitors pay{" "}
            <span className="text-red-400 line-through">₹500+</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%20want%20to%20stop%20losing%20customers%20to%20my%20competitors.%20Let%27s%20talk."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#1ebe5d] hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
              data-testid="hero-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5" />
              Get Your Free Strategy Call
              <motion.span
                className="absolute -right-1 -top-1 px-2 py-0.5 bg-white text-[#25D366] text-xs font-bold rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                FREE
              </motion.span>
            </a>
            <button
              onClick={() => setShowCalendly(true)}
              className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              data-testid="hero-book-call-btn"
            >
              <Calendar className="w-5 h-5" />
              Book a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {trustIndicators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-zinc-400"
                >
                  <Icon className="w-4 h-4 text-green-400" />
                  <span>{item.text}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-[#050505] flex items-center justify-center text-xs font-bold text-white"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white font-medium text-sm">
                Trusted by 10+ businesses
              </p>
              <p className="text-zinc-500 text-xs">
                across Real Estate, D2C, Restaurants & more
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
        <span className="text-xs text-zinc-500 uppercase tracking-widest">
          Scroll to explore
        </span>
      </motion.div>

      <CalendlyModal open={showCalendly} onOpenChange={setShowCalendly} />
    </section>
  );
}
