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

  fmtDate(raw: string): string {
    const m = raw.match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2}):(\d{2})$/);
    if (!m) return raw;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [, y, mo, d, hh, mm] = m;
    const hour = +hh;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const h12 = hour % 12 === 0 ? 12 : hour % 12;
    return `${d} ${months[+mo - 1]} ${y} \u00b7 ${h12}:${mm} ${ampm}`;
  }
}