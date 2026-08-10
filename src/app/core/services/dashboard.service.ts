import { Injectable, signal } from '@angular/core';
import {
  ALERT_BADGES,
  ALERT_ITEMS,
  FUEL_FLOW_CONSUMED,
  FUEL_FLOW_FILLED,
  GEN_GROUPS,
  GEN_STATS,
  GEN_UNITS,
  GEN_ZONES,
  HIGHLIGHT_CARDS,
  HIGHLIGHTS_HEAD,
  IMAGES,
  NAV_ITEMS,
  PERF_FUEL,
  PERF_LOAD,
  RUNNING_METRICS,
  STAT_CARDS,
  TANK_METRICS,
  USAGE_SUMMARY,
} from '../../features/dashboards/data/dashboard.mock';
import type { NavItem } from '../models/nav-item.model';
import type { StatCard, GenStat } from '../models/generator.model';
import type { TankMetric, FuelFlow } from '../models/fuel.model';
import type { RunningMetric, HighlightCard, UsageSummary, PerformanceChart } from '../models/metric.model';
import type { AlertBadge, AlertItem } from '../models/alert.model';

/**
 * Single source of truth for dashboard tiles — signals fed from the mock.
 */
@Injectable({ providedIn: 'root' })
export class DashboardService {
  navItems = signal<NavItem[]>(NAV_ITEMS);

  statCards = signal<StatCard[]>(STAT_CARDS);

  genStats = signal<GenStat[]>(GEN_STATS);
  genGroups = signal<string[]>(GEN_GROUPS);
  genZones = signal<string[]>(GEN_ZONES);
  genUnits = signal<string[]>(GEN_UNITS);
  genImageUrl = signal<string>(IMAGES.GEN_BODY);

  tankMetrics = signal<TankMetric[]>(TANK_METRICS);
  fuelFlow = signal<FuelFlow>(FUEL_FLOW_FILLED);
  fuelConsumed = signal<FuelFlow>(FUEL_FLOW_CONSUMED);

  perfLoad = signal<PerformanceChart>(PERF_LOAD);
  perfFuel = signal<PerformanceChart>(PERF_FUEL);

  runningMetrics = signal<RunningMetric[]>(RUNNING_METRICS);
  highlightsHead = signal<string>(HIGHLIGHTS_HEAD);
  highlightCards = signal<HighlightCard[]>(HIGHLIGHT_CARDS);
  usage = signal<UsageSummary>(USAGE_SUMMARY);

  alerts = signal<AlertItem[]>(ALERT_ITEMS);
  alertBadges = signal<AlertBadge[]>(ALERT_BADGES);
}