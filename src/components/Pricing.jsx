import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiSparkles, HiArrowRight } from 'react-icons/hi2';
import Card from './Card';
import Button from './Button';
import { pricingTiers } from '../data/landingData';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            Simple, Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Flexible Plans for <span className="text-gradient">Every Scale</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Start building for free. Upgrade as your team grows with zero hidden fees.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly Billed
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 rounded-full bg-slate-200 p-1 transition-colors duration-300 relative focus:outline-none"
              aria-label="Toggle annual or monthly pricing"
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-primary shadow-md"
                animate={{ x: isYearly ? 24 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
              Annual Billed
              <span className="text-[11px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <Card
                  className={`w-full flex flex-col justify-between relative transition-all duration-300 ${
                    tier.popular
                      ? 'border-2 border-primary shadow-2xl shadow-indigo-500/15 scale-105 z-10 bg-white'
                      : 'border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Most Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary via-purple-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                      <HiSparkles className="w-3.5 h-3.5" /> Most Popular
                    </div>
                  )}

                  <div>
                    {/* Header Info */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-extrabold text-slate-900">{tier.name}</h3>
                      <p className="text-slate-500 text-xs mt-1 min-h-[36px]">{tier.tagline}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6 flex items-baseline gap-1 border-b border-slate-100 pb-6">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                        ${price}
                      </span>
                      <span className="text-slate-500 font-medium text-sm">
                        / {isYearly ? 'month, billed annually' : 'month'}
                      </span>
                    </div>

                    {/* Feature Checkmarks List */}
                    <div className="space-y-3.5 mb-8">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Features</p>
                      {tier.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <HiCheck className="w-3.5 h-3.5" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={tier.popular ? 'glow' : 'outline'}
                    size="lg"
                    className="w-full justify-center"
                    icon={HiArrowRight}
                  >
                    {tier.buttonText}
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
