import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutChartComponent } from '../../../../shared/components/chart/donut-chart.component';
import { DashboardService } from '../../../../core/services/dashboard.service';
import { PERF_DOTS, PERF_TITLE } from '../../data/dashboard.mock';

/**
 * Generator performance panel — two donut charts + legends.
 */
@Component({
  selector: 'app-performance-panel',
  standalone: true,
  imports: [CommonModule, DonutChartComponent],
  templateUrl: './performance-panel.component.html',
  styleUrls: ['./performance-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class PerformancePanelComponent {
  private dashboard = inject(DashboardService);

  perfLoad = this.dashboard.perfLoad;
  perfFuel = this.dashboard.perfFuel;

  perfTitle = PERF_TITLE;
  perfDots = PERF_DOTS;
}