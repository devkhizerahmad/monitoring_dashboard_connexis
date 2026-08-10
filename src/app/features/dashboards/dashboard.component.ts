import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { StatsRowComponent } from './components/stats-row/stats-row.component';
import { GeneratorStatusComponent } from './components/generator-status/generator-status.component';
import { FuelBreakdownComponent } from './components/fuel-breakdown/fuel-breakdown.component';
import { RightMetricsComponent } from './components/right-metrics/right-metrics.component';

/**
 * Dashboard page — stats row + 3-column content grid.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatsRowComponent, GeneratorStatusComponent, FuelBreakdownComponent, RightMetricsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class DashboardComponent {}