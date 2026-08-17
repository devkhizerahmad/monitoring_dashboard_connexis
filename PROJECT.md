# 📊 CONNEXIS Dashboard - Project Architecture

> **Generator Monitoring Dashboard for Meezan Bank**
> Built with Angular 22 + TypeScript 6 + Signals

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          CONNEXIS DASHBOARD                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────┐    ┌──────────────────────────────────────────────────┐  │
│  │              │    │                                                  │  │
│  │   SIDEBAR    │    │              MAIN CONTENT                        │  │
│  │              │    │                                                  │  │
│  │  ┌────────┐  │    │  ┌────────────────────────────────────────────┐ │  │
│  │  │ Logo   │  │    │  │              HEADER                        │ │  │
│  │  └────────┘  │    │  │  [☰] Meezan Bank                          │ │  │
│  │              │    │  └────────────────────────────────────────────┘ │  │
│  │  ┌────────┐  │    │                                                  │  │
│  │  │ Nav    │  │    │  ┌────────────────────────────────────────────┐ │  │
│  │  │ Items  │  │    │  │           ROUTER OUTLET                    │ │  │
│  │  │        │  │    │  │                                            │ │  │
│  │  │ 📊 Dash│  │    │  │    ┌──────────────────────────────────┐   │ │  │
│  │  │ 📋 Repo│  │    │  │    │                                  │   │ │  │
│  │  │ 🔔 Alar│  │    │  │    │      DASHBOARD / FEATURE         │   │ │  │
│  │  │ 📡 Moni│  │    │  │    │                                  │   │ │  │
│  │  │ ⚡ Outa│  │    │  │    └──────────────────────────────────┘   │ │  │
│  │  │ ❓ Help│  │    │  │                                            │ │  │
│  │  └────────┘  │    │  └────────────────────────────────────────────┘ │  │
│  │              │    │                                                  │  │
│  │  ┌────────┐  │    └──────────────────────────────────────────────────┘  │
│  │  │ QR +   │  │                                                          │
│  │  │ Store  │  │                                                          │
│  │  └────────┘  │                                                          │
│  │              │                                                          │
│  └──────────────┘                                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
connexis-dashboard/
│
├── 📄 angular.json              # Angular workspace config
├── 📄 package.json              # Dependencies & scripts
├── 📄 tsconfig.json             # TypeScript config
├── 📄 dashboard.html            # Original static HTML reference
├── 📄 opencode.json             # AI agent config
│
├── 📁 public/
│   └── 📁 assets/               # 20 PNG images for dashboard
│
├── 📁 src/
│   ├── 📄 index.html            # Shell HTML
│   ├── 📄 main.ts               # Bootstrap entry
│   ├── 📄 styles.scss           # Global styles
│   │
│   └── 📁 app/
│       ├── 📄 app.component.*   # Root shell
│       ├── 📄 app.config.ts     # App configuration
│       ├── 📄 app.routes.ts     # Route definitions
│       │
│       ├── 📁 core/             # Singleton services & models
│       │   ├── 📁 guards/       # Route guards
│       │   ├── 📁 interceptors/ # HTTP interceptors
│       │   ├── 📁 models/       # TypeScript interfaces
│       │   └── 📁 services/     # Business logic services
│       │
│       ├── 📁 features/         # Lazy-loaded pages
│       │   ├── 📁 dashboards/   # Main dashboard (FULL)
│       │   ├── 📁 alarms/       # Coming soon
│       │   ├── 📁 reports/      # Coming soon
│       │   ├── 📁 monitoring/   # Coming soon
│       │   ├── 📁 outage/       # Coming soon
│       │   └── 📁 help/         # Coming soon
│       │
│       ├── 📁 layout/           # Shell components
│       │   ├── 📁 header/
│       │   ├── 📁 main-layout/
│       │   └── 📁 sidebar/
│       │
│       ├── 📁 shared/           # Reusable UI components
│       │   ├── 📁 components/   # Badge, Card, Chart, etc.
│       │   ├── 📁 directives/   # Click outside
│       │   └── 📁 pipes/        # KVA pipe
│       │
│       └── 📁 styles/           # Design tokens
│           ├── 📄 _tokens.scss
│           ├── 📄 _typography.scss
│           └── 📄 _mixins.scss
```

---

## 🧩 Component Hierarchy

```
AppComponent (Root Shell)
│
├─── SidebarComponent
│    ├── Logo
│    ├── Navigation Links
│    └── QR Code + Store Badges
│
└─── MainLayoutComponent
     │
     ├─── HeaderComponent
     │    ├── Hamburger Menu
     │    └── Bank Selector
     │
     └─── [ROUTER OUTLET]
          │
          └─── DashboardComponent (Main Page)
               │
               ├─── StatsRowComponent
               │    └── 6x CardComponent
               │
               ├─── GeneratorStatusComponent
               │    ├── Generator Image
               │    ├── 3x SelectComponent
               │    └── 3x Stat Rows
               │
               ├─── FuelBreakdownComponent
               │    ├── 4x TankMetric Cards
               │    ├── Fuel Flow Cards
               │    └── PerformancePanelComponent
               │         ├── DonutChartComponent (Load)
               │         └── DonutChartComponent (Fuel)
               │
               └─── RightMetricsComponent
                    ├── 4x RunningMetric Cards
                    ├── Highlight Cards
                    ├── Usage Summary
                    └── Alert Section
                         ├── LatestAlertsComponent
                         └── AlertBadgesComponent
                              └── 4x BadgeComponent
