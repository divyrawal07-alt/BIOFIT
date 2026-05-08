import React, { useState, useMemo } from 'react';
import { MetricForm } from './components/MetricForm';
import { AnalysisBoard } from './components/AnalysisBoard';
import { ProductGrid } from './components/ProductGrid';
import { PRODUCTS, calculateAnalysis } from './constants';
import { BodyAnalysis } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Heart, Search, Menu, Zap } from 'lucide-react';

export default function App() {
  const [analysis, setAnalysis] = useState<BodyAnalysis | null>(null);

  const filteredProducts = useMemo(() => {
    if (!analysis) return PRODUCTS.slice(0, 6); // Featured if no analysis
    return PRODUCTS.filter(p => p.targetBodyTypes.includes(analysis.suggestedBodyType));
  }, [analysis]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 font-sans pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 px-10 py-4 flex justify-between items-center" id="main-nav">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-emerald-600">BIOFIT</span>
          </div>
          <div className="hidden md:flex gap-6 text-[13px] font-semibold text-slate-500">
            <a href="#" className="text-emerald-500">Analysis</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Shop</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Collections</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Search size={20} strokeWidth={2} className="cursor-pointer text-slate-400 hover:text-emerald-500 transition-colors" />
          <div className="relative">
             <ShoppingCart size={20} strokeWidth={2} className="cursor-pointer text-slate-400 hover:text-emerald-500 transition-colors" />
             <span className="absolute -top-1 -right-1 bg-emerald-500 text-[8px] text-white w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 cursor-pointer">
            <span className="text-xs font-bold">JD</span>
          </div>
          <Menu size={20} className="md:hidden cursor-pointer" />
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="hero">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">Biofit Analytics Platform</span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-slate-900">
              BODY <br />
              <span className="text-emerald-500">AWARE</span> <br />
              ESSENTIALS.
            </h1>
          </div>
          <p className="text-lg text-slate-500 max-w-md font-medium leading-relaxed">
            Stop guessing. Our biometric analysis determines your proportionality and suggests the exact tools, gear, and nutrition your physique demands.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => document.getElementById('metric-form-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold uppercase text-[12px] tracking-widest hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200 cursor-pointer"
            >
              Analyze My Profile
            </button>
            <button className="border-2 border-slate-200 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold uppercase text-[12px] tracking-widest hover:border-emerald-500 transition-all cursor-pointer shadow-sm">
              Browse All
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl skew-x-[1deg]"
        >
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
            alt="Fitness Concept" 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-10 left-10 text-white space-y-2">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Spring Collection 2026</div>
            <div className="text-2xl font-bold italic uppercase tracking-tighter">Engineered for Movement</div>
          </div>
        </motion.div>
      </header>

      {/* Calculator Logic Section */}
      <section id="metric-form-section" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-3">
             <h2 className="text-4xl font-black tracking-tighter text-slate-900">BIOMETRIC LAB</h2>
             <p className="text-slate-400 uppercase text-[12px] font-bold tracking-widest">Enter your stats for a tailored storefront</p>
          </div>
          
          <MetricForm onCalculate={(metrics) => {
            const result = calculateAnalysis(metrics);
            setAnalysis(result);
          }} />

          <AnimatePresence mode="wait">
            {analysis && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                className="space-y-12"
              >
                <div className="border-t border-gray-200 pt-16">
                  <div className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-gray-400">Analysis Results</div>
                  <AnalysisBoard analysis={analysis} />
                </div>
                
                <ProductGrid products={filteredProducts} />
              </motion.div>
            )}
          </AnimatePresence>

          {!analysis && (
            <div className="pt-8 opacity-40">
               <ProductGrid products={PRODUCTS.slice(0, 6)} />
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-slate-200" id="footer">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-black tracking-tighter text-emerald-600">BIOFIT</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-loose max-w-xs">
            Pioneering the intersection of biometrics and tailored commerce. Design for the individual.
          </p>
          <div className="flex gap-4">
             {['Instagram', 'Twitter', 'GitHub'].map(social => (
               <a key={social} href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-colors">{social}</a>
             ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">Navigation</div>
          <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-slate-600">
            <li><a href="#" className="hover:text-emerald-500 transition-all">Collections</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-all">Metric Guide</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-all">Tech Spec</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">Legal</div>
          <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-slate-600">
            <li><a href="#" className="hover:text-emerald-500 transition-all">Privacy</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-all">Terms</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-all">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
