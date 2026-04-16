import { motion } from "framer-motion";
import useDocumentTitle from '@/hooks/use-document-title';
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Database,
  Zap,
  Timer,
  ArrowRight,
  MessageCircle,
  Calendar,
  CheckCircle,
} from "lucide-react";
import CalendlyModal from "@/components/shared/CalendlyModal";
import FounderStory from "../components/home/FounderStory";

const philosophies = [
  {
    icon: Database,
    title: "Data > Guesswork",
    description: "Every decision backed by numbers. No gut feelings.",
  },
  {
    icon: Zap,
    title: "Performance > Vanity",
    description: "We measure what matters. Leads and revenue, not likes.",
  },
  {
    icon: Timer,
    title: "Speed > Perfection",
    description: "Move fast. Test fast. Learn fast. Scale fast.",
  },
];

const values = [
  "Results-obsessed, not deliverable-obsessed",
  "Transparent pricing and communication",
  "AI-first approach to everything",
  "Long-term partnerships over quick wins",
  "Skin in the game mentality",
];

export default function About() {
  useDocumentTitle('About Us');
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="pt-20" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />

        <div className="container-custom mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-400 mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
              We Don't Run Ads.
              <br />
              <span className="gradient-text">We Build Growth Systems.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Growth Bridge is an AI-powered performance marketing agency. We
              combine data-driven strategies with cutting-edge AI to build
              systematic growth engines for ambitious businesses.
            </p>
          </motion.div>
        </div>
      </section>



      <FounderStory />

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-[#050505]">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-400 mb-4">
              Core Philosophy
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              What We Believe
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {philosophies.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 text-center card-hover"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0A0A0C]">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-400 mb-4">
                Our Vision
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
                Build a System-Driven Growth Agency
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                We're building the agency we wished existed when we were scaling
                our own ventures. One that's transparent, results-focused, and
                actually cares about your success.
              </p>

              <ul className="space-y-4">
                {values.map((value, index) => (
                  <motion.li
                    key={value}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to grow?
              </h3>
              <p className="text-zinc-400 mb-6">
                Let's discuss how we can build your growth system.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%27d%20like%20to%20discuss%20my%20growth%20goals."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#1da851]"
                  data-testid="about-whatsapp-btn"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => setShowCalendly(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-gray-200"
                  data-testid="about-book-call-btn"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CalendlyModal open={showCalendly} onOpenChange={setShowCalendly} />
    </div>
  );
}
