import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FounderStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0C] relative overflow-hidden" data-testid="founder-story">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container-custom mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 w-fit">
              <span className="text-xs uppercase tracking-[0.15em] font-medium text-blue-400">
                Founder Story
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-8">
              From Learning Marketing to <span className="gradient-text">Building Growth Systems</span>
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I didn't start Growth Bridge with a team, a big budget, or a bold vision statement.
                I started with a question: how does growth actually work?
              </p>
              <p>
                As a computer science student, I was wired to think in systems. Not just running ads and hoping for the best — but understanding the deeper mechanics of what makes a business scale. Predictably. Repeatedly.
              </p>
              <p>
                Early on, I kept seeing the same thing: businesses pouring money into marketing that looked great on paper but quietly failed where it mattered. The numbers were clean. The results weren't.
                That bothered me more than it probably should have.
              </p>
              <p>
                So I stopped following the agency playbook and started paying attention to what was actually moving the needle — funnels, data, and the moments where interest turns into revenue.
              </p>
              <p>
                The work that followed made things click. Bringing real estate CPLs down to ₹200–₹250. Helping a restaurant grow from ₹20K to ₹1.5L in monthly revenue. Different industries, different problems — but the same underlying truth:
                <span className="text-zinc-200"> Growth isn't something that happens to a business. It's something you build.</span>
              </p>
              <p className="font-medium text-white pt-2 border-t border-white/10">
                That idea is at the heart of everything Growth Bridge does — turning marketing from a cost centre into a system that generates measurable, compounding revenue.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col items-center lg:items-end lg:col-span-5"
          >
            <div className="relative w-full max-w-sm lg:max-w-md mx-auto lg:mr-0 pt-8 lg:pt-0">
              {/* Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[#0A0A0C]/20 z-10" /> {/* Slight dark overlay */}
                <img 
                  src="/my%20photo.png" 
                  alt="Kuldeep - Founder of Growth Bridge"
                  className="w-full h-full object-cover object-top grayscale-[15%] transition-transform duration-700 hover:scale-105 hover:grayscale-0"
                />
              </div>

              {/* Founder Caption */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-8 left-4 right-4 lg:-left-12 lg:right-8 z-20"
              >
                <div className="bg-[#050505]/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex flex-col gap-1">
                  <h3 className="text-white font-bold text-xl">Kuldeep H. Dodiya</h3>
                  <p className="text-zinc-400 text-sm font-medium">
                    "Building scalable growth systems for modern businesses"
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
