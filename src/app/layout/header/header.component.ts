import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ThemeService } from '../../core/services/theme.service';
import { BANKS } from '../../features/dashboards/data/dashboard.mock';

/**
 * White topbar: hamburger (sidebar toggle) + bank/company selector dropdown.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class HeaderComponent {
  private theme = inject(ThemeService);

  banks = BANKS;
  selected = signal(BANKS[0]);
  open = signal(false);

  onToggle(): void {
    this.theme.toggle();
  }

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.open.update((v) => !v);
  }

  selectBank(bank: (typeof BANKS)[number], event: MouseEvent): void {
    event.stopPropagation();
    this.selected.set(bank);
    this.open.set(false);
  }

  onDocumentClick(): void {
    this.open.set(false);
  }
}