# Graph Report - src  (2026-08-28)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 180 nodes · 320 edges · 13 communities (9 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3d250556`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dashboard.mock.ts
- right-metrics.component.ts
- app.routes.ts
- sidebar.component.ts
- App Component
- generator-status.component.ts
- alert.model.ts
- latest-alerts.component.ts
- QrCodeComponent
- AuthGuard
- KvaPipe
- AuthComponent
- ClickOutsideDirective

## God Nodes (most connected - your core abstractions)
1. `Right Metrics Component` - 12 edges
2. `Sidebar Component` - 11 edges
3. `Generator Status Component` - 11 edges
4. `DashboardService` - 10 edges
5. `SelectComponent` - 10 edges
6. `Fuel Breakdown Component` - 10 edges
7. `Dashboard Component` - 10 edges
8. `Performance Panel Component` - 9 edges
9. `ThemeService` - 8 edges
10. `Stats Row Component` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Index HTML` --calls--> `App Component`  [EXTRACTED]
  index.html → app/app.component.html
- `PerformanceChart` --references--> `DonutPercent`  [EXTRACTED]
  app/core/models/metric.model.ts → app/core/models/fuel.model.ts
- `PerformanceChart` --references--> `DonutSegment`  [EXTRACTED]
  app/core/models/metric.model.ts → app/core/models/fuel.model.ts
- `HighlightCard` --references--> `IconName`  [EXTRACTED]
  app/core/models/metric.model.ts → app/core/models/generator.model.ts
- `RunningMetric` --references--> `IconName`  [EXTRACTED]
  app/core/models/metric.model.ts → app/core/models/generator.model.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Dashboard Feature Composition** — app_features_dashboards_dashboard_component, app_features_dashboards_components_stats_row_stats_row_component, app_features_dashboards_components_generator_status_generator_status_component, app_features_dashboards_components_fuel_breakdown_fuel_breakdown_component, app_features_dashboards_components_right_metrics_right_metrics_component [EXTRACTED 0.90]

## Communities (13 total, 4 thin omitted)

### Community 0 - "dashboard.mock.ts"
Cohesion: 0.11
Nodes (36): AlertItem, DonutPercent, DonutSegment, FuelFlow, TankMetric, GeneratorStatus, GenStat, IconName (+28 more)

### Community 1 - "right-metrics.component.ts"
Cohesion: 0.10
Nodes (28): DashboardService, Injectable, AlertBadgesComponent, Component, Fuel Breakdown Component, FuelBreakdownComponent, Component, Performance Panel Component (+20 more)

### Community 2 - "app.routes.ts"
Cohesion: 0.13
Nodes (15): AlarmsComponent, Component, HelpComponent, Component, MonitoringComponent, Component, OutageComponent, Component (+7 more)

### Community 3 - "sidebar.component.ts"
Cohesion: 0.14
Nodes (12): ThemeService, Injectable, BANK, SIDEBAR, STORE_BADGES, Header Component, HeaderComponent, Component (+4 more)

### Community 4 - "App Component"
Cohesion: 0.15
Nodes (9): App Component, AppComponent, Component, appConfig, routes, httpErrorInterceptor(), SidebarComponent, Component (+1 more)

### Community 5 - "generator-status.component.ts"
Cohesion: 0.16
Nodes (8): Generator Status Component, GeneratorStatusComponent, Component, ON_PILL_LABEL, STATUS_PANEL_TITLE, Select Component, SelectComponent, Component

### Community 6 - "alert.model.ts"
Cohesion: 0.32
Nodes (7): AlertBadge, AlertSeverity, AlertVariant, Alert Badges Component, Badge Component, BadgeComponent, Component

### Community 7 - "latest-alerts.component.ts"
Cohesion: 0.29
Nodes (6): AlertsService, Injectable, Latest Alerts Component, LatestAlertsComponent, Component, ALERTS_TITLE

### Community 8 - "QrCodeComponent"
Cohesion: 0.29
Nodes (3): QrCodeComponent, Component, ViewChild

## Knowledge Gaps
- **8 isolated node(s):** `GeneratorStatus`, `StatIcon`, `Weather`, `CardVariant`, `AlertSeverity` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Dashboard Component` connect `right-metrics.component.ts` to `app.routes.ts`, `generator-status.component.ts`?**
  _High betweenness centrality (0.184) - this node is a cross-community bridge._
- **Why does `Generator Status Component` connect `generator-status.component.ts` to `dashboard.mock.ts`, `right-metrics.component.ts`, `sidebar.component.ts`?**
  _High betweenness centrality (0.142) - this node is a cross-community bridge._
- **Why does `Sidebar Component` connect `sidebar.component.ts` to `dashboard.mock.ts`, `right-metrics.component.ts`, `App Component`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **What connects `GeneratorStatus`, `StatIcon`, `Weather` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dashboard.mock.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11498257839721254 - nodes in this community are weakly interconnected._
- **Should `right-metrics.component.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09852216748768473 - nodes in this community are weakly interconnected._
- **Should `app.routes.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1341991341991342 - nodes in this community are weakly interconnected._