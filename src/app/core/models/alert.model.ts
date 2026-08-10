/**
 * Alerts domain models.
 */
export type AlertSeverity = 'green' | 'amber' | 'red';

export interface AlertItem {
  dot: string;
  title: string;
  sub: string;
  time: string;
  hidden: boolean;
}

export type AlertVariant = 'critical' | 'minor' | 'normal' | 'upcoming';

export interface AlertBadge {
  variant: AlertVariant;
  count: number;
  label: string;
  lines?: string[];
}