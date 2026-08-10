import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { PerformancePanelComponent } from '../performance-panel/performance-panel.component';
import { DashboardService } from '../../../../core/services/dashboard.service';
import { FUEL_CENTER_TITLE } from '../../data/dashboard.mock';

/**
 * Fuel breakdown centre column (grid col 2).
 */
@Component({
  selector: 'app-fuel-breakdown',
  standalone: true,
  imports: [CommonModule, CardComponent, PerformancePanelComponent],
  templateUrl: './fuel-breakdown.component.html',
  styleUrls: ['./fuel-breakdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class FuelBreakdownComponent {
  private dashboard = inject(DashboardService);

  tankMetrics = this.dashboard.tankMetrics;
  fuelFlow = this.dashboard.fuelFlow;
  fuelConsumed = this.dashboard.fuelConsumed;

  centerTitle = FUEL_CENTER_TITLE;
}