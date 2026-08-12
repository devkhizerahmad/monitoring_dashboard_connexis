import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { DashboardService } from '../../core/services/dashboard.service';
import { ThemeService } from '../../core/services/theme.service';
import { SIDEBAR, STORE_BADGES } from '../../features/dashboards/data/dashboard.mock';

/**
 * Left nav rail. Collapse (body.side-collapsed) is driven by
 * ThemeService via the shell's effect.
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class SidebarComponent {
  private dashboard = inject(DashboardService);
  private theme = inject(ThemeService);

  navItems = this.dashboard.navItems;
  sidebarCollapsed = this.theme.sidebarCollapsed;

  sidebar = SIDEBAR;
  storeBadges = STORE_BADGES;

  linkOptions(route: string): { exact: boolean } {
    return { exact: route === '/' };
  }

  onNavClick(): void {
    if (
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(max-width: 1263.98px)').matches
    ) {
      this.theme.collapse();
    }
  }
}
