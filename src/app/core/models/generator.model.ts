/**
 * Generator domain models — types for the dashboard status/stat tiles.
 */
export type IconName =
  | 'target-logo'
  | 'home'
  | 'report'
  | 'bell'
  | 'monitor'
  | 'bolt'
  | 'bolt-fill'
  | 'help'
  | 'chevron'
  | 'gplay'
  | 'apple'
  | 'bank-logo'
  | 'hourglass'
  | 'thermo'
  | 'cloud'
  | 'battery'
  | 'gauge'
  | 'power'
  | 'transformer'
  | 'antenna'
  | 'drop'
  | 'gen-dark'
  | 'gen-green'
  | 'gen-red';

export type GeneratorStatus = 'ON' | 'OFF';

export type StatIcon =
  | { type: 'icon'; name: IconName }
  | { type: 'img'; url: string }
  | { type: 'pct'; text: string; percent: number };

export interface StatCard {
  cardClass: string;
  title: string;
  value: string;
  valueClass?: 'green' | 'red';
  icon: StatIcon;
}

export interface GenStat {
  icon: IconName;
  label: string;
  sub: string;
  value: string;
  blue?: boolean;
  tinted?: boolean;
}