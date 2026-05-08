import React, { useState } from 'react';
import { UserMetrics } from '../types';
import { motion } from 'motion/react';
import { Ruler, Weight, User } from 'lucide-react';

interface Props {
  onCalculate: (metrics: UserMetrics) => void;
}

export const MetricForm: React.FC<Props> = ({ onCalculate }) => {
  const [metrics, setMetrics] = useState<UserMetrics>({
    height: 170,
    weight: 70,
    waist: 80,
    hip: 95,
    shoulders: 110,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMetrics(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(metrics);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 max-w-xl mx-auto"
      id="metric-form-container"
    >
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <span className="p-2 bg-emerald-100 text-emerald-600 rounded-xl">
          <User size={20} />
        </span>
        Body Metrics
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[11px] uppercase font-black text-slate-400 tracking-[0.1em] flex items-center gap-2">
              <Ruler size={14} className="text-emerald-500" /> Height (cm)
            </label>
            <input
              type="number"
              name="height"
              value={metrics.height}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-lg font-bold focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all outline-none"
              id="input-height"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[11px] uppercase font-black text-slate-400 tracking-[0.1em] flex items-center gap-2">
              <Weight size={14} className="text-emerald-500" /> Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              value={metrics.weight}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-lg font-bold focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all outline-none"
              id="input-weight"
            />
          </div>
        </div>

        <div className="space-y-6">
          <label className="text-[11px] uppercase font-black text-slate-400 tracking-[0.1em]">Proportionality Metrics</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Waist</label>
              <input
                type="number"
                name="waist"
                value={metrics.waist}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3 text-md font-bold focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all outline-none"
                id="input-waist"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Hip</label>
              <input
                type="number"
                name="hip"
                value={metrics.hip}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3 text-md font-bold focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all outline-none"
                id="input-hip"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Shoulders</label>
              <input
                type="number"
                name="shoulders"
                value={metrics.shoulders}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3 text-md font-bold focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all outline-none"
                id="input-shoulders"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white rounded-2xl py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-emerald-600 transition-all cursor-pointer shadow-lg shadow-emerald-100"
          id="calculate-button"
        >
          Analyze My Profile
        </button>
      </form>
    </motion.div>
  );
};
