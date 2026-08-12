import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ThemeService } from './core/services/theme.service';

/**
 * Shell: flex row [sidebar + routed main]. Sidebar lives OUTSIDE the
 * main layout so .app = sidebar + main exactly as in SOURCE_HTML.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { style: 'display:contents' },
})
export class AppComponent {
  private theme = inject(ThemeService);
  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);

  constructor() {
    effect(() => {
      const collapsed = this.theme.sidebarCollapsed();
      if (collapsed) {
        this.renderer.addClass(this.document.body, 'side-collapsed');
      } else {
        this.renderer.removeClass(this.document.body, 'side-collapsed');
      }
    });

    const viewport = this.document.defaultView;
    if (viewport && typeof viewport.matchMedia === 'function') {
      const mq = viewport.matchMedia('(max-width: 1263.98px)');
      const apply = () => {
        if (mq.matches) {
          this.theme.collapse();
        } else {
          this.theme.expand();
        }
      };
      if (typeof mq.addEventListener === 'function') {
        mq.addEventListener('change', apply);
      } else if (typeof mq.addListener === 'function') {
        mq.addListener(apply);
      }
      apply();
    } else {
      this.theme.expand();
    }
  }

  onScrim(): void {
    this.theme.collapse();
  }
}
