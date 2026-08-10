import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsService } from '../../../../core/services/alerts.service';
import { ALERTS_TITLE } from '../../data/dashboard.mock';

/**
 * LATEST ALERTS panel with the View More › / View Less ‹ toggle.
 */
@Component({
  selector: 'app-latest-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-alerts.component.html',
  styleUrls: ['./latest-alerts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class LatestAlertsComponent {
  protected alertsService = inject(AlertsService);

  alertsTitle = ALERTS_TITLE;
}