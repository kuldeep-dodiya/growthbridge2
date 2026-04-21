import { useState, useEffect } from 'react';
import useDocumentTitle from '@/hooks/use-document-title';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import CalendlyModal from '@/components/shared/CalendlyModal';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const staticCaseStudies = [
  {
    client_type: 'Real Estate Developer',
    slug: 'real-estate-lead-generation',
    title: 'Qualified Leads at ₹200–₹250 CPL',
    problem: 'They were struggling with high CPL and junk leads on Facebook Ads. The industry average was too high.',
    strategy: 'Implemented an AI-powered lead qualifications funnel combining highly-targeted Meta Ads with automated pre-screening chatbots to filter out tire-kickers before they reached the sales team.',
    execution: 'We restructured their campaigns targeting behaviors instead of just demographics, optimized ad creatives for intent rather than curiosity, and integrated a seamless CRM follow-up sequence instantly engaging leads.',
    results: [
      'Brought down CPL from industry average to ₹200–₹250',
      'Boosted lead-to-site-visit conversion rate by 75%',
      'Achieved a 3x Return on Ad Spend (ROAS)'
    ],
    image: '/case-study/real-estate.png',
    metrics: { leads: '100+', cpl: '₹200-250', conversion: '75%', roas: '3x' }
  },
  {
    client_type: 'Restaurant Chain',
    slug: 'restaurant-revenue-growth',
    title: '₹20K/month → ₹150K/month Revenue',
    problem: 'Low footfall during weekdays and high competition made it hard to scale predictably.',
    strategy: 'Developed a location-based hyper-local ad strategy combined with a loyalty program designed to turn one-time weekend visitors into regular weekday customers.',
    execution: 'Launched aggressive geo-fenced Instagram and Google Ads around their branches. Paired this with an automated SMS/WhatsApp marketing sequence offering timed discounts during traditionally slow hours.',
    results: [
      'Grew monthly revenue from ₹20K to ₹150K (7.5x growth)',
      'Increased weekday footfall by 150%',
      'Improved customer retention up to 40%'
    ],
    image: '/case-study/restaurant.png',
    metrics: { revenue: '7.5x', days: '60', footfall: '+150%', retention: '40%' }
  },
  {
    client_type: 'D2C Soap Brand',
    slug: 'd2c-soap-brand-growth',
    title: '0 to ₹50L Monthly Revenue',
    problem: 'Starting entirely from scratch with no brand awareness in a highly saturated D2C market.',
    strategy: 'Built an aggressive direct-response funnel using user-generated content (UGC) highlighting product benefits, coupled with a seamless Shopify checkout experience.',
    execution: 'Scaled Meta and Google Performance Max campaigns from zero. Deployed A/B testing on dozens of creatives per week, optimizing aggressively for Cost Per Acquisition (CPA) while establishing a solid email retention loop.',
    results: [
      'Scaled to ₹50 Lakhs in monthly revenue from ground zero',
      'Achieved an 8x Return on Ad Spend (ROAS)',
      'Generated over 10,000+ targeted orders'
    ],
    image: '/case-study/d2c.png',
    metrics: { revenue: '₹50L', roas: '8x', orders: '10k+', cac: '₹150' }
  }
];

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCalendly, setShowCalendly] = useState(false);
  useDocumentTitle(caseStudy ? `${caseStudy.title} — Case Study` : 'Loading...');

useEffect(() => {
  const study = staticCaseStudies.find((item) => item.slug === slug);
  setCaseStudy(study || null);
  setLoading(false);
}, [slug]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white mb-4">Case Study Not Found</h1>
        <Link to="/case-studies" className="text-blue-400 hover:underline">
          ← Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20" data-testid="case-study-detail-page">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-transparent" />
        
        <div className="container-custom mx-auto relative z-10 pb-12">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-6 transition-colors"
            data-testid="back-to-case-studies"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-400 mb-4">
              {caseStudy.client_type}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white mb-4">
              {caseStudy.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-8 bg-[#0A0A0C] border-y border-white/5">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(caseStudy.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-3xl font-bold text-white mb-1">{value}</p>
                <p className="text-sm text-zinc-500 capitalize">{key.replace(/_/g, ' ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#050505]">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-red-400 mb-4">
                The Problem
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </motion.div>

            {/* Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-blue-400 mb-4">
                Our Strategy
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {caseStudy.strategy}
              </p>
            </motion.div>

            {/* Execution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-purple-400 mb-4">
                Execution
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {caseStudy.execution}
              </p>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-green-400 mb-4">
                Results
              </h2>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-zinc-300">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Want Similar Results?
              </h3>
              <p className="text-zinc-400 mb-6">
                Let's discuss how we can achieve similar growth for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%20saw%20your%20case%20study%20and%20I%27d%20like%20to%20discuss%20my%20growth%20goals."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#1da851]"
                  data-testid="case-study-whatsapp-btn"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => setShowCalendly(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-gray-200"
                  data-testid="case-study-book-call-btn"
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
