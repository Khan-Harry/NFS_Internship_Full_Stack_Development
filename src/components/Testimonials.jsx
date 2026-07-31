import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi2';
import Card from './Card';
import { testimonialsData } from '../data/landingData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            Developer Praise
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Loved by Engineers at <span className="text-gradient">World-Class Teams</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            See how developers and engineering leaders accelerate their workflows with CodeGenius AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between hover:shadow-xl transition-all border border-slate-200/80 bg-white">
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <HiStar key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  {/* Review Quote */}
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic font-normal">
                    "{review.review}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-500/20"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{review.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {review.role} · <span className="text-primary font-semibold">{review.company}</span>
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
