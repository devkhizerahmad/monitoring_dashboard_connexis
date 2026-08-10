import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-outage',
  standalone: true,
  template: `<p class="stub-page">OUTAGE — stub page</p>`,
  styles: [`.stub-page{margin:0;color:#e8e8e8;font-size:14px;font-weight:600}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'stub-host' },
})
export class OutageComponent {}