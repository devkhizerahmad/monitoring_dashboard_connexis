# Graph Report - src  (2026-08-28)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 179 nodes · 319 edges · 13 communities (9 shown, 4 thin omitted)
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
- app.component.ts
- generator-status.component.ts
- alert.model.ts
- latest-alerts.component.ts
- QrCodeComponent
- AuthGuard
- KvaPipe
- AuthComponent
- ClickOutsideDirective

## God Nodes (most connected - your core abstractions)
1. `DashboardService` - 10 edges
2. `SelectComponent` - 10 edges
3. `ThemeService` - 8 edges
4. `IconName` - 7 edges
5. `FeaturePlaceholderComponent` - 7 edges
6. `IconComponent` - 7 edges
7. `AppComponent` - 6 edges
8. `DonutPercent` - 5 edges
9. `DonutSegment` - 5 edges
10. `PerformanceChart` - 5 edges

## Surprising Connections (you probably didn't know these)
- `PerformanceChart` --references--> `DonutPercent`  [EXTRACTED]
  app/core/models/metric.model.ts → app/core/models/fuel.model.ts
- `PerformanceChart` --references--> `DonutSegment`  [EXTRACTED]
  app/core/models/metric.model.ts → app/core/models/fuel.model.ts
- `HighlightCard` --references--> `IconName`  [EXTRACTED]
  app/core/models/metric.model.ts → app/core/models/generator.model.ts
- `RunningMetric` --references--> `IconName`  [EXTRACTED]
  app/core/models/metric.model.ts → app/core/models/generator.model.ts
- `NavItem` --references--> `IconName`  [EXTRACTED]
  app/core/models/nav-item.model.ts → app/core/models/generator.model.ts

## Import Cycles
- None detected.

## Communities (13 total, 4 thin omitted)

### Community 0 - "dashboard.mock.ts"
Cohesion: 0.11
Nodes (35): AlertItem, DonutPercent, DonutSegment, FuelFlow, TankMetric, GeneratorStatus, GenStat, IconName (+27 more)

### Community 1 - "right-metrics.component.ts"
Cohesion: 0.10
Nodes (22): DashboardService, Injectable, AlertBadgesComponent, Component, FuelBreakdownComponent, Component, PerformancePanelComponent, Component (+14 more)

### Community 2 - "app.routes.ts"
Cohesion: 0.13
Nodes (14): AlarmsComponent, Component, HelpComponent, Component, MonitoringComponent, Component, OutageComponent, Component (+6 more)

### Community 3 - "sidebar.component.ts"
Cohesion: 0.14
Nodes (10): ThemeService, Injectable, BANK, SIDEBAR, STORE_BADGES, HeaderComponent, Component, ICON_REGISTRY (+2 more)

### Community 4 - "app.component.ts"
Cohesion: 0.16
Nodes (7): AppComponent, Component, appConfig, routes, httpErrorInterceptor(), SidebarComponent, Component

### Community 5 - "generator-status.component.ts"
Cohesion: 0.16
Nodes (6): GeneratorStatusComponent, Component, ON_PILL_LABEL, STATUS_PANEL_TITLE, SelectComponent, Component

### Community 6 - "alert.model.ts"
Cohesion: 0.32
Nodes (5): AlertBadge, AlertSeverity, AlertVariant, BadgeComponent, Component

### Community 7 - "latest-alerts.component.ts"
Cohesion: 0.29
Nodes (5): AlertsService, Injectable, LatestAlertsComponent, Component, ALERTS_TITLE

### Community 8 - "QrCodeComponent"
Cohesion: 0.29
Nodes (3): QrCodeComponent, Component, ViewChild

## Knowledge Gaps
- **7 isolated node(s):** `GeneratorStatus`, `StatIcon`, `Weather`, `CardVariant`, `AlertSeverity` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ThemeService` connect `sidebar.component.ts` to `app.component.ts`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `DashboardService` connect `right-metrics.component.ts` to `dashboard.mock.ts`, `sidebar.component.ts`, `generator-status.component.ts`, `alert.model.ts`, `latest-alerts.component.ts`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **What connects `GeneratorStatus`, `StatIcon`, `Weather` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dashboard.mock.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11498257839721254 - nodes in this community are weakly interconnected._
- **Should `right-metrics.component.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09852216748768473 - nodes in this community are weakly interconnected._
- **Should `app.routes.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1341991341991342 - nodes in this community are weakly interconnected._
- **Should `sidebar.component.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1437908496732026 - nodes in this community are weakly interconnected._