/**
 * Fuel breakdown / performance-chart domain models.
 */
export interface TankMetric {
  title: string;
  sub?: string;
  value: string;
  red?: boolean;
  tank?: boolean;
  valueMarginTop?: string;
  imageUrl: string;
}

export interface FuelFlow {
  title: string;
  sub: string;
  value: string;
  imageUrl: string;
}

export interface DonutSegment {
  color: string;
  label: string;
}

export interface DonutPercent {
  text: string;
  cls: string;
}