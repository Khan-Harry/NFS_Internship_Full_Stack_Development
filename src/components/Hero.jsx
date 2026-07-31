import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles, HiPlay, HiArrowRight, HiCheckCircle, HiCode, HiLightningBolt } from 'react-icons/hi';
import Button from './Button';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-400/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 blur-[90px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-primary text-xs sm:text-sm font-semibold mb-6 shadow-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-indigo-900 font-bold">CodeGenius 2.0 Released:</span> Next-Gen Deep Code Model
            <HiSparkles className="text-amber-500 w-4 h-4 ml-0.5" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
          >
            Build Better Software <br className="hidden sm:inline" />
            <span className="text-gradient">with Artificial Intelligence</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            CodeGenius AI empowers developers to generate clean code, detect bugs in real-time, explain complex codebases, and ship features <strong>10x faster</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="glow" size="lg" icon={HiArrowRight} href="#pricing">
              Try for Free
            </Button>
            <Button variant="outline" size="lg" icon={HiPlay} iconPosition="left" href="#preview">
              Watch Demo
            </Button>
          </motion.div>

          {/* Value Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 font-medium"
          >
            <div className="flex items-center gap-1.5">
              <HiCheckCircle className="text-emerald-500 w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HiCheckCircle className="text-emerald-500 w-4 h-4" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HiCheckCircle className="text-emerald-500 w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Graphic Illustration / Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 relative max-w-5xl mx-auto"
        >
          {/* Decorative halo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-30 animate-pulse-slow" />
          
          <div className="relative rounded-2xl bg-slate-950 p-2 sm:p-4 ring-1 ring-slate-800 shadow-2xl overflow-hidden">
            {/* Top window controls */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="text-xs text-slate-400 font-mono bg-slate-900 px-3 py-1 rounded-md border border-slate-800 flex items-center gap-2">
                <HiCode className="text-indigo-400" />
                <span>codegenius-ai-copilot.ts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20">
                  ● Live Sync
                </span>
              </div>
            </div>

            {/* Code mockup area */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-2 font-mono text-xs sm:text-sm">
              {/* Code window */}
              <div className="md:col-span-2 bg-slate-900/90 rounded-xl p-4 border border-slate-800/80 text-slate-300 overflow-x-auto space-y-1">
                <div className="text-slate-500">// CodeGenius AI: Auto-generating optimization routine</div>
                <div><span className="text-purple-400">async function</span> <span className="text-blue-400">optimizeDatabaseQueries</span>(<span className="text-amber-300">queryLog</span>) &#123;</div>
                <div className="pl-4"><span className="text-purple-400">const</span> aiCopilot = <span className="text-purple-400">await</span> CodeGenius.<span className="text-blue-400">init</span>(&#123; mode: <span className="text-emerald-400">'deep-reasoning'</span> &#125;);</div>
                <div className="pl-4 text-emerald-400">// AI Recommendation: Replace N+1 queries with batched JOIN query</div>
                <div className="pl-4 bg-indigo-950/60 border-l-2 border-indigo-500 p-2 my-1 text-indigo-200 rounded">
                  <span className="text-indigo-400">+ const</span> result = <span className="text-indigo-400">await</span> aiCopilot.<span className="text-cyan-300 font-bold">refactorAndFix</span>(queryLog);<br/>
                  <span className="text-indigo-400">+ return</span> result.<span className="text-cyan-300">optimizedOutput</span>;
                </div>
                <div className="pl-4"><span className="text-slate-500">// Performance gain: +340% throughput</span></div>
                <div>&#125;</div>
              </div>

              {/* AI Copilot Side Panel */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/80 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                    <span className="font-semibold text-slate-200 text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <HiLightningBolt className="text-amber-400" /> AI Assistant Status
                    </span>
                    <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full">v2.4 Pro</span>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                      <p className="text-slate-300 font-sans font-medium">✨ Bug fixed in <code className="text-cyan-300">authHandler.ts</code></p>
                      <p className="text-[11px] text-slate-400 font-sans mt-0.5">Prevented potential null pointer exception on token refresh.</p>
                    </div>
                    <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                      <p className="text-slate-300 font-sans font-medium">⚡ Speed Benchmark</p>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full mt-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full w-[92%]" />
                      </div>
                      <span className="text-[10px] text-emerald-400 mt-1 block">92% faster generation</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Tokens used: 1,420</span>
                  <span className="text-emerald-400 font-semibold">Latency: 12ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -left-6 hidden lg:flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-lg">
              99.8%
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Syntax Accuracy</p>
              <p className="text-[11px] text-slate-500">Zero compile runtime errors</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-6 -right-6 hidden lg:flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-primary font-bold text-lg">
              10x
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Developer Productivity</p>
              <p className="text-[11px] text-slate-500">Shipped in half the time</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
