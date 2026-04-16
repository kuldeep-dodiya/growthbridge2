import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Trophy, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    slug: 'real-estate-lead-generation',
    type: 'Real Estate',
    title: 'Qualified Leads at ₹200–₹250 CPL',
    subtitle: 'Down from industry average',
    metric: '100+',
    metricLabel: 'Leads',
    secondMetric: '75%',
    secondMetricLabel: 'Cost Reduction',
    image: '/case-study/real-estate.png',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    slug: 'restaurant-revenue-growth',
    type: 'Restaurant Chain',
    title: '₹20K/month → ₹150K/month Revenue',
    subtitle: '7.5x growth in 60 days',
    metric: '7.5x',
    metricLabel: 'Revenue',
    secondMetric: '60',
    secondMetricLabel: 'Days',
    image: '/case-study/restaurant.png',
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
  },
  {
    slug: 'd2c-soap-brand-growth',
    type: 'D2C Brand',
    title: '0 to ₹50L Monthly Revenue',
    subtitle: 'From scratch in 6 months',
    metric: '₹50L',
    metricLabel: 'Monthly',
    secondMetric: '8x',
    secondMetricLabel: 'ROAS',
    image: '/case-study/d2c.png',
    gradient: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
  },
];

export default function CaseStudyPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#050505] relative overflow-hidden" data-testid="case-study-preview">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-xs uppercase tracking-[0.15em] font-medium text-yellow-400">
                Success Stories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Real Results.
              <br />
              <span className="gradient-text">Real Businesses.</span>
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Don't just take our word for it. See how we've helped businesses 
              across industries achieve remarkable growth.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              data-testid="view-all-case-studies"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/case-studies/${study.slug}`}
                className="group block h-full"
                data-testid={`case-study-card-${study.slug}`}
              >
                <div className={`relative h-full rounded-2xl overflow-hidden bg-gradient-to-b ${study.gradient} border ${study.borderColor} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}>
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-sm text-white border border-white/20">
                        {study.type}
                      </span>
                    </div>
                    
                    {/* Metrics */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <div className="flex-1 p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10">
                        <div className="flex items-center gap-1 mb-1">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-2xl font-black text-white">{study.metric}</span>
                        </div>
                        <p className="text-xs text-zinc-400">{study.metricLabel}</p>
                      </div>
                      <div className="flex-1 p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="text-2xl font-black text-white">{study.secondMetric}</span>
                        </div>
                        <p className="text-xs text-zinc-400">{study.secondMetricLabel}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mb-4">
                      {study.subtitle}
                    </p>
                    
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                      Read Case Study
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom testimonial teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-[#050505] flex items-center justify-center text-xs font-bold text-white"
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 text-sm font-medium">
                "Best marketing decision we ever made"
              </p>
              <p className="text-zinc-500 text-xs">— From 10+ satisfied clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
