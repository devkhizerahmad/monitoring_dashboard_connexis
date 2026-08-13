/**
 * ALL literals lifted verbatim from SOURCE_HTML (dashboard.html).
 * Typed by core/models. No component ever hard-codes a display string.
 */
import type { NavItem, StoreBadge } from '../../../core/models/nav-item.model';
import type { StatCard, GenStat } from '../../../core/models/generator.model';
import type { TankMetric, FuelFlow, DonutSegment, DonutPercent } from '../../../core/models/fuel.model';
import type {
  RunningMetric,
  HighlightCard,
  UsageSummary,
  PerformanceChart,
} from '../../../core/models/metric.model';
import type { AlertItem, AlertBadge } from '../../../core/models/alert.model';

/* ------------------------------------------------------------------ */
/* image / asset URLs (local generated assets in public/assets)         */
/* ------------------------------------------------------------------ */
export const IMAGES = {
  GEN_BODY: '/assets/gen-body.png',
  FILLING: '/assets/fuel-filled.png',
  DEPLETION: '/assets/total-fuel-depletion.png',
  TANK_OPENING: '/assets/tank-opening.png',
  TANK_CLOSING: '/assets/tank-closing.png',
  TANK_SIZE: '/assets/tank-size.png',
  FUEL_DEPLETION: '/assets/fuel-depletion.png',
  FUEL_FILLED: '/assets/fuel-filled.png',
};

/* ------------------------------------------------------------------ */
/* sidebar                                                             */
/* ------------------------------------------------------------------ */
export const NAV_ITEMS: NavItem[] = [
  { symbol: 'dashboard', label: 'DASHBOARD', route: '/' },
  { symbol: 'description', label: 'REPORT', route: '/reports' },
  { symbol: 'notifications', label: 'ALERMS', route: '/alarms' },
  { symbol: 'monitor', label: 'MONITORING', route: '/monitoring' },
  { symbol: 'bolt', label: 'OUTAGE', route: '/outage' },
  { symbol: 'help', label: 'HELP', route: '/help' },
];

export const SIDEBAR = {
  logo: { pre: 'NNE', x: 'X', post: 'IS' },
  lines: ['Download app,', 'stay connected'],
  scanLabel: 'SCAN ME',
} as const;

export const STORE_BADGES: StoreBadge[] = [
  {
    img: '/assets/playstore.png',
    line1: 'GET IT ON',
    line2: 'Google Play',
    href: 'https://play.google.com/store/search?q=connexis+tracker&c=apps',
  },
  {
    img: '/assets/appstore.png',
    line1: 'Download on the',
    line2: 'App Store',
    href: 'https://apps.apple.com/us/app/connexis-customer-app/id1544460706',
  },
];

/* ------------------------------------------------------------------ */
/* topbar                                                              */
/* ------------------------------------------------------------------ */
export const BANK = {
  name: 'Meezan Bank',
  tagline: 'The Premier Islamic Bank',
} as const;

/* ------------------------------------------------------------------ */
/* panel headings                                                      */
/* ------------------------------------------------------------------ */
export const STATUS_PANEL_TITLE = 'Generator Status';
export const ON_PILL_LABEL = 'ON';
export const FUEL_CENTER_TITLE = 'FUEL BREAKDOWN PER- LITRE';

export const PERF_TITLE = 'Generator Performance Over 1 Week';
export const PERF_DOTS = '...';

export const ALERTS_TITLE = 'LATEST ALERTS';

