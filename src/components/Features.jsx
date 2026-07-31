import React from 'react';
import { motion } from 'framer-motion';
import {
  HiCodeBracket,
  HiBugAnt,
  HiLightBulb,
  HiDocumentText,
  HiSparkles,
  HiUserGroup,
  HiArrowRight,
} from 'react-icons/hi2';
import Card from './Card';
import { featuresData } from '../data/landingData';

const iconMap = {
  HiOutlineCode: HiCodeBracket,
  HiOutlineBugAnt: HiBugAnt,
  HiOutlineLightBulb: HiLightBulb,
  HiOutlineDocumentText: HiDocumentText,
  HiOutlineSparkles: HiSparkles,
  HiOutlineUserGroup: HiUserGroup,
};

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            Supercharged Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Everything You Need to Write <span className="text-gradient">Flawless Code</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            CodeGenius AI provides an intelligent developer toolkit engineered to eliminate boilerplate code, catch subtle bugs, and automate doc generation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || HiCode;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-between group">
                  <div>
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 group-hover:bg-indigo-50 group-hover:text-primary px-3 py-1 rounded-full transition-colors">
                        {feature.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Learn more trigger link */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-8px] group-hover:translate-x-0">
                    <span>Explore feature</span>
                    <HiArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
