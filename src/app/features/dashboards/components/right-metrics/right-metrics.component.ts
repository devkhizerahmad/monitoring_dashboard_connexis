import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { LatestAlertsComponent } from '../latest-alerts/latest-alerts.component';
import { AlertBadgesComponent } from '../alert-badges/alert-badges.component';
import { DashboardService } from '../../../../core/services/dashboard.service';

/**
 * Right grid column (grid col 3) — metric cards, highlights, usage bar,
 * then the alerts row (panel + badges) pinned to the column bottom.
 */
@Component({
  selector: 'app-right-metrics',
  standalone: true,
  imports: [CommonModule, CardComponent, IconComponent, LatestAlertsComponent, AlertBadgesComponent],
  templateUrl: './right-metrics.component.html',
  styleUrls: ['./right-metrics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class RightMetricsComponent {
  private dashboard = inject(DashboardService);

  runningMetrics = this.dashboard.runningMetrics;
  highlightsHead = this.dashboard.highlightsHead;
  highlightCards = this.dashboard.highlightCards;
  usage = this.dashboard.usage;
}