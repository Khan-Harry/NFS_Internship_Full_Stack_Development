import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiSparkles, HiArrowRight, HiCheckCircle } from 'react-icons/hi2';
import Button from './Button';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-12 md:p-16 border border-slate-800 shadow-2xl text-center overflow-hidden">
          
          {/* Ambient light glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary via-purple-600 to-cyan-500 blur-[120px] opacity-40 rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-500/30"
            >
              <HiSparkles className="w-4 h-4 text-amber-400" /> Start Shipping 10x Faster Today
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              Ready to Upgrade Your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Software Engineering Workflow?
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
            >
              Join 50,000+ developers, architects, and startups already generating clean code, catching bugs early, and deploying with total confidence.
            </motion.p>

            {/* Input / Action Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 max-w-md mx-auto"
            >
              {submitted ? (
                <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm">
                  <HiCheckCircle className="w-5 h-5 text-emerald-400" />
                  Welcome aboard! We've sent your instant access key to your email.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 bg-slate-900/80 p-2 rounded-2xl border border-slate-700/80 shadow-inner">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none rounded-xl"
                  />
                  <Button variant="glow" size="md" type="submit" icon={HiArrowRight} className="sm:w-auto w-full whitespace-nowrap">
                    Get Started Free
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium"
            >
              <span>✓ Free 14-day trial</span>
              <span>✓ No credit card required</span>
              <span>✓ 1-click GitHub setup</span>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
