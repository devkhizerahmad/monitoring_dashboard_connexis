import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { DashboardService } from '../../../../core/services/dashboard.service';

/**
 * The six compact stat tiles at the top of the content area.
 */
@Component({
  selector: 'app-stats-row',
  standalone: true,
  imports: [CommonModule, CardComponent, IconComponent],
  templateUrl: './stats-row.component.html',
  styleUrls: ['./stats-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class StatsRowComponent {
  private dashboard = inject(DashboardService);

  statCards = this.dashboard.statCards;
}