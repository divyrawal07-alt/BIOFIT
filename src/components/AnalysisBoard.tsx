import React from 'react';
import { BodyAnalysis } from '../types';
import { motion } from 'motion/react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

interface Props {
  analysis: BodyAnalysis;
}

export const AnalysisBoard: React.FC<Props> = ({ analysis }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" id="analysis-board">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm"
        id="stat-bmi"
      >
        <div className="flex justify-between items-end mb-4">
          <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest">Your BMI</span>
          <span className="text-3xl font-black text-emerald-500">{analysis.bmi.toFixed(1)}</span>
        </div>
        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex mb-2">
            <div className="h-full bg-yellow-400 w-[20%]" style={{ opacity: analysis.bmi < 18.5 ? 1 : 0.4 }}></div>
            <div className="h-full bg-emerald-500 w-[30%]" style={{ opacity: analysis.bmi >= 18.5 && analysis.bmi < 25 ? 1 : 0.4 }}></div>
            <div className="h-full bg-orange-400 w-[25%]" style={{ opacity: analysis.bmi >= 25 && analysis.bmi < 30 ? 1 : 0.4 }}></div>
            <div className="h-full bg-red-500 w-[25%]" style={{ opacity: analysis.bmi >= 30 ? 1 : 0.4 }}></div>
        </div>
        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
          <span>Under</span>
          <span>Fit</span>
          <span>Over</span>
          <span>Obese</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm"
        id="stat-whr"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="p-2 bg-sky-100 text-sky-600 rounded-lg">
            <ShieldCheck size={18} />
          </div>
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">W.H.R Ratio</span>
        </div>
        <div className="text-4xl font-black text-slate-900 mb-1">{analysis.whr.toFixed(2)}</div>
        <div className="text-sm font-bold text-sky-500">
           {analysis.whr < 0.9 ? 'Optimal Ratio' : 'Monitor Area'}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm"
        id="stat-prop"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
            <Zap size={18} />
          </div>
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Vibe Check</span>
        </div>
        <div className="text-2xl font-black text-slate-900 leading-tight mb-2">{analysis.proportionality}</div>
        <div className="text-[10px] bg-rose-50 text-rose-600 px-3 py-1 rounded-full inline-block font-black uppercase tracking-wider">
          Profile: {analysis.suggestedBodyType}
        </div>
      </motion.div>
    </div>
  );
};
