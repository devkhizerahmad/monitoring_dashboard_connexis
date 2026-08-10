import { computed, inject, Injectable, signal } from '@angular/core';
import type { AlertItem } from '../models/alert.model';
import { DashboardService } from './dashboard.service';

/**
 * Latest Alerts list + "View More › / View Less ‹" expanded state.
 */
@Injectable({ providedIn: 'root' })
export class AlertsService {
  private dashboard = inject(DashboardService);

  alerts = this.dashboard.alerts;

  expanded = signal(false);

  visible = computed(() =>
    this.alerts().filter((a) => !a.hidden || this.expanded()),
  );

  viewMoreLabel = computed(() =>
    this.expanded() ? 'View Less ‹' : 'View More ›',
  );

  toggleMore(): void {
    this.expanded.update((v) => !v);
  }
}