/* ------------------------------------------------------------------ */
/* stats row                                                           */
/* ------------------------------------------------------------------ */
export const STAT_CARDS: StatCard[] = [
  {
    cardClass: 'c1',
    title: 'TOTAL GENERATORS',
    value: '13',
    icon: { type: 'img', url: '/assets/total-generators.png' },
  },
  {
    cardClass: 'c2',
    title: 'ON',
    value: '10',
    icon: { type: 'img', url: '/assets/total-generators-on.png' },
  },
  {
    cardClass: 'c3',
    title: 'OFF',
    value: '3',
    icon: { type: 'img', url: '/assets/total-generators-off.png' },
  },
  {
    cardClass: 'c4',
    title: 'TOTAL FILLING',
    value: '100Ltr',
    valueClass: 'green',
    icon: { type: 'img', url: IMAGES.FILLING },
  },
  {
    cardClass: 'c5',
    title: 'TOTAL FUEL USED',
    value: '84Ltr',
    valueClass: 'red',
    icon: { type: 'pct', text: '84%', percent: 84 },
  },
  {
    cardClass: 'c6',
    title: 'TOTAL FUEL DEPLETION',
    value: '0Ltr',
    valueClass: 'red',
    icon: { type: 'img', url: IMAGES.DEPLETION },
  },
];

/* ------------------------------------------------------------------ */
/* generator status                                                    */
/* ------------------------------------------------------------------ */
export const GEN_GROUPS: string[] = ['Meezan Group', 'Habib Group'];
export const GEN_ZONES: string[] = ['Zone C', 'Zone A', 'Zone B'];
export const GEN_UNITS: string[] = ['GEN-7420', 'GEN-1043'];

export const GEN_STATS: GenStat[] = [
  { icon: 'power', imageUrl: '/assets/total-power.png', label: 'TOTAL POWER', sub: 'Last Day', value: '120 kVA' },
  {
    icon: 'gauge',
    imageUrl: '/assets/last-usage-hours.png',
    label: 'Last Usage Hours',
    sub: 'Since Last Day',
    value: '4h 30m 3s',
    blue: true,
    tinted: true,
  },
  {
    icon: 'thermo',
    imageUrl: '/assets/last-gen-start.png',
    label: 'Last Gen Start',
    sub: 'Since Last Day',
    value: '2:30pm',
    blue: true,
    tinted: true,
  },
];

/* ------------------------------------------------------------------ */
/* fuel breakdown                                                      */
/* ------------------------------------------------------------------ */
export const TANK_METRICS: TankMetric[] = [
  {
    title: 'TANK OPENING',
    sub: 'Updated 5 min ago',
    value: '69Ltr',
    imageUrl: IMAGES.TANK_OPENING,
  },
  {
    title: 'TANK CLOSING',
    sub: 'Updated 5 min ago',
    value: '91Ltr',
    imageUrl: IMAGES.TANK_CLOSING,
  },
  {
    title: 'Tank Size',
    value: '176 Ltr',
    tank: true,
    valueMarginTop: '8px',
    imageUrl: IMAGES.TANK_SIZE,
  },
  {
    title: 'FUEL DEPLETION',
    sub: 'Last Day',
    value: '0Ltr 0%',
    red: true,
    imageUrl: IMAGES.FUEL_DEPLETION,
  },
];

export const FUEL_FLOW_FILLED: FuelFlow = {
  title: 'FUEL FILLED',
  sub: 'Last Day',
  value: '0Ltr 0%',
  imageUrl: IMAGES.FUEL_FILLED,
};

export const FUEL_FLOW_CONSUMED: FuelFlow = {
  title: 'FUEL CONSUMED',
  sub: 'Since Last Day',
  value: '10.23Ltr',
  imageUrl: IMAGES.FUEL_DEPLETION,
};

/* ------------------------------------------------------------------ */
/* performance panel â€” donut charts                                  */
/* ------------------------------------------------------------------ */
export const PERF_LOAD: PerformanceChart = {
  variant: 'd1',
  segments: [
    { color: '#7c3aed', label: 'Capacity' },
    { color: '#2196f3', label: 'Load' },
  ],
  centerLines: ['Load', 'vs', 'Capacity'],
  percentLabels: [
    { text: '30%', cls: 'p30' },
    { text: '70%', cls: 'p70' },
  ],
  value: '10h 05m 15s',
  valueSmall: 'Gen 011, 2000KVA',
};

