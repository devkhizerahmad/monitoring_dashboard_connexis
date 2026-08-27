/**
 * Right-column metric / highlight / performance domain models.
 */
import type { IconName } from './generator.model';
import type { DonutPercent, DonutSegment } from './fuel.model';

export interface RunningMetric {
  icon: IconName;
  iconClass?: 'dark' | 'plain';
  iconStyle?: Record<string, string>;
  tag?: string;
  small: string;
  sub2?: string;
  value: string;
  valueClass?: 'red';
  valueStyle?: Record<string, string>;
}

export interface HighlightCard {
  icon: IconName;
  imageUrl?: string;
  title: string;
  date: string;
  value: string;
}

export interface Weather {
  city: string;
  temperature: string;
  updated: string;
  tag: string;
}

export interface UsageSummary {
  label: string;
  value: string;
  imageUrl?: string;
}

export interface PerformanceChart {
  variant: 'd1' | 'd2';
  segments: DonutSegment[];
  centerLines: string[];
  percentLabels: DonutPercent[];
  value: string;
  valueSmall: string;
}
