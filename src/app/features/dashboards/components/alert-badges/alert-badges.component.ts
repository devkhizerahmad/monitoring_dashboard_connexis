import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../../../shared/components/badge/badge.component';
import { DashboardService } from '../../../../core/services/dashboard.service';

/**
 * Right-hand badges column, vertically pinned to the Latest Alerts panel.
 */
@Component({
  selector: 'app-alert-badges',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './alert-badges.component.html',
  styleUrls: ['./alert-badges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class AlertBadgesComponent {
  private dashboard = inject(DashboardService);

  badges = this.dashboard.alertBadges;
}