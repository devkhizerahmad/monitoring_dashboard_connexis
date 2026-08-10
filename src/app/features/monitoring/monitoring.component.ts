import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  template: `<p class="stub-page">MONITORING — stub page</p>`,
  styles: [`.stub-page{margin:0;color:#e8e8e8;font-size:14px;font-weight:600}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'stub-host' },
})
export class MonitoringComponent {}