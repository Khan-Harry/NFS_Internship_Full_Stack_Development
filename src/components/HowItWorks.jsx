import React from 'react';
import { motion } from 'framer-motion';
import { HiPencilSquare, HiCpuChip, HiRocketLaunch, HiChevronRight } from 'react-icons/hi2';
import Card from './Card';
import { stepsData } from '../data/landingData';

const iconMap = {
  HiOutlinePencilSquare: HiPencilSquare,
  HiOutlineCpuChip: HiCpuChip,
  HiOutlineRocketLaunch: HiRocketLaunch,
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-800/60">
            Streamlined Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            How <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">CodeGenius AI</span> Works
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            From idea to deployment in 3 simple, automated steps. No complex setup or steep learning curve.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {stepsData.map((stepItem, index) => {
            const IconComponent = iconMap[stepItem.iconName] || HiPencilSquare;

            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <Card dark className="h-full border border-slate-800 bg-slate-950/80 hover:border-indigo-500/50 transition-colors">
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-indigo-400/30 group-hover:text-indigo-400 transition-colors">
                      {stepItem.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {stepItem.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {stepItem.description}
                  </p>

                  {/* Arrow Indicator for Desktop */}
                  {index < stepsData.length - 1 && (
                    <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-indigo-400 bg-slate-900 rounded-full p-2 border border-slate-800 shadow-md">
                      <HiChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
