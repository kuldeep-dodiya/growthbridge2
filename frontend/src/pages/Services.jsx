import { motion } from 'framer-motion';
import useDocumentTitle from '@/hooks/use-document-title';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Bot, Sparkles, Layout, Users, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Meta Ads (Lead Generation)',
    description: 'High-performance paid campaigns that generate qualified leads at unbeatable CPL. We don\'t just run ads—we build lead machines.',
    features: ['Facebook & Instagram Ads', 'Audience Research & Testing', 'Creative Strategy', 'Conversion Optimization'],
    href: '/services/meta-ads',
    color: 'blue',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Automate repetitive tasks and scale your operations with intelligent systems. Work smarter, not harder.',
    features: ['Lead Qualification Bots', 'Customer Support AI', 'Email Automation', 'Data Analysis Pipelines'],
    href: '/services/ai-automation',
    color: 'purple',
  },
  {
    icon: Sparkles,
    title: 'AI Creative Production',
    description: 'Generate high-quality creative assets at scale using AI-powered tools. More content, less time, better results.',
    features: ['AI Ad Creatives', 'Video Production', 'Social Media Content', 'Landing Page Copy'],
    href: '/services/ai-creative-production',
    color: 'pink',
  },
  {
    icon: Layout,
    title: 'Funnel / Landing Pages',
    description: 'High-converting landing pages designed to turn visitors into customers. Every element optimized for conversion.',
    features: ['Conversion-Focused Design', 'A/B Testing', 'Mobile Optimization', 'Analytics Setup'],
    href: '/services/funnel-landing-pages',
    color: 'green',
  },
  {
    icon: Users,
    title: 'Influencer Marketing',
    description: 'Strategic influencer partnerships that drive authentic engagement and reach your target audience naturally.',
    features: ['Influencer Discovery', 'Campaign Management', 'Performance Tracking', 'Content Collaboration'],
    href: '/services/influencer-marketing',
    color: 'orange',
  },
  {
    icon: Lightbulb,
    title: 'Growth Consulting',
    description: 'Expert guidance to unlock your next phase of growth. Strategy sessions, audits, and actionable roadmaps.',
    features: ['Marketing Audits', 'Growth Strategy', '1:1 Consulting', 'Team Training'],
    href: '/services/growth-consulting',
    color: 'yellow',
  },
];

const colorClasses = {
  blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400',
  purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400',
  pink: 'from-pink-500/20 to-pink-600/10 border-pink-500/30 text-pink-400',
  green: 'from-green-500/20 to-green-600/10 border-green-500/30 text-green-400',
  orange: 'from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-400',
  yellow: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 text-yellow-400',
};

export default function Services() {
  useDocumentTitle('Our Services');
  return (
    <div className="pt-20" data-testid="services-page">
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
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
              Growth Services
              <br />
              <span className="gradient-text">That Actually Work</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              No fluff. No vanity metrics. Just battle-tested strategies and AI-powered systems 
              that generate real results for real businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0A0A0C]">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={service.href}
                    className={`block h-full p-8 rounded-2xl bg-gradient-to-br border transition-all duration-300 group card-hover ${colorClasses[service.color]}`}
                    data-testid={`service-link-${service.href.split('/').pop()}`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/5`}>
                      <Icon className={`w-7 h-7 ${colorClasses[service.color].split(' ').pop()}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                          <span className={colorClasses[service.color].split(' ').pop()}>→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center p-8 rounded-2xl bg-[#050505] border border-white/5"
          >
            <p className="text-zinc-400 mb-2">
              Projects typically start from <span className="text-white font-bold text-xl">₹30K+</span> depending on scope
            </p>
            <p className="text-sm text-zinc-500">
              Every project is custom-scoped based on your specific needs and goals
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
