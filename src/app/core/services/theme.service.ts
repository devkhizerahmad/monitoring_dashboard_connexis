import { Injectable, signal } from '@angular/core';

/**
 * UI state — sidebar collapse toggle (maps onto body.side-collapsed).
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  sidebarCollapsed = signal(false);

  toggle(): void {
    this.sidebarCollapsed.update((v) => !v);
  }
}