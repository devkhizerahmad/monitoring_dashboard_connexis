import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ThemeService } from '../../core/services/theme.service';
import { BANK } from '../../features/dashboards/data/dashboard.mock';

/**
 * White topbar: hamburger (sidebar toggle) + bank selector.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class HeaderComponent {
  private theme = inject(ThemeService);

  bank = BANK;

  onToggle(): void {
    this.theme.toggle();
  }
}