import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeaturePlaceholderComponent } from '../../shared/components/feature-placeholder/feature-placeholder.component';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [FeaturePlaceholderComponent],
  template: `
    <app-feature-placeholder
      eyebrow="Monitoring"
      title="Live monitoring dashboards next"
      summary="This route can host sensor status, generator health, and real-time operational telemetry."
      [notes]="['Live telemetry', 'Health checks', 'Trend charts']"
      footer="The structure is now ready for actual monitoring content without redesigning the page shell."
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'stub-host' },
})
export class MonitoringComponent {}
