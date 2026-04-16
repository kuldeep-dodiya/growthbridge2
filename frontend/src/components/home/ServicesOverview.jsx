import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Bot, Sparkles, Layout, Users, Lightbulb, CheckCircle, Star } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Meta Ads',
    subtitle: 'Lead Generation',
    description: 'Stop burning money on ads. We build lead generation machines that deliver 100+ qualified leads at ₹50-70 CPL while your competitors pay ₹200+.',
    features: ['Hyper-targeted audiences', 'AI-powered creative testing', 'Real-time optimization'],
    result: '₹50-70 CPL achieved',
    href: '/services/meta-ads',
    featured: true,
    badge: 'Most Popular',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    subtitle: 'Scale Operations',
    description: 'Replace 3 employees with AI systems that work 24/7 without breaks, vacations, or excuses. Qualify leads, support customers, generate content—automatically.',
    features: ['Lead qualification bots', 'Customer support AI', 'Content automation'],
    result: '80% tasks automated',
    href: '/services/ai-automation',
  },
  {
    icon: Sparkles,
    title: 'AI Creative',
    subtitle: 'Content at Scale',
    description: 'Generate 50+ ad creatives in the time it takes your designer to make 1. AI-powered production that keeps your campaigns fresh and converting.',
    features: ['Unlimited variations', '48hr turnaround', 'Brand-consistent output'],
    result: '10x content output',
    href: '/services/ai-creative-production',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    subtitle: 'Convert Traffic',
    description: 'Your landing page is leaking money. We build conversion machines that turn 12%+ of visitors into leads—while industry average struggles at 2-5%.',
    features: ['Conversion-focused design', 'A/B testing included', 'Mobile-first approach'],
    result: '12%+ conversion rate',
    href: '/services/funnel-landing-pages',
  },
  {
    icon: Users,
    title: 'Influencer Marketing',
    subtitle: 'Authentic Reach',
    description: 'Stop paying for fake followers. We connect you with influencers who actually drive sales—vetted for real engagement and audience quality.',
    features: ['Fraud detection', 'Performance-based deals', 'ROI tracking'],
    result: '10x ROI average',
    href: '/services/influencer-marketing',
  },
  {
    icon: Lightbulb,
    title: 'Growth Consulting',
    subtitle: 'Strategic Guidance',
    description: "Stuck at a plateau? Get a fresh perspective from operators who've scaled multiple businesses. Strategy, audits, and actionable roadmaps.",
    features: ['Marketing audits', '1:1 consulting', 'Team training'],
    result: 'Unlock next phase',
    href: '/services/growth-consulting',
  },
];

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#0A0A0C] relative overflow-hidden" data-testid="services-overview">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Star className="w-4 h-4 text-blue-400" />
              <span className="text-xs uppercase tracking-[0.15em] font-medium text-blue-400">
                Premium Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Growth Services That
              <br />
              <span className="gradient-text">Actually Deliver</span>
            </h2>
            <p className="text-zinc-400 max-w-xl">
              No fluff. No vanity metrics. Just battle-tested systems that generate 
              real revenue for real businesses.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              data-testid="view-all-services"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className={`group block h-full p-7 md:p-8 rounded-2xl border transition-all duration-500 relative overflow-hidden ${
                    service.featured 
                      ? 'bg-gradient-to-b from-blue-500/10 to-purple-500/5 border-blue-500/30 hover:border-blue-400/50' 
                      : 'bg-[#0d0d0f] border-white/5 hover:border-white/15'
                  }`}
                  data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white">
                        {service.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                      service.featured 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                        : 'bg-white/5 text-zinc-400 group-hover:text-white group-hover:bg-white/10 border border-white/5'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                      {service.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Result badge */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                        {service.result}
                      </span>
                      <div className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10">
            <div className="text-left">
              <p className="text-white font-semibold">Projects start from ₹30,000</p>
              <p className="text-xs text-zinc-500">Custom-scoped based on your specific goals</p>
            </div>
            <a
              href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%27d%20like%20to%20know%20more%20about%20your%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              Get Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