export const PERF_FUEL: PerformanceChart = {
  variant: 'd2',
  segments: [
    { color: '#2196f3', label: '177 gal' },
    { color: '#424242', label: '161.37 gal' },
    { color: '#7c3aed', label: '210.50 gal' },
    { color: '#fdd835', label: '322.75 gal' },
  ],
  centerLines: ['Fuel', 'Usage'],
  percentLabels: [],
  value: '771.62 gal',
  valueSmall: 'Gen 011  2000KVA',
};

/* ------------------------------------------------------------------ */
/* right column                                                        */
/* ------------------------------------------------------------------ */
export const RUNNING_METRICS: RunningMetric[] = [
  { icon: 'hourglass', small: 'Total Running Hours', value: '359 H' },
  {
    icon: 'battery',
    iconClass: 'dark',
    small: 'Ambient Temperature',
    value: '- - - - -',
    valueStyle: 'color:#333',
  },
  {
    icon: 'bolt-fill',
    iconStyle: 'background:#111;border-radius:50%',
    small: 'Average Load Factor',
    value: '0.342',
    valueStyle: 'color:#222',
  },
  {
    icon: 'cloud',
    iconClass: 'dark',
    iconStyle: 'position:relative;flex-direction:column',
    tag: 'LAHORE',
    small: 'Weather',
    sub2: 'Updated 5 min ago',
    value: '23°C',
    valueClass: 'red',
  },
];

export const HIGHLIGHTS_HEAD = 'October highlights';

export const HIGHLIGHT_CARDS: HighlightCard[] = [
  { icon: 'power', imageUrl: '/assets/maximal-usage.png', title: 'Maximal Usage', date: '2024-09-02 10:30:45', value: '160 kVA' },
  { icon: 'transformer', imageUrl: '/assets/minimal-usage.png', title: 'Minimal Usage', date: '2024-09-02 10:30:45', value: '40 kVA' },
];

export const USAGE_SUMMARY: UsageSummary = { label: 'Total Usage', value: '280 kVA', imageUrl: '/assets/total-usage.png' };

/* ------------------------------------------------------------------ */
/* latest alerts + badges                                              */
/* ------------------------------------------------------------------ */
export const ALERT_ITEMS: AlertItem[] = [
  { dot: '#4caf50', title: 'Ignition On', sub: 'Gen 07  200KVA', time: 'Yesterday, 13:20:44', hidden: false },
  { dot: '#f0a938', title: 'Filling', sub: 'Gen 018, 20KVA', time: 'Today, 11:00:32', hidden: false },
  { dot: '#e53935', title: 'Pouring', sub: 'Gen 21  200KVA', time: 'Yesterday, 13:20:44', hidden: false },
  { dot: '#e53935', title: 'Fuel Sensor Disconnect', sub: 'Gen 011  40KVA', time: 'Today, 11:00:32', hidden: false },
  { dot: '#e53935', title: 'Low Power Voltage', sub: 'Gen 125  150KVA', time: 'Yesterday, 13:20:44', hidden: false },
  { dot: '#f0a938', title: 'Tank Opening', sub: 'Gen 04  80KVA', time: 'Today, 09:12:05', hidden: true },
  { dot: '#4caf50', title: 'Gen Start', sub: 'Gen 09  100KVA', time: 'Today, 08:41:19', hidden: true },
];

export const ALERT_BADGES: AlertBadge[] = [
  { variant: 'critical', count: 6, label: 'Critical', lines: ['Critical'] },
  { variant: 'minor', count: 4, label: 'Minor', lines: ['Minor'] },
  { variant: 'normal', count: 7, label: 'Normal', lines: ['Normal'] },
  { variant: 'upcoming', count: 3, label: 'Upcoming Maintenance', lines: ['Upcoming', 'Maintenance'] },
];
