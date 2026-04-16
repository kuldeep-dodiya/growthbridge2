import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Compass, Palette, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Compass,
    title: 'Strategy',
    description: 'Deep dive into your business. Understand goals. Map the growth path.',
    details: 'Competitor analysis • Audience research • Channel selection',
    duration: 'Week 1',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Creative',
    description: 'AI-powered creative production. Ads that stop the scroll.',
    details: '20+ ad variations • Landing pages • Copy that converts',
    duration: 'Week 2',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch',
    description: 'Deploy campaigns across channels. Monitor in real-time.',
    details: 'A/B testing • Pixel setup • Conversion tracking',
    duration: 'Week 3',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Scale',
    description: "Optimize what works. Kill what doesn't. Scale systematically.",
    details: 'Weekly reports • Budget optimization • Continuous improvement',
    duration: 'Ongoing',
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#0A0A0C] relative overflow-hidden" data-testid="process-section">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container-custom mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-xs uppercase tracking-[0.15em] font-medium text-purple-400">
              Our Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            From Zero to Scale
            <br />
            <span className="gradient-text">In 30 Days</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A proven 4-step system that's helped 50+ businesses generate 
            millions in revenue. No guesswork. Just results.
          </p>
        </motion.div>

        <div 
          ref={ref}
          className="relative"
        >
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 hover:border-white/10 transition-all duration-500 h-full">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute -top-3 right-6">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-zinc-400 border border-white/10">
                        {step.duration}
                      </span>
                    </div>
                    
                    <div className="pt-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mb-4">
                        {step.description}
                      </p>
                      
                      <div className="pt-4 border-t border-white/5">
                        <p className="text-xs text-zinc-500">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-6 items-center justify-center -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-zinc-600" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%27m%20ready%20to%20start%20my%20growth%20journey.%20Let%27s%20talk."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your Growth Journey
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
