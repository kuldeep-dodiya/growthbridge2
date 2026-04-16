import { useState } from 'react';
import useDocumentTitle from '@/hooks/use-document-title';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle, Calendar, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import CalendlyModal from '@/components/shared/CalendlyModal';

export default function ServicePageTemplate({ data }) {
  const [showCalendly, setShowCalendly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const Icon = data.icon;
  useDocumentTitle(`${data.title} — ${data.subtitle}`);

  return (
    <div className="pt-20" data-testid={`service-page-${data.title.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/90 to-[#050505]" />
        </div>
        
        <div className="container-custom mx-auto relative z-10">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
            data-testid="back-to-services"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <Icon className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-400">
                  {data.subtitle}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white">
                  {data.title}
                </h1>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {data.headline}
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%27m%20interested%20in%20your%20${encodeURIComponent(data.title)}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#1da851]"
                data-testid="service-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <button
                onClick={() => setShowCalendly(true)}
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-200"
                data-testid="service-book-call-btn"
              >
                <Calendar className="w-5 h-5" />
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[#0A0A0C]">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-red-400 mb-4">
                {data.problem.title}
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
                Why Most Businesses Struggle
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                {data.problem.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-[#050505] border border-red-500/20"
            >
              <ul className="space-y-4">
                {data.problem.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-400 text-lg">✕</span>
                    <span className="text-zinc-300">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-[#050505]">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-400 mb-4">
              {data.solution.title}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
              How We Solve This
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              {data.solution.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.solution.points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#0A0A0C] border border-white/5 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                    <p className="text-zinc-400">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0A0A0C]">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-purple-400 mb-4">
              Our Process
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              How We Work
            </h2>
          </motion.div>

          <div className="space-y-6">
            {data.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-[#050505] border border-white/5"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-white">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-[#050505]">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-green-400 mb-4">
              Results
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              What You Can Expect
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#0A0A0C] border border-white/5 text-center"
              >
                <p className="text-4xl font-black text-white mb-2">{result.metric}</p>
                <p className="text-white font-medium mb-1">{result.label}</p>
                <p className="text-sm text-zinc-500">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0A0A0C]">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-400 mb-4">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Common Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {data.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl bg-[#050505] border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  data-testid={`faq-${index}`}
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-zinc-400">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#050505]">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Let's discuss how our {data.title} service can help grow your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%27m%20interested%20in%20your%20${encodeURIComponent(data.title)}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#1da851]"
                data-testid="service-cta-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <button
                onClick={() => setShowCalendly(true)}
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-200"
                data-testid="service-cta-book-call-btn"
              >
                <Calendar className="w-5 h-5" />
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-zinc-500 text-sm mt-6">
              Projects typically start from <span className="text-white font-medium">₹30K+</span>
            </p>
          </motion.div>
        </div>
      </section>

      <CalendlyModal open={showCalendly} onOpenChange={setShowCalendly} />
    </div>
  );
}
