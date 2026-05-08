import { Product, BodyAnalysis, UserMetrics, BodyType } from './types';

export const calculateAnalysis = (metrics: UserMetrics): BodyAnalysis => {
  const heightInM = metrics.height / 100;
  const bmi = metrics.weight / (heightInM * heightInM);
  const whr = metrics.waist / metrics.hip;

  let bmiCategory = '';
  if (bmi < 18.5) bmiCategory = 'Underweight';
  else if (bmi < 25) bmiCategory = 'Normal';
  else if (bmi < 30) bmiCategory = 'Overweight';
  else bmiCategory = 'Obese';

  // Simple proportionality logic
  // Shoulder-to-Waist ratio (V-Taper)
  // Waist-to-Hip ratio (Hourglass vs Pear vs Rectangle)
  let proportionality = 'Determining...';
  let suggestedBodyType: BodyType = 'fit';

  if (bmi < 18.5) {
    suggestedBodyType = 'underweight';
    proportionality = 'Slender Profile';
  } else if (whr < 0.75 && metrics.shoulders > metrics.waist * 1.2) {
    suggestedBodyType = 'curvy';
    proportionality = 'Hourglass';
  } else if (metrics.shoulders > metrics.waist * 1.4) {
    suggestedBodyType = 'athletic';
    proportionality = 'V-Taper Athletic';
  } else if (bmi > 30) {
    suggestedBodyType = 'heavier';
    proportionality = 'Solid Foundation';
  } else {
    suggestedBodyType = 'fit';
    proportionality = 'Balanced Proportions';
  }

  return { bmi, bmiCategory, whr, proportionality, suggestedBodyType };
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Elite Adjustable Dumbbells',
    price: 299,
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=2000&auto=format&fit=crop',
    targetBodyTypes: ['athletic', 'fit', 'underweight'],
    description: 'Perfect for building muscle mass and metabolic conditioning.',
  },
  {
    id: '2',
    name: 'AeroStride Pro Runners',
    price: 145,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['fit', 'heavier', 'curvy'],
    description: 'Superior cushioning for all body types and high-impact sessions.',
  },
  {
    id: '3',
    name: 'PureWhey Isolate',
    price: 55,
    category: 'Supplement',
    image: 'https://images.unsplash.com/photo-1593095191850-2a76ad39147d?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['underweight', 'athletic'],
    description: 'High-density protein for targeted muscle recovery.',
  },
  {
    id: '4',
    name: 'Cork Synergy Yoga Mat',
    price: 75,
    category: 'Accessory',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=2025&auto=format&fit=crop',
    targetBodyTypes: ['fit', 'curvy', 'heavier'],
    description: 'Eco-friendly grip and stability for flexibility training.',
  },
  {
    id: '5',
    name: 'Metabolism Boost Greens',
    price: 42,
    category: 'Supplement',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop',
    targetBodyTypes: ['heavier', 'fit'],
    description: 'Natural micronutrients to support energy and weight management.',
  },
  {
    id: '6',
    name: 'Shadow Weighted Vest',
    price: 120,
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['athletic', 'fit'],
    description: 'Increase intensity for bodyweight exercises and stamina.',
  },
  {
    id: '7',
    name: 'Heritage 990v6 Classic',
    price: 195,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['fit', 'curvy', 'heavier'],
    description: 'The pinnacle of comfort and stability for daily performance.',
  },
  {
    id: '8',
    name: 'Flexi-Band Pro Set',
    price: 35,
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1599058917233-358350df26ee?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['underweight', 'fit', 'curvy'],
    description: 'Multi-resistance bands for deep stretching and muscle toning.',
  },
  {
    id: '9',
    name: 'Deep Tissue Relief Roller',
    price: 45,
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1600881333208-2c614ca20155?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['athletic', 'heavier'],
    description: 'High-density foam for intense recovery and myofascial release.',
  },
  {
    id: '10',
    name: 'Balance Stability Blocks',
    price: 28,
    category: 'Accessory',
    image: 'https://images.unsplash.com/photo-1518611012118-2960f8abc8ef?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['fit', 'curvy', 'underweight'],
    description: 'Support and extend your reach for improved flexibility.',
  },
  {
    id: '11',
    name: 'CloudRunner Velocity',
    price: 160,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop',
    targetBodyTypes: ['athletic', 'fit'],
    description: 'Lightweight explosive power for track and gym sessions.',
  },
  {
    id: '12',
    name: 'Dynamic Alignment Strap',
    price: 20,
    category: 'Accessory',
    image: 'https://images.unsplash.com/photo-1614981442188-6623630f9a2b?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['underweight', 'curvy', 'heavier'],
    description: 'Controlled stretching for improved range of motion.',
  },
  {
    id: '13',
    name: 'Mass Gainer Ultra-Complex',
    price: 65,
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1579722820308-d74e5719d3d3?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['underweight'],
    description: '1200+ calories per serving for rapid muscle mass accumulation.',
  },
  {
    id: '14',
    name: 'Micronized Creatine Pure',
    price: 32,
    category: 'Supplement',
    image: 'https://images.unsplash.com/photo-1593095191850-2a76ad39147d?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['underweight', 'athletic'],
    description: 'Enhance ATP production for explosive power and muscle volume.',
  },
  {
    id: '15',
    name: 'Carbingo Complex Carbs',
    price: 38,
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1626201314352-87c674251786?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['underweight', 'athletic'],
    description: 'Sustainable energy source to fuel intense hypertrophy training.',
  },
  {
    id: '16',
    name: 'Pro-Omega Healthy Fats',
    price: 24,
    category: 'Supplement',
    image: 'https://images.unsplash.com/photo-1616671285410-4f5763071387?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['underweight', 'fit'],
    description: 'Essential lipids for hormone optimization and steady weight gain.',
  },
  {
    id: '17',
    name: 'Hydra-V Hypertrophy BCAA',
    price: 34,
    category: 'Supplement',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['underweight', 'athletic'],
    description: 'Trigger protein synthesis and prevent muscle breakdown.',
  },
  {
    id: '18',
    name: 'Sleep & Grow Night Protein',
    price: 48,
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1612349317150-e4130ed7b0e1?q=80&w=2070&auto=format&fit=crop',
    targetBodyTypes: ['underweight', 'curvy'],
    description: 'Slow-digesting casein for 8-hour muscle recovery.',
  }
];
