import React from 'react';
import { motion } from 'framer-motion';
import { trustedCompanies } from '../data/landingData';

const TrustedBy = () => {
  return (
    <section className="py-12 bg-white/60 border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Trusted by 50,000+ developers & modern tech leaders worldwide
        </p>

        {/* Company Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 items-center justify-center opacity-85"
        >
          {trustedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center py-2 px-4 rounded-xl hover:bg-slate-100/80 transition-all duration-300 group cursor-default"
            >
              <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-600 group-hover:text-primary transition-colors">
                {company.logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
