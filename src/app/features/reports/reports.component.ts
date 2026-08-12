import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeaturePlaceholderComponent } from '../../shared/components/feature-placeholder/feature-placeholder.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [FeaturePlaceholderComponent],
  template: `
    <app-feature-placeholder
      eyebrow="Reports"
      title="Operational reports are next"
      summary="This section is ready for usage analytics, exportable reports, and historical generator performance."
      [notes]="['Usage summaries', 'CSV/PDF exports', 'Date-range filters']"
      footer="For now, this page acts as a polished placeholder instead of a dead-end stub."
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'stub-host' },
})
export class ReportsComponent {}
