import { useState, useEffect } from 'react';
import useDocumentTitle from '@/hooks/use-document-title';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Building2, UtensilsCrossed, Package } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const iconMap = {
  'Real Estate Developer': Building2,
  'Restaurant Chain': UtensilsCrossed,
  'D2C Soap Brand': Package,
};

const staticCaseStudies = [
  {
    id: 1,
    client_type: 'Real Estate Developer',
    slug: 'real-estate-lead-generation',
    title: 'Qualified Leads at ₹200–₹250 CPL',
    problem: 'They were struggling with high CPL and junk leads on Facebook Ads. The industry average was too high.',
    image: '/case-study/real-estate.png',
    metrics: { leads: '100+', cpl: '₹200-250', conversion: '75%', roas: '3x' }
  },
  {
    id: 2,
    client_type: 'Restaurant Chain',
    slug: 'restaurant-revenue-growth',
    title: '₹20K/month → ₹150K/month Revenue',
    problem: 'Low footfall during weekdays and high competition made it hard to scale predictably.',
    image: '/case-study/restaurant.png',
    metrics: { revenue: '7.5x', days: '60', footfall: '+150%', retention: '40%' }
  },
  {
    id: 3,
    client_type: 'D2C Soap Brand',
    slug: 'd2c-soap-brand-growth',
    title: '0 to ₹50L Monthly Revenue',
    problem: 'Starting entirely from scratch with no brand awareness in a highly saturated D2C market.',
    image: '/case-study/d2c.png',
    metrics: { revenue: '₹50L', roas: '8x', orders: '10k+', cac: '₹150' }
  }
];

export default function CaseStudies() {
  useDocumentTitle('Case Studies — Real Results');
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCaseStudies = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(`${API}/case-studies`);
      setCaseStudies(
        Array.isArray(response.data) ? response.data : response.data.data || [],
      );
    } catch (err) {
      console.error('Error fetching case studies:', err);
      // Fallback to static data as requested when API is not available
      setCaseStudies(staticCaseStudies);
      // Notice: Not setting error to true here, because we want the UI
      // to gracefully display the static mock data without breaking.
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  return (
    <div className="pt-20" data-testid="case-studies-page">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        
        <div className="container-custom mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-400 mb-4">
              Case Studies
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
              Real Results.
              <br />
              <span className="gradient-text">Real Businesses.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              See how we've helped businesses across industries achieve remarkable growth 
              with our AI-powered marketing systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-[#0A0A0C]">
        <div className="container-custom mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/3] rounded-2xl bg-white/5 mb-4" />
                  <div className="h-4 bg-white/5 rounded mb-2 w-24" />
                  <div className="h-6 bg-white/5 rounded mb-2" />
                  <div className="h-4 bg-white/5 rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-red-400 mb-4">Failed to load case studies. Please try again.</p>
              <button
                onClick={fetchCaseStudies}
                className="px-6 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              {caseStudies.map((study, index) => {
                const Icon = iconMap[study.client_type] || Building2;
                return (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <Link 
                        to={`/case-studies/${study.slug}`}
                        className="block relative aspect-[4/3] rounded-2xl overflow-hidden group"
                        data-testid={`case-study-image-${study.slug}`}
                      >
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Metrics Badge */}
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-400" />
                            <span className="text-white font-bold">{study.metrics.leads || study.metrics.revenue}</span>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-xs uppercase tracking-wider text-blue-400 font-mono">
                          {study.client_type}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        {study.title}
                      </h2>
                      
                      <p className="text-zinc-400 mb-6">
                        {study.problem}
                      </p>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {Object.entries(study.metrics).slice(0, 4).map(([key, value]) => (
                          <div key={key} className="p-4 rounded-xl bg-[#050505] border border-white/5">
                            <p className="text-2xl font-bold text-white">{value}</p>
                            <p className="text-xs text-zinc-500 capitalize">{key.replace(/_/g, ' ')}</p>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                        data-testid={`case-study-link-${study.slug}`}
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
