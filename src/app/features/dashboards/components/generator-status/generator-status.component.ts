import { ChangeDetectionStrategy, Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from '../../../../shared/components/select/select.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { DashboardService } from '../../../../core/services/dashboard.service';
import { ON_PILL_LABEL, STATUS_PANEL_TITLE } from '../../data/dashboard.mock';

/**
 * Generator status panel (left grid column).
 */
@Component({
  selector: 'app-generator-status',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectComponent, IconComponent],
  templateUrl: './generator-status.component.html',
  styleUrls: ['./generator-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class GeneratorStatusComponent {
  private dashboard = inject(DashboardService);

  genStats = this.dashboard.genStats;
  groups = this.dashboard.genGroups;
  zones = this.dashboard.genZones;
  units = this.dashboard.genUnits;
  genImageUrl = this.dashboard.genImageUrl;

  statusTitle = STATUS_PANEL_TITLE;
  onLabel = ON_PILL_LABEL;

  group = signal(this.dashboard.genGroups()[0]);
  zone = signal(this.dashboard.genZones()[0]);
  unit = signal(this.dashboard.genUnits()[0]);
}