```

---

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                      DATA FLOW DIAGRAM                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────┐                                          │
│  │  dashboard.mock  │  ← Single Source of Truth                │
│  │    (Constants)   │                                          │
│  └────────┬─────────┘                                          │
│           │                                                     │
│           ▼                                                     │
│  ┌──────────────────┐                                          │
│  │ DashboardService │  ← Central Data Store                    │
│  │    (Signals)     │                                          │
│  └────────┬─────────┘                                          │
│           │                                                     │
│           ├─────────────────────────────────────────────┐      │
│           │                                             │      │
│           ▼                                             ▼      │
│  ┌──────────────────┐                        ┌─────────────────┐
│  │  StatsRow        │                        │ AlertsService   │
│  │  GeneratorStatus │                        │  (Computed)     │
│  │  FuelBreakdown   │                        └────────┬────────┘
│  │  RightMetrics    │                                 │
│  └──────────────────┘                                 ▼
│                                            ┌──────────────────┐
│                                            │ LatestAlerts     │
│                                            │ AlertBadges      │
│                                            └──────────────────┘
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Design System

### Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--dark` | `#121212` | Background |
| `--card` | `#1E1E1E` | Card background |
| `--side` | `#1A1A1A` | Sidebar |
| `--blue` | `#4A90D9` | Primary accent |
| `--green` | `#4CAF50` | Success/ON |
| `--red` | `#F44336` | Error/OFF |
| `--yellow` | `#FFC107` | Warning |
| `--orange` | `#FF9800` | Minor alerts |
| `--purple` | `#9C27B0` | Special |
| `--gray` | `#9E9E9E` | Muted text |

### Component Variants

```
CardComponent
├── variant="stat"     → Stats row cards
├── variant="metric"   → Right column metrics
├── variant="fb"       → Fuel breakdown cards
└── variant="highlight" → Highlight cards
```

---

## 🛤️ Routes

| Path | Component | Status |
|------|-----------|--------|
| `/` | DashboardComponent | ✅ Full |
| `/reports` | ReportsComponent | 🔲 Placeholder |
| `/alarms` | AlarmsComponent | 🔲 Placeholder |
| `/monitoring` | MonitoringComponent | 🔲 Placeholder |
| `/outage` | OutageComponent | 🔲 Placeholder |
| `/help` | HelpComponent | 🔲 Placeholder |

---

## 🔌 Services

### DashboardService (Central Hub)

