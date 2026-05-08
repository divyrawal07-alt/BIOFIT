export interface UserMetrics {
  height: number; // cm
  weight: number; // kg
  waist: number; // cm
  hip: number; // cm
  shoulders: number; // cm
}

export type BodyType = 'underweight' | 'fit' | 'athletic' | 'curvy' | 'heavier';

export interface BodyAnalysis {
  bmi: number;
  bmiCategory: string;
  whr: number; // Waist to Hip Ratio
  proportionality: string;
  suggestedBodyType: BodyType;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  targetBodyTypes: BodyType[];
  description: string;
}
