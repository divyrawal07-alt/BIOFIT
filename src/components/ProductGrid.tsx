import React from 'react';
import { Product } from '../types';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface Props {
  products: Product[];
}

export const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="space-y-10" id="product-section">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Recommended for You</h2>
          <p className="text-slate-400 text-sm font-medium tracking-wide">Curated based on your unique body profile</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-white rounded-full text-xs font-bold border border-slate-200 shadow-sm text-slate-600 hover:border-emerald-500 transition-all cursor-pointer">Sort: Best Fit</button>
          <button className="px-5 py-2.5 bg-emerald-500 text-white rounded-full text-xs font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-600 transition-all cursor-pointer">Live Filters</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 group hover:shadow-xl hover:shadow-emerald-500/5 transition-all"
            id={`product-card-${product.id}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-emerald-50 mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-black text-emerald-600 shadow-sm uppercase tracking-widest">
                Fit Match: 98%
              </div>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <h3 className="font-bold text-slate-800 text-lg group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                <p className="text-slate-400 text-xs font-medium leading-relaxed">{product.description}</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-2xl font-black text-slate-900">${product.price}</span>
                <button className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-bold hover:bg-emerald-500 transition-colors shadow-lg shadow-slate-200">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
