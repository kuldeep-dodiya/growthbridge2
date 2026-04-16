import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Target, ArrowDown, ArrowUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 100,
    suffix: '+',
    label: 'Qualified Leads Generated',
    description: 'For a single real estate developer in just 30 days',
    comparison: 'vs. industry avg of 20-30',
    trend: 'up',
    color: 'blue',
  },
  {
    icon: Target,
    value: 50,
    prefix: '₹',
    suffix: '-70',
    label: 'Cost Per Lead',
    description: 'Down from ₹200+ industry average',
    comparison: '75% lower than competitors',
    trend: 'down',
    color: 'green',
  },
  {
    icon: TrendingUp,
    value: 7.5,
    suffix: 'x',
    label: 'Revenue Multiplied',
    description: 'Restaurant: ₹20K/month → ₹150K/month',
    comparison: '₹130K+ monthly revenue increase',
    trend: 'up',
    color: 'purple',
  },
  {
    icon: DollarSign,
    value: 50,
    prefix: '₹',
    suffix: 'L+',
    label: 'Monthly Revenue Generated',
    description: 'D2C soap brand scaled from scratch',
    comparison: 'In just 6 months',
    trend: 'up',
    color: 'pink',
  },
];

const colorClasses = {
  blue: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  green: 'text-green-400 bg-green-400/10 border-green-400/30',
  purple: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
  pink: 'text-pink-400 bg-pink-400/10 border-pink-400/30',
};

function AnimatedCounter({ value, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#050505] relative overflow-hidden" data-testid="stats-section">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
      
      <div className="container-custom mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-xs uppercase tracking-[0.15em] font-medium text-green-400">
              Verified Results
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Numbers Don't Lie.
            <br />
            <span className="gradient-text">Neither Do We.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Real results from real clients. No vanity metrics. No fluff.
            Just outcomes that matter to your bottom line.
          </p>
        </motion.div>

        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/10 transition-all duration-500"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-blue-500/5 to-purple-500/5" />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border ${colorClasses[stat.color]} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black text-white tracking-tight">
                    <AnimatedCounter 
                      value={stat.value} 
                      prefix={stat.prefix || ''} 
                      suffix={stat.suffix || ''} 
                    />
                  </span>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    stat.trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  </div>
                </div>
                
                <p className="text-white font-semibold mb-2">{stat.label}</p>
                <p className="text-sm text-zinc-500 mb-3">{stat.description}</p>
                
                <div className="pt-3 border-t border-white/5">
                  <p className="text-xs text-zinc-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    {stat.comparison}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-zinc-500">
            Want to see how we can achieve similar results for you?{' '}
            <a 
              href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%20saw%20your%20results%20and%20want%20to%20learn%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              Let's talk →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
