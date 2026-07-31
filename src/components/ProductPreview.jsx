import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiCodeBracket,
  HiSparkles,
  HiCheckCircle,
  HiExclamationTriangle,
  HiArrowPath,
  HiCommandLine,
  HiChartBar,
} from 'react-icons/hi2';
import { codeExamples } from '../data/landingData';
import Button from './Button';

const ProductPreview = () => {
  const [activeTab, setActiveTab] = useState('javascript');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiScore, setAiScore] = useState(98);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAiScore(99);
    }, 1000);
  };

  return (
    <section id="preview" className="py-20 md:py-28 relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            Interactive Product Tour
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Experience the <span className="text-gradient">CodeGenius Studio</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            See how our intelligent workspace inspects syntax, provides contextual hints, and outputs clean modular code.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="max-w-5xl mx-auto bg-slate-950 rounded-3xl p-4 sm:p-6 border border-slate-800 shadow-2xl">
          
          {/* Top Navbar Header of Studio */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            {/* Language Selector Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('javascript')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'javascript'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                JavaScript / TS
              </button>
              <button
                onClick={() => setActiveTab('python')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'python'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Python FastAPI
              </button>
              <button
                onClick={() => setActiveTab('rust')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'rust'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Rust Tokio
              </button>
            </div>

            {/* Run Analysis Trigger */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                AI Active
              </span>
              <Button
                variant="glow"
                size="sm"
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                icon={isAnalyzing ? HiArrowPath : HiSparkles}
                className={isAnalyzing ? 'animate-spin' : ''}
              >
                {isAnalyzing ? 'Analyzing...' : 'Run AI Analysis'}
              </Button>
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
            
            {/* Left 2 Cols: Code Editor */}
            <div className="lg:col-span-2 bg-slate-900/90 rounded-2xl p-5 border border-slate-800/80 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto relative">
              <div className="flex items-center justify-between text-slate-500 text-xs pb-3 border-b border-slate-800/60 mb-3">
                <span className="flex items-center gap-2">
                  <HiCommandLine className="text-indigo-400" />
                  main.{activeTab === 'javascript' ? 'tsx' : activeTab === 'python' ? 'py' : 'rs'}
                </span>
                <span>UTF-8</span>
              </div>

              {/* Code Snippet Display */}
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="leading-relaxed text-slate-300 font-mono whitespace-pre-wrap"
                >
                  <code>{codeExamples[activeTab]}</code>
                </motion.pre>
              </AnimatePresence>
            </div>

            {/* Right Col: AI Insights, Metrics & Activity */}
            <div className="space-y-4 flex flex-col justify-between">
              
              {/* Quality Score Card */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <HiChartBar className="text-cyan-400" /> Code Quality Score
                  </span>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                    {aiScore}/100
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
                  <motion.div
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 h-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${aiScore}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Passes all security lint checks with zero vulnerabilities.
                </p>
              </div>

              {/* AI Live Suggestions */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Real-time AI Suggestions
                </span>

                <div className="p-3 bg-indigo-950/40 rounded-xl border border-indigo-800/40 text-xs">
                  <div className="flex items-center gap-1.5 text-indigo-300 font-bold mb-1">
                    <HiCheckCircle className="text-emerald-400 w-4 h-4" />
                    Memory Optimization
                  </div>
                  <p className="text-slate-300 text-[11px] leading-snug">
                    Replaced memory allocation overhead. Projected 24ms faster execution.
                  </p>
                </div>

                <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold mb-1">
                    <HiExclamationTriangle className="text-amber-400 w-4 h-4" />
                    Deprecation Warning
                  </div>
                  <p className="text-slate-300 text-[11px] leading-snug">
                    Auto-refactored legacy import statement to match ESNext target.
                  </p>
                </div>
              </div>

              {/* Status footer */}
              <div className="p-3 bg-slate-900/90 rounded-2xl border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Branch: <code className="text-cyan-300">main</code></span>
                <span className="text-emerald-400 font-semibold">100% Tests Passing</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductPreview;