```
┌─────────────────────────────────────────────────────────────┐
│                    DashboardService                          │
├─────────────────────────────────────────────────────────────┤
│  Signals:                                                    │
│  ├── navItems          → Sidebar navigation                  │
│  ├── statCards         → Top 6 stat tiles                    │
│  ├── genStats          → Generator details                   │
│  ├── genGroups/Zones   → Dropdown options                    │
│  ├── genImageUrl       → Generator image                     │
│  ├── tankMetrics       → Fuel tank data                      │
│  ├── fuelFlow          → Fuel flow data                      │
│  ├── perfLoad/Fuel     → Donut chart configs                 │
│  ├── runningMetrics    → Right column metrics                │
│  ├── highlightCards    → Highlight section                   │
│  ├── usage             → Usage summary                       │
│  ├── alerts            → Alert items                         │
│  └── alertBadges       → Badge counts                        │
└─────────────────────────────────────────────────────────────┘
```

### ThemeService (UI State)

```
┌─────────────────────────────────────────────────────────────┐
│                      ThemeService                            │
├─────────────────────────────────────────────────────────────┤
│  sidebarCollapsed: signal<boolean>                          │
│  ├── toggle()                                                │
│  ├── collapse()                                              │
│  └── expand()                                                │
└─────────────────────────────────────────────────────────────┘
```

---

## 📐 Responsive Breakpoints

```
┌─────────────────────────────────────────────────────────────┐
│  DESKTOP (≥1264px)                                          │
│  ┌───────┬───────────────────────────────────────────────┐  │
│  │ 195px │              Fluid Content                    │  │
│  │ Side │                                               │  │
│  │ bar  │  ┌─────────┬─────────────┬───────────────┐   │  │
│  │      │  │ 252px   │   Fluid     │    302px      │   │  │
│  │      │  │ Gen     │   Fuel      │    Metrics    │   │  │
│  │      │  │ Status  │   Breakdown │    Right      │   │  │
│  │      │  └─────────┴─────────────┴───────────────┘   │  │
│  └───────┴───────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  TABLET (<1264px)                                           │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  [☰] Header                                        │    │
│  │  ┌─────────────────────────────────────────────┐   │    │
│  │  │         Single Column Stack                 │   │    │
│  │  └─────────────────────────────────────────────┘   │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│  MOBILE (<640px)                                            │
│  ┌──────────────────────┐                                   │
│  │  [☰] (Logo only)     │                                   │
│  │  ┌────────────────┐  │                                   │
│  │  │ Stats (stack)  │  │                                   │
│  │  │ Fuel (1-col)   │  │                                   │
│  │  │ Charts (stack) │  │                                   │
│  │  └────────────────┘  │                                   │
│  └──────────────────────┘                                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧱 Shared Components

| Component | Selector | Purpose |
|-----------|----------|---------|
| `CardComponent` | `<app-card>` | Polymorphic card wrapper |
| `BadgeComponent` | `<app-badge>` | Circular count badge |
| `DonutChartComponent` | `<app-donut-chart>` | CSS conic-gradient donut |
| `IconComponent` | `<app-icon>` | Inline SVG icon (28 icons) |
| `SelectComponent` | `<app-select>` | Styled native dropdown |
| `FeaturePlaceholderComponent` | `<app-feature-placeholder>` | Coming soon page |

---

## ⚡ Key Patterns

| Pattern | Implementation |
|---------|----------------|
| **Standalone Components** | All components are standalone (no NgModules) |
| **Signals-based State** | `signal()`, `computed()` for reactivity |
| **OnPush Change Detection** | Every component uses `OnPush` |
| **ViewEncapsulation.None** | Global styles (intentional) |
| **Lazy Loading** | All feature routes use `loadComponent` |
| **Content Projection** | `CardComponent` uses `<ng-content>` |
| **Mock-First** | All data from `dashboard.mock.ts` |

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Angular 22 |
| Language | TypeScript 6 |
| Styling | SCSS |
| State | Signals |
| Testing | Vitest |
| Build | @angular/build |

---

## 📝 Notes

- **Original Design**: `dashboard.html` (static HTML reference)
- **Assets**: 20 PNG images in `public/assets/`
- **Mock Data**: All values in `features/dashboards/data/dashboard.mock.ts`
- **Design Tokens**: `src/app/styles/_tokens.scss`

---

